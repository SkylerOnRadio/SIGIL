import express from "express";
import { getMyProducts } from "../controllers/dashboardController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/", auth, getMyProducts);

export default router;
