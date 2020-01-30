var { Router } = require("express");
var router = Router();
var bodyParser = require("body-parser");
var cursos = require('../curso.json');
var _ = require('underscore');
var mongoose = require('../config/conection');
var Classroom = require("../models/classroom").Classroom;

//metodo get
router.get('/', (req, res, next) =>{
    Classroom.find().then(function(data){
        res.json(data);
        res.send('ok');
    });

});

//metodo post
router.post('/', (req, res) =>{
    var data = {
        _id: new mongoose.Types.ObjectId(),
        aula: req.body.aula,
        capacidad: req.body.capacidad
        };
    
        var classroom = new Classroom(data);
        classroom.save(function(){
            res.send("ok");
        });
    });


    //put
    router.put("/", (req, res) => {
        Classroom.findByIdAndUpdate(req.body._id, { $set: req.body}, { new:true });
        console.log("ok");
    });

//delete
    router.delete("/:_id", (req, res) =>{
        var _id  = req.params._id;
        _.each(classrooms, (classroom, i) => {
            if(classroom.id == id){
                classrooms.splice(i, 1);
            }
            
        });
        res.json(classroom);
    });


module.exports = router;