import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    category: String,
    banner: String,
    venueid: String,
    shows: Array,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const Events = mongoose.model('Events', userSchema);

export default Events;