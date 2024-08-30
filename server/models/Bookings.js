const mongoose = require('mongoose');

const bookingsSchema = new mongoose.Schema({
    id: String,
    userid: String,
    showid: String,
    seats: Array,
    totalPrice: Number,
    paymentStatus:String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const Bookings = mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;