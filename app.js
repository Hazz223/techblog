var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var request = require("request");

app.engine('html', mustacheExpress());          // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); // set static folder

app.get('/', function (req, res) {

  request('http://www.harrywinser.com/articles/type/blog', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('index', data);
    }
  });
});

app.get('/pokemon', function(req, res){
  res.send("Pikachu, i choose you!");
});

// This is the actual app running!
app.listen(3000, function () {
  console.log('tech.harrywinser.com listening on port 3000!');
});
