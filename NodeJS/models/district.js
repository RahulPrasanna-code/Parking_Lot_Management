const mongoose = require('mongoose');

Schema = mongoose.Schema;

var District = mongoose.model('District',{
    name : {type:String}
});

module.exports = { District };