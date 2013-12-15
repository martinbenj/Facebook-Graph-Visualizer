
var LoginView = Backbone.View.extend({

	el: $('body'),

	initialize: function(){
		this.render();
	},

	render: function(){
		$(this.el).append('<a href="/facebook">Facebook</a>');
	}

});

var loginView = new LoginView();