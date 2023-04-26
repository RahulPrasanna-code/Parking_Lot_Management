const { json } = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;
var { Vehicle } = require('../models/vehicle.js');

router.get('/',(req,res) => {
    Vehicle.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{
            console.log('ERROR'+JSON.stringify(err,undefined,2));
        }
    });
});

router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record Found with given id : $(req.params.id)");

    Vehicle.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in deletion :'+JSON.stringify(err,undefined,2));}
    });
});

module.exports = router;