const mongoose = require('mongoose');

Schema = mongoose.Schema 

var Parking = mongoose.model('Parking',{
    name : {type:String},
    address : {type:String},
    contact : {type:Number},
    district:{type:String} ,
    user_id:{type:String}
})

module.exports = { Parking }