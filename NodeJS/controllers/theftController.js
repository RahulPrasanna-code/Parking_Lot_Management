const { json } = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();

var { Theft } = require('../models/theft.js');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/',(req,res)=>{
    Theft.find((err,docs)=>{
        if(!err){res.send(docs)}
        else{
            console.log('Error'+JSON.stringify(err,undefined,2));
        }
    })
})

router.post('/',(req,res)=>{
    var theft = new Theft({
        number:req.body.number
    })

    theft.save((err,doc)=>{
        if(!err){res.send(doc)}
        else{
            console.log("Error"+JSON.stringify(err,undefined,2));
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record found with id : $(req.params.id)");
    
    var theft = {
        number : req.body.number,
    };

    Theft.findByIdAndUpdate(req.params.id,{$set:theft},{new:true},(err,doc)=> {
        if(!err){res.send(doc)}
        else{
            console.log('Error in update :'+JSON.stringify(err,undefined,2));
        }
    });
})

router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record Found with given id : $(req.params.id)");

    Theft.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in deletion :'+JSON.stringify(err,undefined,2));}
    });
});

module.exports = router;