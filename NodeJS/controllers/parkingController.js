const { json } = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;
var { Parking, Parking } = require('../models/parking.js');

router.get('/',(req,res)=>{
    Parking.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{
            console.log('Error'+JSON.stringify(err,undefined,2));
        }
    })
})

router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id))
    return res.status(400).send("No record with given id ");

    Parking.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error'+JSON.stringify(err,undefined,2));}
    })
})

router.post('/',(req,res)=>{
    var parking = new Parking({
        name : req.body.name,
        contact: req.body.contact,
        address: req.body.address,
        district: req.body.district
    });

    parking.save((err,doc)=>{
        if(!err){res.send(doc)}
        else { console.log("Error"+JSON.stringify(err,undefined,2));}
    });
})

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record found with id : $(req.params.id)");
    
    var parking = {
        name : req.body.name,
        contact : req.body.contact,
        address : req.body.address,
        district : req.body.district
    };

    Parking.findByIdAndUpdate(req.params.id,{$set:parking},{new:true},(err,doc)=>{
        if(!err){res.send(doc)}
        else{
            console.log('Error in update :'+JSON.stringify(err,undefined,2));
        }
    });
})

router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record Found with given id : $(req.params.id)");

    Parking.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in deletion :'+JSON.stringify(err,undefined,2));}
    });
});

module.exports = router