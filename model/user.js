const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
firstName:{type:String,required:true},
lastName:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true}
});

var user = mongoose.model("User",User);
module.exports = user; 