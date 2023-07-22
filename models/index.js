var mongoose =require("mongoose");
var newSchema=mongoose.Schema({
    name:String,
    address:String,
    city:String,
    bloodgroup:String,
    gender:String,
    phone:Number

});
module.exports=mongoose.model('donors',newSchema);

