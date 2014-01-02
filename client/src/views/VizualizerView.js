var VizualizerView = Backbone.View.extend({

	model: app,

	initialize: function(){

		d3.select("body").append("svg").attr({width: window.innerWidth, height:window.innerHeight});

		this.model.fetch({
			success: function(data){
				alert(data);
			},
			error: function(e){
				alert(e);
			}
		});
		
		alert('VizualizerView Created');
		this.render();
	},

	render: function(){

	}

});