var LoginView = Backbone.View.extend({

	el: $('body'),

	initialize: function(){
		this.render();
	},

	events: {
		'click #fb': 'createLoadingView'
	},

	render: function(){
		$(this.el).append('<div class="wrapper"><a href="/facebook"><img class="facebook-login" src="../../assets/images/facebook-login-button.png" /></a></div>');
		// var loadingView = new LoadingView();
	},

	createLoadingView: function(){
		this.model.trigger('blah');
	}

});

var loginView = new LoginView({model: app});