const bcrypt = require("bcryptjs");

const Guardian = require("../models/guardianModel");
const Student = require("../models/studentModel");

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

exports.registerGuardian = async(req, res) => {
    try {
        const { username, email, password } = req.body;

        const guardianExists = await Guardian.findOne({ email });
        if (guardianExists) {
            return res
                .status(400)
                .json({ message: "Guardian with this email already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newGuardian = new Guardian({
            username,
            email,
            password: hashedPassword,
        });

        const savedGuardian = await newGuardian.save();
        res.status(201).json({
            message: "Guardian registered successfully",
            guardian: savedGuardian,
        });
    } catch (err) {
        res.status(500).json({
            message: "An error occurred while registering the guardian",
            error: err,
        });
    }
};

exports.loginGuardian = async(req, res) => {
    try {
        const { email, password } = req.body;

        const guardian = await Guardian.findOne({ email });
        if (!guardian) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        console.log(password)

        const isPasswordMatch = await bcrypt.compare(password, guardian.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        token = jwt.sign({ email }, JWT_SECRET);
        res.status(200).json({ message: "Guardian logged in successfully", token });
    } catch (err) {
        console.error("An error occurred while logging in the guardian", err);
        res.status(500).json({
            message: "An error occurred while logging in the guardian",
            error: err,
        });
    }
};

exports.changeStudentRoom = async(req, res) => {
    try {
        const { studentId, roomNo } = req.body;

        const token = req.headers.authorization.split(" ")[1];
        const secretKey = process.env.JWT_SECRET;
        console.log("test2");
        jwt.verify(token, secretKey, async(err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Invalid or expired token" });
            } else {
                console.log("test1");
                // Find the student by studentId
                const student = await Student.findOne({ studentId });

                if (!student) {
                    return res
                        .status(404)
                        .json({ message: "Student with this studentId not found" });
                }

                // Update roomNo and save the student
                student.roomNo = roomNo;
                await student.save();

                res.status(200).json({
                    message: "Student's roomNo updated successfully",
                    student,
                });
            }
        });
    } catch (error) {
        res
            .status(400)
            .json({ message: "Failed to update student's roomNo", error });
    }
};