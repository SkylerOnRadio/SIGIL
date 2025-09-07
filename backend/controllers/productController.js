import db from '../config/connectDB.js';

// ✅ Get products with search + filter
export const getProducts = async (req, res) => {
	try {
		const { search, category, minPrice, maxPrice } = req.query;

		let query = 'SELECT * FROM products';
		let values = [];

		if (search) {
			query += ' AND (title LIKE ? OR description LIKE ?)';
			values.push(`%${search}%`, `%${search}%`);
		}

		if (category) {
			query += ' AND category = ?';
			values.push(category);
		}

		if (minPrice) {
			query += ' AND price >= ?';
			values.push(minPrice);
		}

		if (maxPrice) {
			query += ' AND price <= ?';
			values.push(maxPrice);
		}

		const [rows] = await db.query(query, values);
		res.json(rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
};

// ✅ Create product
export const createProduct = async (req, res) => {
	try {
		const { title, description, price, category } = req.body;

		if (!title || !price || !category) {
			return res.status(400).json({ message: 'Missing required fields' });
		}

		const [result] = await db.query(
			'INSERT INTO products (title, description, price, category, userId) VALUES (?, ?, ?, ?, ?)',
			[title, description, price, category, req.user.id] // req.user comes from auth middleware
		);

		res
			.status(201)
			.json({ id: result.insertId, title, description, price, category });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
};

// ✅ Delete product (only if user owns it)
export const deleteProduct = async (req, res) => {
	try {
		const productId = req.params.id;

		// Check ownership
		const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [
			productId,
		]);
		if (rows.length === 0)
			return res.status(404).json({ message: 'Product not found' });

		if (rows[0].userId !== req.user.id) {
			return res
				.status(403)
				.json({ message: 'Not authorized to delete this product' });
		}

		await db.query('DELETE FROM products WHERE id = ?', [productId]);
		res.json({ message: 'Product deleted successfully' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
};
