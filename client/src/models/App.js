var App = Backbone.Model.extend({

	initialize: function(){
		this.on( 'createLoadingView', this.createLoadingView );
	},
 
	createLoadingView: function(){
		alert('hi');
	}

});

var app = new App();