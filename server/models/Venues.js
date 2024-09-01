const mongoose = require('mongoose');

const venuesSchema = new mongoose.Schema({
    id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
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