const express = require("express");
const router = express.Router();
const guardianController = require("../controllers/guardianController");
const createQRController = require("../controllers/createQRController");
const scanQRController = require("../controllers/AttendanceController");

router.post("/register", guardianController.registerGuardian);
router.post("/login", guardianController.loginGuardian);
router.get("/CreateQRCode", createQRController.generateQRCode);
router.post("/scanQR", scanQRController.scanQR);

router.post("/changeStudentRoom", guardianController.changeStudentRoom);

module.exports = router;