var express = require("express"),
    hbs 		= require('hbs'),
    path 		= require('path'),
    fb			= require('facebook-node-sdk'),
    fs 			= require('fs');

// Set up Express app
var app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.set('views', __dirname);
app.use(express.bodyParser());
console.log(path.join(__dirname + '/../client'));
app.use(express.static(path.join(__dirname + '/../client/'))); //config
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret : "foo bar" }));
app.use(fb.middleware({ appId : "229466340535430", secret : "02a946772bc2de709f84f1c847cdee62" }));

// Root route
app.get('/', function(req, res){
	res.render(path.join(__dirname + '/../client/src/index.html'));
});

app.get('/facebook', function(req, res) {

	res.header("Access-Control-Allow-Origin", "*");

	var images = [
		path.join(__dirname + '/../client/assets/images/happy.jpg'),
		path.join(__dirname + '/../client/assets/images/social-graph.png'),
		path.join(__dirname + '/../client/assets/images/facebook-login-button.png')
	];

	res.send('{"hi": "there"}');

	res.end();

	// var body = res.render(path.join(__dirname + '/../client/src/index.html'), {people: images});
});

// app.get('/facebook', fb.loginRequired(), function(req, res) {
// 	req.facebook.api('/me/friends', function(err, friends) {

// 		// res.send(friends.data);

// 		// Instead of friends.data, send an array of relative urls for images

// 		var images = [
// 			path.join(__dirname + '/../client/assets/images/happy.jpg'),
// 			path.join(__dirname + '/../client/assets/images/social-graph.png'),
// 			path.join(__dirname + '/../client/assets/images/facebook-login-button.png')
// 		];

// 		var body = res.render(path.join(__dirname + '/../client/src/index.html'), {people: images});
//   });
// });

app.set('port', process.env.PORT || 3000); //config
app.listen(app.get('port')); //execution
console.log("Yes, I'm listening on port " + app.get('port'));

