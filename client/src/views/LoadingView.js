var LoadingView = Backbone.View.extend({

	el: $('body'),

	model: app,

	initialize: function(){
		this.render();
		this.model.trigger('createVizualizerView');
		// alert('LoadingView Created');
	},

	render: function(){
		// alert('loadingView rendered');
	}

});