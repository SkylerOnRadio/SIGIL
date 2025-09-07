import jwt from "jsonwebtoken";
import { db } from "../config/connectDB.js";

// Middleware to protect routes and attach authenticated user
export const protect = async (req, res, next) => {
  try {
    // Get token from cookie or Authorization header
    let token = req.cookies?.jwt || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user from DB
    const [rows] = await db().query("SELECT id, name, email, isVerified FROM users WHERE id = ?", [decoded.id]);
    if (rows.length === 0) {
      return res.status(401).json({ message: "User not found." });
    }

    const user = rows[0];

    // Ensure user has verified email (OTP completed)
    if (!user.isVerified) {
      return res.status(403).json({ message: "Email not verified. Access denied." });
    }

    // Attach user to request
    req.user = { id: user.id, name: user.name, email: user.email };
    next();
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({ message: "Not authorized." });
  }
};

export default protect;
