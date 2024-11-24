const mongoose = require('mongoose');

const bookingsSchema = new mongoose.Schema({
    id: String,
    userid: String,
    eventid: String,
    paymentid: String,
    seats: Array,
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