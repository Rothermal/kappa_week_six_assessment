/**
 * Created by JFCS on 4/1/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Heroes = new Schema({
    alias : String,
    first_name: String,
    last_name: String,
    city: String,
    power_name: String
});

module.exports = mongoose.model('Heroes',Heroes);


