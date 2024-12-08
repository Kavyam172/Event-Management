const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    comment: {
        type: String,
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