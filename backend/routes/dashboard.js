import express from "express";
import { getMyProducts } from "../controllers/dashboardController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Private: user’s own listings
router.get("/", auth, getMyProducts);

export default router;
