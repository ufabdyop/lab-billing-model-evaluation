var cap;
var cap_reduction;
var big_table;
var oTable;

$(document).ready(function() {
	$('#cap').change(function() {
		cap = $('#cap').val();
	});
	$('#cap_reduction').change(function() {
		cap_reduction = $('#cap_reduction').val();
	});
});
/*
 * a Bill is simply a number
 *
 * */
function bill() {
	this.amount = 0;
	this.total = function() {
		return this.amount;
	}
	this.add = function(new_amount) {
		this.amount += new_amount;
	}
}
function get_rate(item) {
	var rate = $('#tier1_rate').val();
	return rate;
}

function project (name, type) {
	this.type = type; 
	this.name = name; 
	this.total = 0;
	this.bills = {};
	this.get = function(month, year) {
		if (this.bills[year + ' ' + month]) {
		} else {
			this.bills[year + ' ' + month] = new bill();
		}
		return this.bills[year + ' ' + month];
	}
	this.add = function(month, year, amount) {
		var bill = this.get(month, year);
		var multiplier = 1;



		if (bill.amount >= cap) {
			if (this.type == 'local') {
				if (cap_reduction) {
					multiplier = cap_reduction;	
				}
			}
		} else {
			//what if this charge brings us over the cap, better split it
			if (bill.amount + amount >= cap) {
				var full_charge = cap - bill.amount;
				var capped_charge = bill.amount + amount - cap;
				this.add(month, year, full_charge);
				this.add(month, year, capped_charge);
				return;
			}
		}
		if (this.type == 'staff') {
			multiplier = 0;
		}
		bill.add(amount * multiplier);
		this.total += amount * multiplier;
	}
};

function project_collection () {
	this.projects = {};
	this.get = function(project_name, type) {
		if (this.projects[project_name]) {
		} else {
			this.projects[project_name] = new project(project_name, type);
		}
		return this.projects[project_name];
	}
};
var projects = new project_collection();

function totals() {
	val = $('#tier1_rate').val();
	initialize_totals();
}
function initialize_totals() {
	if (oTable) {
		oTable.fnDestroy();
	}
	oTable = $('#totals_table').dataTable( {
	"aaData": totals_table(),
	"aoColumns": [
		{ "sTitle": "Month" },
		{ "sTitle": "Year" },
		{ "sTitle": "Dollars" }
	],
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": false,
        "bSort": false,
        "bInfo": false,
        "bAutoWidth": false
	});
	$('#totals_table').show();
	$('#loading').hide();
}
function totals_table() {
	$('#totals_table').after('<p id="loading">Loading</p>');
	$('#totals_table').hide();
	$('#totals_table').html('');
	var enables = get_enables_from_coral();
	projects = new project_collection();
	for (var i = 0; i < enables.length; i++) {
		var project = enables[i][1];
		var type = enables[i][2];
		var item = enables[i][3];
		var bdate = enables[i][4];
		var edate = enables[i][5];
		var rate = get_rate(item);
		bdate = new Date(bdate);
		edate = new Date(edate);
		projects.get(project, type).add(bdate.getMonth(), 
						bdate.getYear() + 1900,
						((edate - bdate) / (1000 * 60 * 60)) * rate );
	}
	var modeling_begin = new Date('2010-07-15');
	var modeling_end = new Date('2012-08-15');
	var table = [];
	var month = modeling_begin.getMonth();
	var year = modeling_begin.getYear() + 1900;
	for (var i = modeling_begin; i <= modeling_end; ) {
		var sum = 0;
		for (key in projects.projects) {
			var proj = projects.projects[key];
			sum += proj.get(month, year).total();
		}
		table.push([month + 1,year,sum.toFixed(2)]);
		if (month == 11) {
			month = 0;
			year++;
		} else {
			month++;
		}
		i = new Date(year , month , 15, 12, 00, 00, 00);
	}
	big_table = table;
	return table;
}

	/*
	projects.get('User Training').monthly_bill('Aug', '2011').add(20);
 *
 * enables.each | k do
 * 	index = k.project + k.month
 * 	
 * 	if (k.project.cap_reached) {
 * 			project.month.bill += k.time_total * cap_rate * k.equipment.charge
 * 	} else {
 * 			project.month.bill += k.time_total *  k.equipment.charge
 * 	}
 * done
 *
 * */



