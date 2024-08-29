import mongoose from "mongoose";

const showsSchema = new mongoose.Schema({
    id: String,
    eventid: String,
    venueid: String,
    time: Date,
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

export default Shows;