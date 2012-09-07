
all_lab_activities = new lab_activity_catalog();
lab_activity_processing_queue = new lab_activity_catalog();
my_bill = new bill();
all_tiers = new tier_catalog();
all_items = new item_catalog();
all_projects = new project_catalog();
unknown_projects = [];
all_types = {};

tier1 = new tier({name: "Tier 1", rate: 1, external_rate: 2});
tier2 = new tier({name: "Tier 2", rate: 1, external_rate: 2});
tier3 = new tier({name: "Tier 3", rate: 1, external_rate: 2});
tier4 = new tier({name: "Tier 4", rate: 1, external_rate: 2});

all_tiers.add(tier1);
all_tiers.add(tier2);
all_tiers.add(tier3);
all_tiers.add(tier4);

shared_cap = new cap({threshold: 1, rate: 1});
no_cap = new cap({threshold: 1, rate: 1});
free_cap = new cap({threshold: 0, rate: 0});

$(document).ready(function() {
    initialize();
});

function initialize() {
    setup_models_and_then_call_model_loading_complete();
}

function model_loading_complete() {
    setup_views();
    setup_tool_tier_assignment_ui();
    setup_button_event_handlers();
    restore_if_asked();
    fix_tabbing();
}

function fix_tabbing() {
    var tabindex = 0;
    $('input').each(function(index, input) { $(input).attr('tab-index', tabindex++); });
}

function setup_button_event_handlers() {
    $('#save').click(save);
    $('#load').click(load);
    $('#load_coral_enables').click(load_coral_enables);
    $('#summary_tab_handle').hide();
}

function json_to_models(data) {
    json_to_toolset(data['items']);
    json_to_projects(data['projects']);
    json_to_activities(data['activities']);
    model_loading_complete();
}

function setup_models_and_then_call_model_loading_complete() {
    lab_activity_processing_queue.on('add', function(obj) {
	obj.get('project').add_lab_activity(obj);
    });
    $.getJSON('js/records/combined_records.json', json_to_models);
    my_error_log = new error_log();
}

    function json_to_toolset(json_data) {
        $.each(json_data, function(key, tool) {
            console.log('adding to toolset: ' + tool.name);
            //all_items.add( new item({name: tool.name, tier: tier1}));
            all_items.add( new item({name: tool.name}));
        });
    }

    function json_to_projects(json_data) {
        $.each(json_data, function(key, proj) {
            register_project_type(proj.type);
            var cap;
            if (proj.type == 'off campus') {
                cap = no_cap;
            } else if (proj.type == 'staff') {
                cap = free_cap;
            } else {
                cap = shared_cap;
            }
            all_projects.add(new project({name: proj.name, 
                                    type: proj.type, 
                                    cap: cap,
                                    toolset: all_items,
                                    collector: my_bill}));
            console.log('adding to projects: ' + proj);
        });
    }

    function register_project_type(type) {
            if (type in all_types) {
                all_types[type]++;
            } else {
                all_types[type] = 1;
            }
    }

    function json_to_activities(json_data) {
        $.each(json_data, function(key, act) {
            console.log('adding to activities: ' + act);
	    var project = all_projects.find_by_name(act.project);
	    if (project) {
		    all_lab_activities.add(
			new lab_activity({
			    project: all_projects.find_by_name(act.project),
			    item: all_items.find_by_name(act.item),
			    month: act.month,
			    year: act.year,
			    hours: act.hours
			})
		    );
	    } else {
		unknown_projects.push(act.project);
	    }
        });
    }


function setup_views() {
    my_bill_calendar_view = new bill_calendar_view({model: my_bill, selector: '#totals_table'});
    my_tier1_view = new tier_view({model: tier1, selector: '#tier1_rate'});
    my_tier2_view = new tier_view({model: tier2, selector: '#tier2_rate'});
    my_tier3_view = new tier_view({model: tier3, selector: '#tier3_rate'});
    my_tier4_view = new tier_view({model: tier4, selector: '#tier4_rate'});
    my_cap_view = new cap_view({model: shared_cap, selector: '#cap_settings'});
    my_summary_view = new summary_view({model: my_bill, el: $('#summary')});
    my_projects_view = new projects_view({model: all_projects, el: $('#projects')});
    my_activities_view = new lab_activity_view({model: all_lab_activities, el: $('#activities')});
    my_error_log_view = new error_log_view({model: my_error_log, el: $('#errors')});
}

function restore_if_asked() {
    if (global_restore_object != null) {
        var items = global_restore_object.all_items;
	var i = 0;
        $(items).each(function() {
		if ( (this != undefined ) &&  (this.tier != undefined ) && (this.tier.name != undefined) ) {
			sorter.manual_assign(this.name, this.tier.name);
		}
        });
        tier1.set('rate', global_restore_object.all_tiers[0].rate);
        tier2.set('rate', global_restore_object.all_tiers[1].rate);
        tier3.set('rate', global_restore_object.all_tiers[2].rate);
        tier4.set('rate', global_restore_object.all_tiers[3].rate);
        shared_cap.set('threshold', global_restore_object.shared_cap.threshold);
        shared_cap.set('rate', global_restore_object.shared_cap.rate);
    }
}

function serialize() {
    all_backbone_objects = {
        "all_items": all_items,
        "all_tiers": all_tiers,
        "shared_cap": shared_cap
    };
    
    var json = JSON.stringify(all_backbone_objects);
    return json;
}

function save() {
    var postData = {
        input: serialize()
    };
    $.post('save_for_download.php', postData, function(retData) {
        downloadURL('download.php');
    }); 
}

var downloadURL = function downloadURL(url)
{
    var iframe;
    iframe = document.getElementById("hiddenDownloader");
    if (iframe === null)
    {
        iframe = document.createElement('iframe');  
        iframe.id = "hiddenDownloader";
        iframe.style.visibility = 'hidden';
        document.body.appendChild(iframe);
    }
    iframe.src = url;   
}

function load() {
    $('<form action="upload.php" method="post" enctype="multipart/form-data"> \
		<input type="file" name="file">  \
		<input type="submit" name="submit" value="Submit"> \
	</form>').dialog({width: 500});
}

function setup_tool_tier_assignment_ui() {
    //set up categorizer
    var tool_names = all_items.pluck('name');
    var tier_names = all_tiers.pluck('name');
    sorter = new Taxonomizer();
    sorter.initialize($('#tools_tab'));
    sorter.set_categories(tier_names);
    sorter.set_subjects(tool_names);
    sorter.set_observer(function(src, tgt) {
        var tier = all_tiers.where({name: tgt})[0];
        var tool = all_items.where({name: src})[0];
        tool.set('tier', tier);
    });
    all_items.each(function(item) {
        var tier = item.get('tier');
        if (tier) {
            sorter.manual_assign(item.get('name'), item.get('tier').get('name'));    
        }
    });
}

function crunch_the_numbers(some_enables) {
    var number_of_errors = 0;
    
    for (i = 0; i < some_enables.length; i++) {
        lab_activity_processing_queue.add(some_enables[i]);
    }
}

function load_coral_enables() {
    //turn off the month_view's observe binding on the bill because this will take a while
    $(my_bill_calendar_view.month_views).each(function(key, val){val.model.off('add', val.render, val);});
    lab_activity_processing_queue.reset();
    my_bill.reset();

    var batch = new batch_processor({
        data: all_lab_activities.toArray(),
        process_function: crunch_the_numbers,
        error_handler: function(msg) {
		my_error_log.add(new error({message: msg}));
		$('#error_tab_handle a').click().animate({color: 'white', "background-color": 'red'}, 1000).delay(3000).animate({color: '#333', "background-color": "#f5f5f5"}, 1000);
	},
	complete: function() {
	    //turn bindings back on for views
	    $(my_bill_calendar_view.month_views).each(function(key, val){val.model.on('add', val.render, val);});
	    $(my_bill_calendar_view.month_views).each(function(key, val){val.render();});
            my_summary_view.render();
            $('#summary_tab_handle').show();
	}
    });
    
    batch.go();
}

overlay_elem = '<div id="batch_overlay" style="display: block; position: absolute; top: 0%; left: 0%; width: 100%; height: 100%; background-color: black; z-index:1001; -moz-opacity: 0.8; opacity:.80; filter: alpha(opacity=80);"></div>';

progress_elem = '<div id="batch_progress_outer" style="position: absolute; top: <%=offsetY%>; width: 100%; z-index: 1002">\n\
                                <div id="batch_progress_info" style="padding: 10px 10px 50px 10px; text-align: center; width: 400px; height: 300px; background-color: white; z-index: 1002; margin-left: auto; margin-right: auto;">Loading \n\
                                <div id="batch_progress_container" style="width: 400px; height: 300px; border: 1px solid #ccc; background-color: white; z-index: 1002; margin-left: auto; margin-right: auto;">\n\
                                    <div class="progress_bar" id="batch_progress" style="width: 0; background-color: #cfc; height: 300px">\n\
                                    </div>\n\
                                </div>\n\
				</div>\
                                </div>';

