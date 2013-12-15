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

	req.facebook.api('/me/friends', function(err, friends) {

		if (err) {
			throw(err);
		}

		console.log(friends.data);	

		var body = res.render(__dirname + "/assets", {path: __dirname, people: friends.data});
  });
	// res.render(path.join(__dirname + '/../client/src/index.html'));
});

app.set('port', process.env.PORT || 3000); //config
app.listen(app.get('port')); //execution
console.log("Yes, I'm listening on port " + app.get('port'));

