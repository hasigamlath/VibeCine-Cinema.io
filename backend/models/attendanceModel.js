const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "User",
        required: true,
    },
    action: {
        type: String,
        enum: ["check-IN", "check-OUT"],
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;