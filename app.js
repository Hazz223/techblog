var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var request = require("request");

app.engine('html', mustacheExpress());          // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); // set static folder

app.get('/', function (req, res) {

  request('http://api.harrywinser.com/article/type/technology',{timeout: 1500}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('index', data);
    } else if (response.statusCode == 404) {
      res.status(404)
        .render('404');
    } else {
      res.status(500)
        .render('error');
    }
  });
});

app.get('/article/:name', function(req, res) {
  request('http://api.harrywinser.com/article/' + req.params.name, {timeout: 1500}, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('article', data);
    } else if (response.statusCode == 404) {
      res.status(404)
        .render('404');
    } else {
      res.status(500)
        .render('error');
    }
  });
});

app.listen(4000, function () {
  console.log('tech.harrywinser.com listening on port 4000!');
});
