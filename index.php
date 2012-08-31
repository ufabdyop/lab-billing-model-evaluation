<!DOCTYPE html>
<html lang="en" class="container">
<head>
    <meta charset="UTF-8" />
    <title>Billing Models Evaluations</title>
<style type="text/css">
	@import "css/demo_table.css";
	@import "css/demo_page.css";
	@import "css/jquery-ui-1.7.2.custom.css";
	@import "css/skeleton/stylesheets/base.css";
	@import "css/skeleton/stylesheets/layout.css";
	@import "css/skeleton/stylesheets/skeleton.css";
		
			/*
			 * Override styles needed due to the mix of three different CSS sources! For proper examples
			 * please see the themes example in the 'Examples' section of this site
			 */
			.dataTables_info { padding-top: 0; }
			.dataTables_paginate { padding-top: 0; }
			.css_right { float: right; }
			#example_wrapper .fg-toolbar { font-size: 0.8em }
			#theme_links span { float: left; padding: 2px 10px; }
			#example_wrapper { -webkit-box-shadow: 2px 2px 6px #666; box-shadow: 2px 2px 6px #666; border-radius: 5px; }
			#enables tbody {
				border-left: 1px solid #AAA;
				border-right: 1px solid #AAA;
			}
			#enables thead th:first-child { border-left: 1px solid #AAA; }
			#enables thead th:last-child { border-right: 1px solid #AAA; }
</style>
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css" type="text/css" media="all" />        
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.dataTables.js" type="text/javascript"></script>
	<script src="js/tabs.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/underscore.js"></script>
        <script type="text/javascript" src="js/backbone.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.22/jquery-ui.min.js"></script>
        <script src="js/domain_models.js" type="text/javascript"></script>
        <script src="js/taxonomizer.js" type="text/javascript"></script>
        <script src="js/domain_objects.js" type="text/javascript"></script>
        <script src="js/coral_enables.js" type="text/javascript"></script>
        
	<script language="javascript">
            <?php
            if (isset($_REQUEST['restore'])) {
                $filename = $_REQUEST['restore'];
                if (!preg_match('/^billing_model_json\d\d\d\d$/', $filename)) {
                    throw new Exception("invalid json file");
                }
                $restore = file_get_contents('/tmp/upload_' . $_REQUEST['restore']);
                echo "var global_restore_object = $restore;";
            } else {
                echo "var global_restore_object = null;";
            }
            
            ?>
		$(document).ready(function() {
		});
	</script>
</head>
<body>
    <div class="sixteen columns">
	<p>The formula we are using to calculate the charges for cost recovery for a single project for a given month is:<br/>
	<p><strong>For tier 1 tools: </strong><img src="formula.png" alt="f(h) = \begin{cases} RH & \text{ if }RH < c\\ c + rh & \text{ if } RH \ge c \end{cases}"/> Where R is the Rate, H is the total number of hours of activity, r is the reduced rate that applies above the cap (R multiplied by the cap reduction), h is the number of hours that are billed above the cap.
	<p>And analogously for tiers 2-4</p>
    </div>
	<div class="eleven columns">
		<ul id="activity_tabs" class="tabs">
			<li><a class="active" href="#config_tab">Configuration</a></li>
			<li><a href="#tools_tab">Tool-Tier Assignment</a></li>
			<li><a href="#enables_tab">Chargeable Activities</a></li>
		</ul>
		<ul id="activity_tabs_content" class="tabs-content">
                    <li class="active" id="config_tab">
                        <div id="collection" class="six columns">
                    <form id="variables">
                        <div id="tier1_rate"></div>
                        <div id="tier2_rate"></div>
                        <div id="tier3_rate"></div>
                        <div id="tier4_rate"></div>
                        <div id="cap_settings"></div>
                        </form> 
                        </div>
                        
                    </li>
			<li id="enables_tab">        
                            <div id="add_activities"></div>
                            <div id="container">
                                <div id="activities" class="display"></div>
                                
                            </div>
                        </li>
			<li id="tools_tab"> <table id="reservations" class="display"></table></li>
		</ul>
	</div>
                        <div id="report" class="three columns">
				<label>Estimated Recovery</label>
                                <table id="totals_table"></table>
                        </div>
    <div class="twelve columns">
		<input type="button" value="Run Calculation" id="run_calculation"/>
                <input type="button" name="save" value="Save Configuration" id="save"/>
		<input type="button" name="load" value="Load Configuration" id="load"/>
		<input type="button" name="load_enables" value="Load Coral Enables" id="load_coral_enables"/>

    </div>
</body>
</html>