var Taxonomizer = function() {  
    this.initialize = function(element) {
        element.html('');
        this.categories = [];
        this.subjects = [];
        this.base_element = element;
        this.subjects_element = $('<ul class="taxonomizer-subjects"></ul>');
        this.categories_element = $('<ul class="taxonomizer-categories"></ul>');
        element.append(this.subjects_element).append(this.categories_element);
    };
    
    this.drop_happened = function(event, ui, taxonomy_reference) {
	//var src = $(event.srcElement);
        var src = $(ui.draggable);
	var tgt =  $(event.target);
	tgt.append($('<li>' + src.text() + '</li>').draggable({ revert: true}));
	src.remove();
	taxonomy_reference.notify_observer(src.text(), tgt.find('h3').text());
    };

    this.notify_observer = function(src, tgt) {
	if (this.callback) {
		this.callback(src, tgt);
	}
    }
    
    this.set_observer = function(callback) {
	this.callback = callback;
    }
    this.set_categories = function(categories) {
        for (var i = 0; i < categories.length; i++) {
            var new_category_element = $('<ul><h3 class="ui-widget-header">' + categories[i] + '</h3></ul>');
            var this_handle = this;
	    new_category_element.taxonomy_reference = this;
            new_category_element.droppable({
		    activeClass: "ui-state-default",
		    hoverClass: "ui-state-hover",
			taxonomy_reference: this,
		    drop: function (event, ui) { this_handle.drop_happened(event, ui, this_handle) }
		});
            this.categories.push(new_category_element); 
            $('<li class="ui-widget-content"></li>').append(new_category_element).appendTo(this.categories_element);
        }
    }
    
        this.set_subjects = function(subjects) {
            for (var i = 0; i < subjects.length; i++) {
                var new_element = $('<li>' + subjects[i] + '</li>');
                new_element.draggable({ revert: true});
                this.subjects.push(new_element); 
                this.subjects_element.append(new_element);
            }
        }
        
        this.remove_subject = function(subject) {
            this.subjects_element.children().each(function() {
                if ($(this).html() == subject) {
                   $(this).remove(); 
                }
            });
            this.categories_element.find('li').each(function() {
                if ($(this).html() == subject) {
                   $(this).remove(); 
                }
            });
        }
        
        this.get_category_ul = function(category) {
            var elem;
            this.categories_element.find('h3').each(function() {
                if ($(this).html() == category) {
                   elem = $(this).parent();
                }
            });
            return elem;
        }

        this.manual_assign = function(subject, category) {
            this.remove_subject(subject);
            var category_ul = this.get_category_ul(category);
            category_ul.append($('<li>' + subject + '</li>').draggable({ revert: true}));
            this.notify_observer(subject, category);
        }
};

function logger(src, tgt) {
        console.log('observer got msg: ' + src + ' dragged to ' + tgt);
}
       
