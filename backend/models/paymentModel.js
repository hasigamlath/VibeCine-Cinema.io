const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    studentId: { type: String, required: true },
    payerType: { type: String, enum: ['student', 'parent'], required: true },
    amount: { type: Number, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    datePaid: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);