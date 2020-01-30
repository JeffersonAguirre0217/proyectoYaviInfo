var mongoose = require("mongoose");
var Schema= mongoose.Schema;

var newClassroom = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    aula:String,
    capacidad:String,
});

var Classroom= mongoose.model("Classroom", newClassroom);

module.exports.Classroom = Classroom;