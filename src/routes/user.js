var { Router } = require("express");
var router = Router();
var bodyParser = require("body-parser");;
var _ = require('underscore');
var mongoose = require('../config/conection');
var User = require("../models/user").User;

//metodo get
router.get('/', (req, res, next) =>{
    User.find().then(function(data){
        res.json(data);
        res.send('ok');
    });

});

//metodo post
router.post('/', (req, res) =>{
    var data = {
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password
        };
    
        var User = new User(data);
        User.save(function(){
            res.send("ok");
        });
    });


    //put
    router.put("/", (req, res) => {
        User.findByIdAndUpdate(req.body._id, { $set: req.body}, { new:true }, (err, model) => {
            if(err) throw err;
        });
        res.send("ok");
    });

//delete
    router.delete("/", (req, res) =>{
        User.delete(req.body._id);
        res.send("User delete");
    });


module.exports = router;