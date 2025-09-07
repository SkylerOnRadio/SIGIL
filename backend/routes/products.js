import express from 'express';

import { upload } from '../middleware/multer.js';
import {
	getProducts,
	createProduct,
	deleteProduct,
} from '../controllers/productController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public: search/filter products
router.get('/', getProducts);

// Private: add product
router.post('/', protect, upload.array('images', 5), createProduct);

// Private: delete product (only owner)
router.delete('/:id', protect, deleteProduct);

export default router;
