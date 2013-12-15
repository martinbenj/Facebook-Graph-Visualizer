var express = require("express"),
    hbs 		= require('hbs'),
    path 		= require('path'),
    fs 			= require('fs');

// Set up Express app
var app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.set('views', __dirname);
app.use(express.bodyParser());
console.log(path.join(__dirname + '/../client'));
app.use(express.static(path.join(__dirname + '/../client/'))); //config

// Root route
app.get('/', function(req, res){
	res.render(path.join(__dirname + '/../client/src/index.html'));
});

app.set('port', process.env.PORT || 3000); //config
app.listen(app.get('port')); //execution
console.log("Yes, I'm listening on port " + app.get('port'));

