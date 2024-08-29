import mongoose from "mongoose";

const venuesSchema = new mongoose.Schema({
    id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    capacity: Number,
    events: Array,
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

export default Venues;