var App = Backbone.Model.extend({

	initialize: function(){
		this.on('createLoadingView', function(){
			alert('hi');
		});
	}
 
	// createLoadingView: function(){
	// 	alert('hi');
	// }

});

var app = new App();