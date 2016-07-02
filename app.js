var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var request = require("request");

app.engine('html', mustacheExpress());          // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); // set static folder

app.get('/', function (req, res) {

  request('http://api.harrywinser.com/article/type/technology', function (error, response, body) {

    console.log(error);
    console.log(response);
    console.log(body);

    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('index', data.content);
    }
  });
});

app.get('/pokemon', function(req, res){
  res.send("Pikachu, i choose you!");
});

app.get('/article/:name', function(req, res) {
  request('http://api.harrywinser.com/article/cleantitle/' + req.params.name, function (error, response, body) {

    console.log(error);
    console.log(response);
    console.log(body);

    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('article', data.content);
    }
  });
});

// This is the actual app running!
app.listen(80, function () {
  console.log('tech.harrywinser.com listening on port 3000!');
});
