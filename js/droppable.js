var Bucket = Backbone.Collection.extend();
var Droppable = Backbone.Model.extend();
var BucketView = Backbone.View.extend({
	el: "#bucket",
	initialize: function() {
		this.el = '#bucket';
	},
	render: function () {
		$(this.el).append(this.model.get('foo'));
		return this;
	}
});

var drop = new Droppable();
drop.set('foo', 'bar');

var dropview = new BucketView({model: drop, el: '#bucket'});

drop.on('change', dropview.render, dropview);

drop.set('foo', 'mar');
drop.set('foo', 'lar');
