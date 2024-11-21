const mongoose = require('mongoose');

const venuesSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    zipcode: Number,
    capacity: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const Venues = mongoose.model('Venues', venuesSchema);

module.exports = Venues;