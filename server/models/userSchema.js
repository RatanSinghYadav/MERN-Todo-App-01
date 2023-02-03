const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    age: {
        type:String,
        required:true
    },
    job: {
        type:String,
        required:true
    },
    number: {
        type:String,
        required:true
    }
});

const users = new mongoose.model("student",userSchema);

module.exports = users;