var express = require('express');
var app = express();

var http = require('http');
var facts = require('./detroitFacts');

var ninetiesFacts = facts.ninetiesFacts;
var twentiesFacts = facts.twentiesFacts;
var sixtiesFacts = facts.sixtiesFacts;
var presentFacts = facts.presentFacts;
var randomfact = facts.randomize;

function onRequest(request, response) {
	response.writeHead(200, { "Content-type": "text/plain" });
	response.end();
}

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if(req.query.code === "1890") {
    res.send(ninetiesFacts[randomize(ninetiesFacts)]);
  }
  else if(req.query.code === "1920") {
    res.send(twentiesFacts[randomize(twentiesFacts)]);
  }
  else if(req.query.code === "1960") {
    res.send(sixtiesFacts[randomize(sixtiesFacts)]);
  }
  else if(req.query.code === "2015") {
    res.send(presentFacts[randomize(presentFacts)]);
  }
  else {
    res.send(req.query.code);
  }
});

app.get('/', function(request, response) {;
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
