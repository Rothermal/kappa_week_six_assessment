var express = require('express');
var app = express();
var db = require('./modules/db');
var bodyParser = require('body-parser');
var index = require('./routes/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





app.use(express.static('server/public'));

app.use('/',index);


var server = app.listen(4242,function(){
    var port = server.address().port;
    console.log('now open on port : ', port);
});