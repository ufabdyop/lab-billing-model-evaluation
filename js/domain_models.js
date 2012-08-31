/**
 * MODELS: Here we are defining all the models in the MVC structure
 * ----------------------------------------------------------------
 * 
 */

/**
 * lab_activity is a model which represents some activity in the lab, could be reservation, enable, etc
 */
var lab_activity = Backbone.Model.extend({
	defaults: {
		member: null,
		project: null,
		type: null,
		item: null,
		bdate: null,
		edate: null,
		amount: null
	},
	validate: function(attribs) {
		if (attribs.bdate instanceof Date) {
		} else if (attribs.bdate == null) {
		} else {
			return "bdate must be a Date";
		}
		if (attribs.edate instanceof Date) {
		} else if (attribs.edate == null) {
		} else {
			return "edate must be a Date";
		}
	},
	getHours: function () {
		var bdate = this.get('bdate');
		var edate = this.get('edate');
		return (edate.getTime() - bdate.getTime()) / 60 / 60 / 1000;
	},
	spans_months: function() {
		if (    this.get('bdate').getMonth() != this.get('edate').getMonth() ||
			this.get('bdate').getYear() != this.get('edate').getYear()  ) {
			return true;
		}
		return false;
	},
	split_by_month: function() {
		if (  this.spans_months()  ) {
			var b_year = this.get('bdate').getYear();
			var b_month = this.get('bdate').getMonth();

			var e_year = this.get('edate').getYear();
			var e_month = this.get('edate').getMonth();
			
			//does it span multiple months? 
			var time_diff_in_years = e_year + (e_month / 12) - 
						(b_year + (b_month / 12));
			if (time_diff_in_years > 1/11) {
				throw "Cannot handle spans of time longer than a month!";
			}

			var next_month = b_month + 1;
			var next_month_year = b_year;
			if (b_month == 12) {
				next_month = 1;
				next_month_year = b_year + 1;
			}
			next_month_year += 1900;

			var next_month_begin = new Date(next_month_year, next_month, 1, 0, 0, 0);
			var return_value = [this.clone(), this.clone()];
			return_value[0].set('edate', new Date(next_month_begin.getTime() - 100));
			return_value[1].set('bdate', next_month_begin);
			return return_value;
		} else {
			return [this.clone()];
		}
	}
});

/**
 * cost_activity is a model which represents the billable portion of the lab activity
 */
var cost_activity = Backbone.Model.extend({
	defaults: {
		"lab_activity" : null,
		"bdate": null,
		"edate": null,
		"charge": null
	},
	validate: function(attribs) {
		if (attribs.bdate instanceof Date) {
		} else if (attribs.bdate == null) {
		} else {
			return "bdate must be a Date";
		}
		if (attribs.edate instanceof Date) {
		} else if (attribs.edate == null) {
		} else {
			return "edate must be a Date";
		}
	},
	getHours: function () {
		var bdate = new Date(this.get('bdate'));
		var edate = new Date(this.get('edate'));
		return (edate.getTime() - bdate.getTime()) / 60 / 60 / 1000;
	}
});

/**
 * An item is something that is used in the lab, probably an instrument or tool
 */
var item = Backbone.Model.extend( {
	defaults: {
		"name": null,
		"tier": null,
		"rate": null
	},
        initialize: function(attributes) {
            attributes.tier.on('change', this.update_rate, this);
            this.on('change:tier', this.update_rate_by_tier, this);
        },
        update_rate_by_tier: function(object) {
		if (this.get('tier')) {	
			this.set('rate', this.get('tier').get('rate'));
		}
        },
        update_rate: function(object) {
            this.set('rate', object.get('rate'));
        }
    });

/**
 * A tier has a name and a rate
 */
var tier = Backbone.Model.extend( {
	defaults: {
		"name": null,
		"rate": null
	}});


/**
 * A cap has a threshold and a rate
 */
var cap = Backbone.Model.extend( {
	defaults: {
		"threshold": null,
		"rate": null
	}});


/**
 * A project gets billed for cost_activities and performs the translation from lab_activity to cost activity
 */
var project = Backbone.Model.extend( {
	defaults: {
		"name": null,
		"type": null,
		"cap": null,
		"cap_reduction": 1 //no cap reduction
	},
	set_toolset: function(tools) {
		this.set('toolset', tools);
	},
	set_bill_collector: function(collector) {
		this.set('collector', collector);
	},
	add_lab_activity: function( lab_activity ) {
		if (lab_activity.get('project') == this.get('name')) {
			var collector = this.get('collector');
			if (lab_activity.spans_months()) {
				lab_activities = lab_activity.split_by_month();	
			} else {
				lab_activities = [lab_activity];
			}
			for (var i = 0; i < lab_activities.length; i++) {
				lab_activity = lab_activities[i];
				var cost = this.calculate_cost(lab_activity);
				collector.add(cost);	
			};
		} else {
			throw new Error('Adding activity to wrong project');
		}
	},
	calculate_cost: function (lab_activity) {
		var cost = new cost_activity();
		var item = this.get('toolset').find_by_name(lab_activity.get('item'));
		var rate = item.get('rate');
		var collector = this.get('collector');
		var cap = this.get('cap').get('threshold');
		var cap_reduction = this.get('cap').get('rate');
                
		
		cost.set('lab_activity', lab_activity);
		cost.set('bdate', lab_activity.get('bdate'));
		cost.set('edate', lab_activity.get('edate'));

		var hours = cost.getHours();
		var charge = hours * rate;
		//var charges_so_far = collector.by_month(cost.get('bdate').getYear() + 1900, cost.get('bdate').getMonth() + 1).by_project(this.get('name')).total();
                var charges_so_far = collector.month_project_subtotal(
                                                    cost.get('bdate').getYear() + 1900,
                                                    cost.get('bdate').getMonth() + 1,
                                                    this.get('name')
                                                );

		if (charges_so_far > cap) {
			charge = rate * hours * cap_reduction;
		} else if (charges_so_far + charge > cap) {
			var full_charge_portion = (cap - charges_so_far) / rate / hours;
			var discounted_charge_portion = 1 - full_charge_portion;
			charge = full_charge_portion * rate * hours;
			charge += discounted_charge_portion * rate * hours * cap_reduction;
		}

		charge = Math.round(charge*100)/100 ;

		cost.set('charge', charge);
		return cost;
	}
});

var batch_processor = Backbone.Model.extend({
	defaults: {
		data: [],
		process_function: function() {
                },
		complete: function() {
                },
                stepsize: 200,
                batch_iterator: null,
                id: null,
                width: 300,
                height: 30,
                color: '#acc',
                progress_multiplier: 1,
                batch_pause_interval: 50,
                templates: {
                    overlay: '<div id="batch_overlay_<%=id%>" style="display: block; position: absolute; top: 0%; left: 0%; width: 100%; height: 100%; background-color: black; z-index:1001; -moz-opacity: 0.8; opacity:.80; filter: alpha(opacity=80);"></div>',
                    progress: '<div id="batch_progress_outer_<%=id%>" style="position: absolute; top: 10%; width: 100%; z-index: 1002">\n\
                                <div id="batch_progress_container_<%=id%>" style="width: <%=width%>px; height: <%=height%>px; border: 1px solid #ccc; background-color: white; z-index: 1002; margin-left: auto; margin-right: auto;">\n\
                                    <div id="batch_progress_<%=id%>" style="width: 0; background-color: <%=color%>; height: <%=height%>px">\n\
                                    </div>\n\
                                </div>\n\
                                </div>'
                }
	},
        initialize: function() {
            
        },      
	go: function () {
            this.calculate_multiplier();
            this.setup_ui();
            this.run_batches();
	},
        calculate_multiplier: function() {
            this.set('progress_multiplier', 100 / this.get('data').length);
        },
        setup_ui: function() {
            this.save_html_dimensions();
            this.full_screen();
            
            var templates = this.get('templates');
            var overlay = $(_.template(templates['overlay'], {id: this.get('id')}));
            
            var progress = $(_.template(templates['progress'], {id: this.get('id'),
                                                            width: this.get('width'),
                                                            height: this.get('height'),
                                                            color: this.get('color')}));
            $('html').append(overlay);
            $('html').append(progress);
            
            this.set('overlay', overlay);
            this.set('progress', progress);
        },
        run_batches: function() {
	    this.set('batch_iterator', 0);
	    this.update_ui(0);
            //setTimeout to call this function again
            var that = this;  
            window.setTimeout( function(){that.run_batch();} , this.get('batch_pause_interval'));   
        },
	run_batch: function() {
	    var i = this.get('batch_iterator');
	    var number_of_data_to_crunch = this.get('stepsize');
	    var the_data = this.get('data'); 
	    var the_function = this.get('process_function'); 
	    if (i + number_of_data_to_crunch > the_data.length) {
		number_of_data_to_crunch = the_data.length - i;
	    }
	    the_function(the_data.slice(i, i + number_of_data_to_crunch));
            this.update_ui(i);
	    i += this.get('stepsize');
	    this.set('batch_iterator', i);
	    if (i < the_data.length) {
		//setTimeout to call this function again
		var that = this;  
		window.setTimeout( function(){that.run_batch();} , this.get('batch_pause_interval'));   
	    } else {
                this.restore_ui();
		var complete_function = this.get('complete');
		complete_function();
	    }
	},
        update_ui: function(i) {
            var progress_percentage = i * this.get('progress_multiplier') ;
            progress_percentage = progress_percentage.toPrecision(2);
            $(this.get('progress').find('div div')).css('width', progress_percentage + '%');
        }, 
        restore_ui: function() {
            this.restore_html_dimensions();
            this.get('overlay').fadeOut('slow');
            this.get('progress').fadeOut('slow');
        },
        save_html_dimensions: function() {
            this.set('original_width', $('html').width());
            this.set('original_height', $('html').height());
        },
        full_screen: function() {
            $('html').width('100%');
            $('html').height('100%');
        },
        restore_html_dimensions: function() {
            $('html').width(this.get('original_width'));
            $('html').height(this.get('original_height'));
        }
});


/**
 * COLLECTIONS:
 * ------------------------------------------------
 * 
 */

/**
 * a bill is a collection of cost activities
 */
var bill = Backbone.Collection.extend({
	model: cost_activity,
        initialize: function() {
            this.subtotals = {
                month: {},
                project: {},
                month_project: {}
            };
            this.total = 0;
            this.on('add', this.compute_subtotals, this);
        },
        compute_subtotals: function(cost) {
            var cost_bdate = new Date(cost.get('bdate'));
            var cost_edate = new Date(cost.get('edate'));
            var year = cost_bdate.getYear() + 1900 ;
            var month = cost_bdate.getMonth() + 1;
            var project = cost.get('lab_activity').get('project');
            var charge = cost.get('charge');
            
            //month subtotal
            var month_key = '' + year + ' ' + month;
            this.add_subtotal_by_key(month_key, 'month', charge);

            //project subtotal
            this.add_subtotal_by_key(project, 'project', charge);

            //month_project subtotal
            var key = month_key + ' ' + project; 
            this.add_subtotal_by_key(key, 'month_project', charge);
            
            this.total += charge;
        },
        add_subtotal_by_key: function(key, subtotal, charge) {
            if (key in this.subtotals[subtotal]) {
                this.subtotals[subtotal][key] += charge;
            } else {
                this.subtotals[subtotal][key] = charge;
            }
        },
        total: function() {
            return this.total;
        },
        get_subtotal: function(subtotal, key) {
            if (subtotal in this.subtotals) {
                if (key in this.subtotals[subtotal]) {
                    return this.subtotals[subtotal][key];
                }
            }
            return 0;
        },
        project_subtotal: function(project) {
            return this.get_subtotal('project', project);
        },
        month_subtotal: function(year, month) {
            var month_key = '' + year + ' ' + month;
            return this.get_subtotal('month', month_key);
        },
        month_project_subtotal: function(year, month, project) {
            var month_key = '' + year + ' ' + month;
            var key = month_key + ' ' + project; 
            return this.get_subtotal('month_project', key);
        },
	inefficient_total: function() {
		var tally = 0;
		this.each(function (cost) {
			var charge = cost.get('charge');	
			tally += charge;
		});
		return Math.round(tally*100)/100;
	},
	inefficient_by_project: function(project) {
		return new bill(this.filter( function ( cost ) {
			return cost.get('lab_activity').get('project') == project;
		}));
	},
	inefficient_by_month: function(year, month) {
		return new bill(this.filter( function ( cost ) {
			var cost_bdate = new Date(cost.get('bdate'));
			var cost_edate = new Date(cost.get('edate'));
			if (cost_bdate.getYear() + 1900 == year && cost_bdate.getMonth() + 1 == month) {
				return true;
			}
			if (cost_edate.getYear() + 1900 == year && cost_edate.getMonth() + 1 == month) {
				return true;
			}
			return false;
		}));
	}
});

/**
 * item_catalog is a collection of items
 */
var item_catalog = Backbone.Collection.extend({
		model: item,
		find_by_name: function(name) {
			var tool = null;
			tool = this.find(function(itm) {
					return itm.get('name') == name;	
				});
			return tool;
		}
	
	});

/**
 * tier_catalog is a collection of items
 */
var tier_catalog = Backbone.Collection.extend({
		model: tier
	});
        

/**
 * project_catalog is a collection of projects
 */
var project_catalog = Backbone.Collection.extend({
		model: project,
                indices: {},
                initialize: function() {
                    this.indices = {};
                    this.on('add', this.create_index_for_name, this);
                },
                create_index_for_name: function(obj) {
                    var indices = this.indices;
                    var key = obj.get('name');
                    if (key in indices) {
                        
                    } else {
                        var i = this.indexOf(obj);
                        indices[obj.get('name')] = i;
                    }
                },
		find_by_name: function(name) {
                    var indices = this.indices;
                    if (name in indices) {
                        var i = indices[name];    
                        return this.at(i);
                    }
                    return undefined;
		}
	});

/**
 * lab_activity_catalog is a collection of projects
 */
var lab_activity_catalog = Backbone.Collection.extend({
		model: lab_activity
	});
        
/**
 * VIEWS:
 * ------------------------------------------------
 */
    var activity_view = Backbone.View.extend({
        model: lab_activity,
        tagName: 'tr',
        template: _.template('<td><%=member %></td>\n\
                                    <td><%=project %></td>\n\
                                    <td><%=type %></td>\n\
                                    <td><%=item %></td>\n\
                                    <td><%=begin %></td>\n\
                                    <td><%=end %></td>\n\
                                '),
        initialize: function() {
          this.model.on('change', this.render, this);
          this.render();  
        },
        render: function() {
            var markup = this.template({
                                        member: this.model.get('member'),
                                        type: this.model.get('type'),
                                        project: this.model.get('project'),
                                        item: this.model.get('item'),
                                        begin: this.model.get('bdate'),
                                        end: this.model.get('edate')
                                    });
            this.$el.html(markup);
        }
    });
    
    var activities_view = Backbone.View.extend({
        tagName: 'table',
        initialize: function(attributes) {
          this.model.on('add', this.add_item, this);
          //this.model.on('change', this.rerender, this);
          this.model.on('reset', this.rerender, this);
          $(attributes.selector).html(this.el);
          this.first_render();  
        },
        add_item: function(item) {
            var my_activity_view = new activity_view({model: item});
            this.$el.append(my_activity_view.el);
        },
        rerender: function() {
          this.$el.html('');
          this.first_render();
        },
        first_render: function() {
            var me = this;
            this.model.each(function(item) {
               me.add_item(item); 
            });
        }
    });

    var add_activity_view = Backbone.View.extend( {
        tagName: 'div',
        events: {
            "click .submit"      : "addNewOne"
        },
        initialize: function(attributes) {
          $(attributes.selector).html(this.el);
          this.render();  
        },
        addNewOne: function() {
          this.model.add(new lab_activity({
              member: this.$el.find('.member').val(),
              project: this.$el.find('.project').val(),
              type: this.$el.find('.type').val(),
              item: this.$el.find('.item').val(),
              bdate: new Date(this.$el.find('.begin').val()),
              edate: new Date(this.$el.find('.end').val())
          })) ; 
        },
        template: '<label class="one column">Member:<input class="member" name="member" value="ryant"></input></label>' + 
                                '<label class="one column">Project:<input class="project" name="project" value="Maintenance"></input></label>' +
                                '<label class="one column">Type:<input class="type" name="type" value="local"></input></label>' +
                                '<label class="one column">Item:<input class="item" name="item" value="Blue-M"></input></label>' +
                                '<label class="one column">Begin:<input class="begin" name="begin" value="2010-08-05 12:00:00"></input></label>' +
                                '<label class="one column">End:<input class="end" name="end" value="2010-08-05 14:00:00"></input></label>' +
                                '<label class="one column"><input type="button" class="submit" name="submit" value="Add"></input></label>' 
                                ,
        render: function() {
            this.$el.html(this.template);
        }
    });
    
    var bill_calendar_view = Backbone.View.extend({
        model: bill,
        tagName: 'table',
        month_views: [],
        initialize: function(attributes) {
          $(attributes.selector).html(this.el);
          this.first_render();  
          this.model.on('reset', this.first_render, this);
	  this.month_views = [];
        },
        first_render: function() {
            this.$el.html('');
            var year = 2010;
            var month = 8;
            while (!( month == 9 && year == 2012 ))  {
                var current_month_view = new bill_month_view({model: this.model, attributes: {'data-month': month, 'data-year': year}});
		this.month_views.push(current_month_view);
                this.$el.append(current_month_view.el);
                
                month++;
                if (month == 13) {
                    month = 1;
                    year++;
                }
            }
        }
    });
    
    var bill_month_view = Backbone.View.extend({
        model: bill,
        tagName: 'tr',
        template: _.template('<td><%=month %></td><td>$<%=amount %></td>'),
        initialize: function() {
          this.model.on('add', this.render, this);
          this.model.on('reset', this.render, this);
          this.render();  
        },
        render: function() {
            var month = this.attributes['data-month'];
            var year = this.attributes['data-year'];
            var markup = this.template({month: month + ', ' + year,
                                        amount: this.model.month_subtotal(year, month)
                                    });
            this.$el.html(markup);
        }
    });
    
    var tier_view = Backbone.View.extend({
        model: tier,
        tagName: 'label',
        template: _.template('<%=name %> Rate<input type="text" value="<%=rate %>" />'),
        events: {
            "change input"      : "update_rate"
        },
        update_rate: function(obj) {
            this.model.set('rate', this.$el.find('input').val() );
        },
        initialize: function(attributes) {
          $(attributes.selector).html(this.el);
          this.first_render();  
            this.model.on('change', this.first_render, this);
        },
        first_render: function() {
            this.$el.html(this.template({name: this.model.get('name'), rate: this.model.get('rate')}));
        }
    });
    
    var cap_view = Backbone.View.extend({
        model: cap,
        tagName: 'div',
        template: _.template('<label>Cap (in dollars)<input type="text" name="threshold" value="<%=threshold %>" /></label>'
                            + '<label>Cap reduction (between 0 and 1, 1 is no reduction)<input type="text" name="rate" value="<%=rate %>" /></label>'),
        events: {
            "change input"      : "update_rate"
        },
        update_rate: function(obj) {
            this.model.set('rate', this.$el.find('input[name=rate]').val() );
            this.model.set('threshold', this.$el.find('input[name=threshold]').val() );
        },
        initialize: function(attributes) {
          $(attributes.selector).html(this.el);
          this.first_render();  
          this.model.on('change', this.first_render, this);
        },
        first_render: function() {
            this.$el.html(this.template({threshold: this.model.get('threshold'), rate: this.model.get('rate')}));
        }
    });
    




