<?php
include('time_span.php');
include('date_overlap_calculator.php');
include("../../json_helper.php");

class index {
	var $member;
	var $project;
	var $project_type;
	var $item;
	var $separator = '@@@';
	function __construct($m = '', $p = '', $i = '', $t = '') {
		$this->member = $m;
		$this->project = $p;
		$this->item = $i;
		$this->project_type = $t;
	}
	function to_s() {
		return $this->member . $this->separator . $this->project . $this->separator . $this->item . $this->separator . $this->project_type ;
	}
	function from_s($s) {
		list($this->member, $this->project, $this->item, $this->project_type) = explode($this->separator, $s);	
	}
}

class fetcher {
	var $sql = '';
	var $conn = '';
	var $connection_string = '';
	var $fetched_items = array();
	function __construct($sql, $connection_string) {
		$this->sql = $sql;
		$this->connection_string = $connection_string;
		$this->time_calc = new date_overlap_calculator();
	}
	function connect() {
		$this->conn = pg_connect($this->connection_string);
	}
	function disconnect() {
		$this->conn = pg_close($this->conn);
	}
	function fetch() {
		$this->go_get_items();
		$this->merge_items();
		return $this->fetched_items;
	}
	function go_get_items() {
		$set = pg_query($this->sql);
		while($row = pg_fetch_object($set)) {
			$i = new index($row->member, $row->project, $row->item, $row->type );
			$i = $i->to_s();
			$this->fetched_items[$i][] = new time_span($row->bdate, $row->edate);
		}
	}
	function merge_items() {
		foreach($this->fetched_items as $index => $group) {
			$group = $this->time_calc->merge_slots($group); 	
			$this->fetched_items[$index] = $group;
		}
	}
}

class activity_to_json_converter {
	var $json = null;
	var $activities = array();
	function __construct($activities) {
		$this->json = new Services_JSON();
		$this->activities = $activities;
	}
	function to_json() {
		$converted_activities = array();
		foreach($this->activities as $group_index => $activities) {
			$index = new index();
			$index->from_s($group_index);
			foreach ($activities as $obj) {
				$converted_activities[] = array('member' => $index->member,
						'project' => $index->project,
						'type' => $index->project_type,
						'item' => $index->item,
						'bdate' => $obj->bdate(),
						'edate' => $obj->edate(),
						);
			}
		}
		return $this->json->encode($converted_activities);
	}
}

class activity_subtractor {
	var $subject;
	var $subtractor;
	function __construct($activities, $subtraction_activities) {
		$this->subject = $activities;
		$this->subtractor = $subtraction_activities;
	}
	function subtract() {
		$time_calc = new date_overlap_calculator();
		$results = array();
		foreach($this->subject as $group_index => $time_spans) {
			if (isset($this->subtractor[$group_index])) {
				$results[$group_index] = $time_calc->time_span_group_subtract($time_spans, $this->subtractor[$group_index]);
			} else {
				$results[$group_index] = $time_spans;
			}
		}
		return $results;
	}
}

$conn_s = "host=myhost port=5432 dbname=coral user=reader password=mypassword";
$sql = "select member, project, p.type, item, r.bdate, r.edate from resmgr.reservation r left join rscmgr.project p on r.project = p.name where stale = 0 order by member, project, item, bdate;";
$reservation_fetcher = new fetcher($sql, $conn_s);
$reservation_fetcher->connect();
$reservations = $reservation_fetcher->fetch();

$sql = "select member, project, p.type, item, e.bdate, e.edate from eqmgr.eq_activity e left join rscmgr.project p on e.project = p.name where stale = 0 and e.bdate < e.edate order by member, project, item, bdate;";
$enables_fetcher = new fetcher($sql, $conn_s);
$enables_fetcher->connect();
$enables = $enables_fetcher->fetch();

$json_converter = new activity_to_json_converter($enables);
$fh = fopen('fetched_enables.js', 'w');
fwrite( $fh, $json_converter->to_json() );
fclose($fh);

$json_converter = new activity_to_json_converter($reservations);
$fh = fopen('fetched_reservations.js', 'w');
fwrite( $fh, $json_converter->to_json() );
fclose($fh);

$subtractor = new activity_subtractor($reservations, $enables);
$unused_reservations = $subtractor->subtract();
$json_converter = new activity_to_json_converter($unused_reservations);
$fh = fopen('fetched_unused_reservations.js', 'w');
fwrite( $fh, $json_converter->to_json() );
fclose($fh);


