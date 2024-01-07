const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/", paymentController.createPayment);

router.get("/allPaymentHistory", paymentController.getPaymentHistory);

router.get("/:studentId", paymentController.getPaymentHistoryByStudentId);

module.exports = router;