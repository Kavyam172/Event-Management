const mongoose = require('mongoose');

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