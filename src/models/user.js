var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newUser = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    lastname:String,
    password: String
});

var User = mongoose.model("User", newUser);

module.exports.User = User;