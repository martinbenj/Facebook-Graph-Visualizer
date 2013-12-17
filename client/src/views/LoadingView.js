var LoadingView = Backbone.View.extend({

	el: $('body'),

	initialize: function(){
		this.model.on('blah', this.render, this);
	},

	render: function(){
		console.log('LoadingView Rendered');
	}

});

var loadingView = new LoadingView({model: app});