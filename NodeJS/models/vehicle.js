const mongoose = require('mongoose');

Schema = mongoose.Schema;

var Vehicle = mongoose.model('Vehicle',{
    number : {type:String},
    check_in : {type:String},
    check_out : {type:String},
    status : {type:String},
    parking : {type:String}
});

module.exports = { Vehicle }