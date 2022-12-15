const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    institucion: {
        type: String,
        required: true,
        trim: true
    },
    pin:{
        type: String                
    },
    texto:{
        type: String                
    },
    password:{
        type: String,
        require: true,
    },
    registro: {
        type: Date,
        default: Date.now()
    }   
});

module.exports = mongoose.model('Users', UsersSchema);