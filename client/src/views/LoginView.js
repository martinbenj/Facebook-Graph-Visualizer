var LoginView = Backbone.View.extend({

	el: $('body'),

	initialize: function(){
		this.render();
	},

	render: function(){

		$(this.el).append('hi there');

	}

});

var loginView = new LoginView();