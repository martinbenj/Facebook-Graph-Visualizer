var LoadingView = Backbone.View.extend({

	el: $('body'),

	model: app,

	initialize: function(){
		this.model.on('createLoadingView', this.render, this);
		this.model.trigger('createVizualizerView');
		console.log('LoadingView Created');
	},

	render: function(){
	}

});