const mongoose = require('mongoose');

const paymentsSchema = new mongoose.Schema({
    id: String,
    bookingid: String,
    amount: Number,
    paymentMethod: String,
    status: String,
    transactionId: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const Payments = mongoose.model('Payments', paymentsSchema);

module.exports = Payments;