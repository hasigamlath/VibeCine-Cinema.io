const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes.js");
const parentRoutes = require("./routes/parentRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const guardianRoutes = require("./routes/guardianRoutes.js");

const { MONGODB_URI } = require("./config/env.js");

const app = express();
app.use(cors({
    origin: "*",
    credentials: true,
}));
app.use(express.json());

// app.use(function(req, res, next) {
//     res.header(
//         "Access-Control-Allow-Origin",
//         "https://hostel-manager-admin.vercel.app"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     ); // Add Authorization header
//     if (req.method === "OPTIONS") {
//         return res.sendStatus(200);
//     }
//     next();
// });
mongoose
    .connect(MONGODB_URI, {
        writeConcern: { w: "majority" }
    })
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

app.use("/api/students", studentRoutes);
app.use("/api/parents", parentRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/guardian", guardianRoutes);

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));