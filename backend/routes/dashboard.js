import express from 'express';
import { getMyProducts } from '../controllers/dashboardController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Private: user’s own listings
router.get('/', protect, getMyProducts);

export default router;
