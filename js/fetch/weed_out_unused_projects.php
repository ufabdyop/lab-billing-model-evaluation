<?php
include('json_helper.php');
include('records.php');

$used_projects = array();
foreach($activities as $a) {
	$current_project = $a['project'];
	$used_projects[$current_project] = 1;
}
$used_projects = array_keys($used_projects);

$need_to_categorize = array();
$unused_projects = array();
foreach($projects as $p) {
	$proj = $p['name'];	
	if (!in_array($proj, $used_projects)) {
		$unused_projects[$proj] = 1;
	} else {
		if ($p['type']) {
		} else {
			$need_to_categorize[] = $proj;
		}	
	}
}
$unused_projects = array_keys($unused_projects);


foreach ($need_to_categorize as $row) {
}
echo "SELECT * FROM rscmgr.project where name in ('" . implode("','", $need_to_categorize) . "')";

?>
