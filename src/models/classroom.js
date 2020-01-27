var mongoose = require("mongoose");
var Schema= mongoose.Schema;


//connection
mongoose.connect("mongodb://localhost/yaviinfo");

//id: mongoose.Schema.Types.ObjectId,
var newClassroom = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    aula:String,
    capacidad:String,
});

var Classroom= mongoose.model("Classroom", newClassroom);

module.exports.Classroom = Classroom;