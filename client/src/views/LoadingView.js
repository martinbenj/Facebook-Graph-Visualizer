var LoadingView = Backbone.View.extend({

	el: $('body'),

	initialize: function(){
		this.model.on('createLoadingView', this.render, this);
	},

	render: function(){
		console.log('LoadingView Rendered');
	}

});

var loadingView = new LoadingView({model: app});