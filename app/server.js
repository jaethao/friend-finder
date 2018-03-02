var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

//create app/json parser
var jsonParser = bodyParser.json();
//create app/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//parse various different custom JSON types as json
app.use(bodyParser.json({ type: 'application/*+json' }));
//parse some custom thing into a buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
//parse an html body into a string
app.use(bodyParser.text({ type: 'text/html' }));

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
