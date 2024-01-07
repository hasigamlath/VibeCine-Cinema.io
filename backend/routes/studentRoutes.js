const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const scanQRController = require("../controllers/AttendanceController");
router.get(
    "/allStudentAttendance",
    scanQRController.getAllAttendanceOfStudents
);
router.post("/login", studentController.studentLogin);
router.post("/payFees", studentController.payFees);
router.post("/register", studentController.register);
router.get("/:studentId", scanQRController.getAttendanceStudentID);
router.get("/parent/:parentId", scanQRController.getAttendanceByParentID);
router.get(
    "/getStudentDetailsByStudentID/:studentId",
    studentController.getStudentDetailsByStudentID
);

module.exports = router;