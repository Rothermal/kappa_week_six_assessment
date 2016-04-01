/**
 * Created by JFCS on 4/1/16.
 */
var mongoose = require('mongoose');

var mongoURI = 'mongodb://localhost/kapaa_week_6_assessment';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error",function(err){
   console.log('MONGO conenction error brah: ', err);
});

MongoDB.once("open",function(){
    console.log('MONGO is open brah: ');
});


module.exports = MongoDB;