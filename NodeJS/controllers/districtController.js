const { json } = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;
var { District } = require('../models/district.js');

router.get('/',(req,res)=>{
    District.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{
            console.log('Error'+JSON.stringify(err,undefined,2));
        }
    })
})

module.exports = router;