
all_lab_activities = new lab_activity_catalog();
    
my_bill = new bill();

all_projects.each(function(proj) { 
    proj.set_bill_collector(my_bill); 
    proj.set_toolset(all_items);
} );

$(document).ready(function() {
    my_add_activity_view = new add_activity_view({model: all_lab_activities, selector: '#add_activities'});
    my_activities_view = new activities_view({model: all_lab_activities, selector: '#activities'});
    my_bill_calendar_view = new bill_calendar_view({model: my_bill, selector: '#totals_table'});
    
    my_tier1_view = new tier_view({model: tier1, selector: '#tier1_rate'});
    my_tier2_view = new tier_view({model: tier2, selector: '#tier2_rate'});
    my_tier3_view = new tier_view({model: tier3, selector: '#tier3_rate'});
    my_tier4_view = new tier_view({model: tier4, selector: '#tier4_rate'});
    
    all_lab_activities.on('add', function(item) {
        var proj = all_projects.find_by_name(item.get('project'));
         if (proj) {
            proj.add_lab_activity(item);
         } else {
            console.log('Error: no such project "' + item['project'] + '"');
         }
    });
    
    setup_sorter();

    $('#save').click(save);
    $('#load').click(load);
    $('#load_coral_enables').click(load_coral_enables);
    $('#summary_tab_handle').hide();

    my_cap_view = new cap_view({model: shared_cap, selector: '#cap_settings'});
    
    all_backbone_objects = {
        "all_items": all_items,
        "all_tiers": all_tiers,
        "shared_cap": shared_cap
    };
    
    restore_if_asked();
    
    my_summary_view = new summary_view({ model: my_bill, el: $('#summary')});

});

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

function setup_sorter() {
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
       sorter.manual_assign(item.get('name'), item.get('tier').get('name')); 
    });
}

function crunch_the_numbers(some_enables) {
    var number_of_errors = 0;
    
    for (i = 0; i < some_enables.length; i++) {
        all_lab_activities.add(some_enables[i]);
    }
}

function load_coral_enables() {
    //turn off the month_view's observe binding on the bill because this will take a while
    $(my_bill_calendar_view.month_views).each(function(key, val){val.model.off('add', val.render, val);});
    all_lab_activities.reset();
    my_bill.reset();

    var batch = new batch_processor({
        data: all_billable_activities,
        process_function: crunch_the_numbers,
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
