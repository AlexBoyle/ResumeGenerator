var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('publicFiles'));
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.route('/*')
	.get(function(req, res){
		var host = req.headers.host;
		var protocol = 'http' + (req.connection.encrypted ? 's' : '') + '://';
		var sub = host ? host.substring(0,host.indexOf('.')) : undefined;
		sub == 'alexboyle' ? sub = undefined : '';
		var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		console.log(ip + "		 " + sub +	"		 " + req.originalUrl);
		res.sendFile(path.resolve('publicFiles/html/base.html'));
		
	});


app.listen(80, function () {
	console.log('app launched on port: 80')
})
