const mongoose = require('mongoose');

const showsSchema = new mongoose.Schema({
    id: String,
    eventid: String,
    venueid: String,
    startTime: Date,
    endTime: Date,
    price:Number,
    availableSeats: Number,
    bookedSeats: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const Shows = mongoose.model('Shows', showsSchema);

module.exports = Shows;