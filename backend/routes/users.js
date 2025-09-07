import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  sendOTP,
  verifyOTP, // ✅ matches controller export
} from "../controllers/userController.js";

const router = express.Router();

// @route   POST /users/register
// @desc    Register a new user
router.post("/register", registerUser);

// @route   POST /users/login
// @desc    Login user
router.post("/login", loginUser);

// @route   POST /users/logout
// @desc    Logout user
router.post("/logout", logoutUser);

// @route   POST /users/send-otp
// @desc    Send OTP to email
router.post("/send-otp", sendOTP);

// @route   POST /users/verify-otp
// @desc    Verify OTP
router.post("/verify-otp", verifyOTP);

export default router;
