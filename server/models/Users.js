const mongoose = require('mongoose');
const Bookings = require('./Bookings');

const userSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        default: null
    },
    DOB:{
        type: Date,
        default: null
    },
    bio:{
        type: String,
        default: null
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['organizer', 'user', 'admin'],
        required: true,
        default: 'user'
    },
    bookings: {
        type: Array,
        default: [],
        ref: 'Bookings'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const Users = mongoose.model('Users', userSchema);

module.exports =  Users;