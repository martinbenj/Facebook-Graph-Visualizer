var App = Backbone.Model.extend({

	url: 'http://localhost:3000/facebook',

	initialize: function(){
		this.on( 'createLoadingView', 	 this.createLoadingView    );
		this.on( 'createVizualizerView', this.createVizualizerView );
	},
 
	createLoadingView: function(){
		console.log('createLoadingView trigger');
		var loadingView = new LoadingView();
	},

	createVizualizerView: function(){
		var vizualizerView = new VizualizerView();
	}

});

var app = new App();