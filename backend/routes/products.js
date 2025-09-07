import express from "express";
import { getProducts, createProduct, deleteProduct } from "../controllers/productController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", auth, createProduct);
router.delete("/:id", auth, deleteProduct);

export default router;
