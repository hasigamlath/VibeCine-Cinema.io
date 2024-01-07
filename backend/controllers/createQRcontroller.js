const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const generateQRCode = async(req, res) => {
    const token = req.headers["token"];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, secretKey, async(err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
        const expiresIn = new Date();
        expiresIn.setHours(expiresIn.getHours() + 24);

        const payload = {
            createdAt: new Date(),
            expiresIn: expiresIn,
        };

        const qrToken = jwt.sign(payload, secretKey);

        res.json({ qrToken });
    });
};

module.exports = {
    generateQRCode,
};