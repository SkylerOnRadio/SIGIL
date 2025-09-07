import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

// In-memory storage for mock users and OTPs
let mockUsers = [];
let otpStore = {};

// -------------------------------
// Register a new user
// -------------------------------
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body || {};

  if (!username || !email || !password) {
    return res.status(400).json({ message: "❌ All fields are required" });
  }

  // Only allow SMIT emails
  if (!email.endsWith("@smit.edu")) {
    return res.status(400).json({ message: "❌ Only SMIT email addresses allowed" });
  }

  const existing = mockUsers.find((user) => user.email === email);
  if (existing) {
    return res.status(400).json({ message: "❌ Email already registered" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  mockUsers.push({
    id: mockUsers.length + 1,
    username,
    email,
    password: hashedPassword,
    verified: false
  });

  res.status(201).json({ message: "✅ User registered successfully. Please verify your SMIT email." });
};

// -------------------------------
// Send OTP
// -------------------------------
export const sendOTP = async (req, res) => {
  const { email } = req.body || {};

  if (!email) return res.status(400).json({ message: "❌ Email is required" });

  const user = mockUsers.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "❌ User not found" });

  if (!email.endsWith("@smit.edu")) {
    return res.status(400).json({ message: "❌ Only SMIT emails can receive OTP" });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

  try {
    // Send OTP email via nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your email service if needed
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Campus Marketplace OTP Verification",
      text: `Your OTP is: ${otp}`
    });

    res.json({ message: "✅ OTP sent to your SMIT email" });
  } catch (err) {
    // fallback: return OTP in response for testing
    console.log("⚠️ Failed sending email, returning OTP for testing:", otp);
    res.json({ message: "✅ OTP generated (mock)", otp });
  }
};

// -------------------------------
// Verify OTP
// -------------------------------
export const verifyOTP = (req, res) => {
  const { email, otp } = req.body || {};

  if (!email || !otp) return res.status(400).json({ message: "❌ Email and OTP required" });

  const user = mockUsers.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "❌ User not found" });

  if (!email.endsWith("@smit.edu")) {
    return res.status(400).json({ message: "❌ Only SMIT emails can verify OTP" });
  }

  if (otpStore[email] && otpStore[email] === otp) {
    user.verified = true;
    delete otpStore[email];
    return res.json({ message: "✅ OTP verified successfully. You can now log in." });
  }

  res.status(400).json({ message: "❌ Invalid or expired OTP" });
};

// -------------------------------
// Login User
// -------------------------------
export const loginUser = async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) return res.status(400).json({ message: "❌ Email and password required" });

  const user = mockUsers.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: "❌ Invalid credentials" });

  if (!user.verified) {
    return res.status(403).json({ message: "❌ Email not verified. Please verify your SMIT email first." });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "❌ Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET || "temporary_jwt_secret",
    { expiresIn: "1d" }
  );

  res.cookie("jwt", token, { httpOnly: true, secure: false });
  res.json({ message: "✅ Login successful" });
};

// -------------------------------
// Logout User
// -------------------------------
export const logoutUser = (req, res) => {
  res.clearCookie("jwt");
  res.json({ message: "✅ Logged out successfully" });
};
