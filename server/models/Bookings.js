const mongoose = require('mongoose');
const Users = require('./Users');
const Events = require('./Events');

const bookingsSchema = new mongoose.Schema({
    id: String,
    userid: {
        type: String,
        required: true,
        ref: 'Users'
    },
    eventid: {
        type: String,
        required: true,
        ref: 'Events'
    },
    paymentid: String,
    seats: Number,
    totalPrice: Number,
    paymentMethod:String,
    paymentStatus:String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    expiresAt: { type: Date, index: { expireAfterSeconds: 15000 } }
})

const Bookings = mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;