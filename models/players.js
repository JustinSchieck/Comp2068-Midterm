/**
* @Author: Justin Schieck
* @Date:   2017-02-22T11:37:57-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-02-22T12:00:30-05:00
*/



// Step 1. reference mongoose
let mongoose = require('mongoose');

// Step 2. create book schema
var playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First Name is required'
    },
    lastName: {
        type: String,
        required: 'Last Name is required'
    },
    number: {
        type: Number
    }
});

// make it public
module.exports = mongoose.model('player', playerSchema);
