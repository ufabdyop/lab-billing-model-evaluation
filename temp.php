<?php
include("json_helper.php");
$json = new Services_JSON();
$string = file_get_contents('js/old_system_reservations.js');
$objects = $json->decode($string);
$output = array();
for ($i = 0; $i < count($objects); $i++) {
	$obj = $objects[$i];
	$object_vars = array_keys(get_object_vars($obj));
	if (!in_array('firstname', $object_vars)) {
		$obj->firstname = 'unknown';
	}
	if (!in_array('lastname', $object_vars)) {
		$obj->lastname = 'unknown';
	}
	if (!in_array('project', $object_vars)) {
		$obj->project = 'unknown';
	}
	if (!in_array('project_type', $object_vars)) {
		$obj->project_type = 'unknown';
	}
	
	$output[] = array('member' => $obj->firstname . ' ' . $obj->lastname,
			'project' => $obj->project,
			'type' => $obj->project_type,
			'item' => $obj->item,
			'bdate' => $obj->bdate,
			'edate' => $obj->edate,
			);
}

$new_json = $json->encode($output);
//debugging
$fh = fopen( '/tmp/json.txt', 'w' );
fwrite( $fh, $new_json );
fclose($fh);
?>
