// server.js
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import db from "./config/connectDB.js"; // default export
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import dashboardRoutes from "./routes/dashboard.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRoutes);        // register, login, logout, OTP
app.use("/products", productRoutes);  // products CRUD, search/filter
app.use("/dashboard", dashboardRoutes); // user's personal listings

// Root endpoint
app.get("/", (req, res) => {
  res.send("✅ Campus Marketplace API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
