const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to verify JWT token
const verifyAdminToken = (req, res, next) => {
    const token = req.cookies.token; // Read token from HTTP-only cookie

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: "Forbidden: Access denied" });
        }
        req.admin = decoded; // Attach admin details to the request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = verifyAdminToken;
