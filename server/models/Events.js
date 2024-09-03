const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    category: {
        type: String,
    },
    banner: {
        type: String,
        default: null
    },
    venueid: String,
    startDate: {
        type: Date,
        default: new Date()
    },
    endDate: {
        type: Date,
        default: new Date()
    },
    startTime: String,
    endTime: String,
    price: {
        type: Number,
        default: 0
    },
    availableSeats: Number,
    bookedSeats: {
        type: Number,
        default: 0
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

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;