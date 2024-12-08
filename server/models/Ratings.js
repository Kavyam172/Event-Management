const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingsSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    userid: {
        type: String,
        ref: 'User'
    },
    eventid: {
        type: String,
        ref: 'Event'
    }
});