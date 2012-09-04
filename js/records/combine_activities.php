<?php
include('../fetch/time_span.php');
include('../fetch/date_overlap_calculator.php');
include('activities.php');
//$combined_activities 
$middle_activities = array();
$final_activities = array();
$output = array();
$calc = new date_overlap_calculator();
$csv = fopen('combined.csv', 'w');
$js = fopen('combined.js', 'w');

foreach($combined_activities as $act) {
	$index = $act['project'] . "@@@" . $act['item'] ; //. "@@@" . $act['bdate'] . "@@@" .  $act['edate']
	$middle_activities[$index][] = new time_span($act['bdate'], $act['edate'] );
}

foreach($middle_activities as $index => $act) {
	$final_activities[$index] = $calc->merge_slots($act);
}

foreach($final_activities as $index => $acts) {
	list($project, $item) = explode('@@@', $index);
	foreach($acts as $act) {
		$output[] = array('project' => $project, 'item' => $item, 'bdate' => $act->bdate(), 'edate' => $act->edate() );
		fwrite($csv, "\"$project\", \"$item\", \"" . $act->bdate() . "\", \"" . $act->edate() . "\"\n");
		fwrite($js, "{'project' : '$project', 'item' : '$item', 'bdate' : new Date('" . $act->bdate() . "'), 'edate' : new Date('" . $act->edate() . "') },\n");
	}
}
fclose($csv);
fclose($js);

//var_dump($output);
echo "input lines: " . count($combined_activities) . "\n";
echo "output lines: " . count($output) . "\n";

?>
