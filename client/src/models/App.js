var App = Backbone.Model.extend({

	initialize: function(){
		this.on( 'createLoadingView', 	 this.createLoadingView    );
		this.on( 'createVizualizerView', this.createVizualizerView );
	},
 
	createLoadingView: function(){
		var loadingView = new LoadingView();
	},

	createVizualizerView: function(){
		var vizualizerView = new VizualizerView();
	}

});

var app = new App();