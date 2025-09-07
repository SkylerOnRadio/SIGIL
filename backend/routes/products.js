import express from "express";
import { getProducts, createProduct, deleteProduct } from "../controllers/productController.js";
import auth from "../middleware/auth.js"; // JWT middleware

const router = express.Router();

// Public: search/filter products
router.get("/", getProducts);

// Private: add product
router.post("/", auth, createProduct);

// Private: delete product (only owner)
router.delete("/:id", auth, deleteProduct);

export default router;
