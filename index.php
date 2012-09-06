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
                        ul#rules {
                            list-style-type: circle;
                            list-style-position: inside;
                        }
                        ul#rules li {
                            padding-left: 20px;
                        }
                        #summary_tab_handle {
                            display: none;
                        }
                        
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
        <!-- <script src="js/records/all_billable_activities.js" type="text/javascript"></script> -->
        <!-- <script src="js/records/sample_of_activities.js" type="text/javascript"></script> -->
        <!-- <script src="js/records/coral_enables.js" type="text/javascript"></script> -->
        
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
        <h2>Billing Model Evaluations</h2>
        <p>This page has a set of tools for examining different billing models for the Utah Nanofab.
        The billing strategy that we have discussed so far is as follows:
        <ul id="rules">
            <li>Each tool in the nanofab can be placed into one of 4 tiers.</li>
            <li>Each tier has an hourly rate for internal (University of Utah) projects and one rate for external projects.</li>
            <li>At the end of the month, each project will be billed according to the number of hours that they used each tool 
                (ie. [The total number of tier 1 tool hours multiplied by the tier 1 rate] + [The total number of tier 2 tool hours multiplied by the tier 2 rate]...)
            </li>
            <li>Reservations are billed at the same rate as tool usage, but where reservations and usage overlap, projects will not be double billed.</li>
            <li>Optionally, a monthly cap can be used to reduce costs on University of Utah projects.  The cap can be configured such that once a project reaches the cap amount, additional charges are scaled by a percentage instead of just being dropped.</li>
            <li>Any projects of type "staff" will not be billed.</li>
        </ul>
        </p>
    </div>
	<div class="eleven columns">
		<ul id="activity_tabs" class="tabs">
			<li><a class="active" href="#config_tab">Configuration</a></li>
			<li><a href="#tools_tab">Tool-Tier Assignment</a></li>
			<li id="projects_tab_handle"><a href="#projects_tab">All Projects</a></li>
			<li><a href="#activities_tab">All Activities</a></li>
			<li id="summary_tab_handle"><a href="#summary_tab">Summary</a></li>
		</ul>
		<ul id="activity_tabs_content" class="tabs-content">
                    <li class="active" id="config_tab">
                        <div id="collection" class="eight columns">
                        <form id="variables">
                            <div class="three columns">
                                <div id="tier1_rate"></div>
                                <div id="tier2_rate"></div>
                            </div>
                            <div class="three columns">
                                <div id="tier3_rate"></div>
                                <div id="tier4_rate"></div>
                            </div>
                            <div id="cap_settings" class="six columns"></div>
                        </form> 
                        </div>
                    </li>
                    <li id="tools_tab"> <table id="reservations" class="display"></table></li>
                    <li id="summary_tab">    <div id="summary"></div></li>
                    <li id="projects_tab">    <table id="projects"></table></li>
                    <li id="activities_tab">    <table id="activities"></table></li>
		</ul>
	</div>
                        <div id="report" class="three columns">
				<label>Estimated Recovery</label>
                                <table id="totals_table"></table>
                        </div>
    <div class="twelve columns">
                <input type="button" name="save" value="Save Configuration" id="save"/>
		<input type="button" name="load" value="Load Configuration" id="load"/>
		<input type="button" name="load_enables" value="Load History" id="load_coral_enables"/>

    </div>
</body>
</html>
