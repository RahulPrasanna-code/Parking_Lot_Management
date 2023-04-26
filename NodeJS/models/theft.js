const mongoose = require('mongoose');

Schema = mongoose.Schema;

var Theft = mongoose.model('Theft',{
    number:{type:String}
});

module.exports = { Theft }; 