var LoginView = Backbone.View.extend({

	el: $('body'),

	model: app,

	initialize: function(){
		this.render();

		$(window).on('resize', this.resizeBackground);
		console.log('loginview init');
	},

	events: {
		'click .facebook-login': 'createLoadingView'
	},

	render: function(){
		$(this.el).append('<img class="background-image" src="../../assets/images/social-graph.png" /><div class="wrapper"><a href="/facebook"><img class="facebook-login" src="../../assets/images/facebook-login-button.png" /></a></div>');
		$(".background-image").css({height: window.innerHeight + 'px', width: window.innerWidth + 'px'});
	},

	createLoadingView: function(e){
		this.model.trigger('createLoadingView');
	},

	resizeBackground: function() {
		$(".background-image").css({height: window.innerHeight + 'px', width: window.innerWidth + 'px'});
	}

});

var loginView = new LoginView();