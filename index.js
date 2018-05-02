var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.render('home.ejs');
});

app.get('/news', function(req, res) {
  res.send('Новости');
});


app.listen(80);
