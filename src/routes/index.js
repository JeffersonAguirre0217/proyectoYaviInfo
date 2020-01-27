var { Router } = require("express");
var router = Router();
var cursos = require('../curso.json');
var _ = require('underscore');
var mongoose = require("mongoose");
var Classroom = require("../models/classroom").Classroom;

//metodo get
router.get('/:classromId', (req, res) =>{
    var id = req.params.classroomId;
    var arrayClassroom=[];
    var classroom= Classroom.find();
    test.each(Classroom, (classroom, i) => {
        arrayClassroom.push(classroom);
    });
    res.json(arrayClassroom);
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
    router.put("/:id", (req, res) => {
        var { id } = req.params;
        var {aula, capacidad} = req.body;
        if(aula && capacidad) {
            _.each(cursos, (curso, i) => {
                if(curso.id == id){
                    curso.aula = aula;
                    curso.capacidad = capacidad;
                }
            });
            res.json(cursos);
        }else{
            res.status(500).json({erro: 'data not fount'})
        }
    });

//delete
    router.delete("/:id", (req, res) =>{
        var { id } = req.params;
        _.each(cursos, (curso, i) => {
            if(curso.id == id){
                cursos.splice(i, 1);
            }
            
        });
        res.json(cursos);
    });


module.exports = router;