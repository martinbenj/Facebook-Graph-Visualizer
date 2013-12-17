var LoginView = Backbone.View.extend({

	el: $('body'),

	initialize: function(){
		this.render();
	},

	events: {
		'click #fb': 'createLoadingView'
	},

	render: function(){
		$(this.el).append('<a href="/facebook">Facebook</a><button id="fb">click me</button>');
		// var loadingView = new LoadingView();
	},

	createLoadingView: function(){
		this.model.trigger('blah');
	}

});

var loginView = new LoginView({model: app});