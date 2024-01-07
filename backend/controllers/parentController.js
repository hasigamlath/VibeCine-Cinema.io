const Parent = require('../models/parentModel');
const Student = require('../models/studentModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.parentLogin = async(req, res) => {
    try {
        const parent = await Parent.findOne({ email: req.body.email });

        if (!parent) {
            return res.status(404).json({ message: 'Parent not found' });
        }

        const isMatch = await bcrypt.compare(req.body.password, parent.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign({ id: parent._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ message: 'Login failed', error });
    }
};

exports.register = async(req, res) => {
    try {
        const student = await Student.findOne({ studentId: req.body.studentId });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const parentData = {...req.body, studentId: student.studentId };
        const parent = new Parent(parentData);
        await parent.save();
        res.status(201).json({ message: 'Parent registration successful', parent });
    } catch (error) {
        res.status(400).json({ message: 'Parent registration failed', error });
    }
};