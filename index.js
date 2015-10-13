var express = require('express');
var app = express();

var http = require('http');
var song = require('./lyrics');

var lyrics = song.lyrics;
var randomLyric = song.randomize;

function onRequest(request, response) {
	response.writeHead(200, { 
		"Content-type": "text/plain", 
		"Access-Control-Allow-Origin",
		"*",
		"Access-Control-Allow-Headers", 
		"Origin, X-Requested-With, Content-Type, Accept"
	});
	response.send(lyrics[randomLyric()]);
	response.end();
}

console.log('test');

app.set('port', (process.env.PORT || 5000));

app.use(function(){

});

// views is directory for all template files
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  console.log('hello there');
  response.render('pages/index');
  console.log(lyrics[randomLyric()]);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
