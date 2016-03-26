var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());          // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); // set static folder

app.get('/', function (req, res) {

  // i guess i should just be able to return a json object as actual json?
  // So i need to hook this up to a database really, which i might as well host in the cloud, as running
  // it locally would kinda suck... though i need to be careful of information ending up
  // in github... Grumble grumble...

    res.render('index');
});

app.get('/pokemon', function(req, res){
  res.send("Pikachu, i choose you!");
});

// This is the actual app running! Something i should look at really...
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
