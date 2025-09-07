import db from '../config/connectDB.js';

// ✅ Get products with search + filter
export const getProducts = async (req, res) => {
	try {
		const { search, category, minPrice, maxPrice } = req.query;

		// Base query
		let query = 'SELECT * FROM products';
		const values = [];

		// Conditional filters
		const conditions = [];
		if (search) conditions.push('(title LIKE ? OR description LIKE ?)');
		if (category) conditions.push('category = ?');
		if (minPrice) conditions.push('price >= ?');
		if (maxPrice) conditions.push('price <= ?');

		if (conditions.length > 0) {
			query += ' WHERE ' + conditions.join(' AND ');
			if (search) values.push(`%${search}%`, `%${search}%`);
			if (category) values.push(category);
			if (minPrice) values.push(minPrice);
			if (maxPrice) values.push(maxPrice);
		}

		// Fetch products
		const [products] = await db.query(query, values);

		// Fetch images for each product
		for (let product of products) {
			const [images] = await db.query(
				'SELECT images FROM product_images WHERE productId = ?',
				[product.id]
			);
			product.images = images.map((img) => img.images); // array of URLs
		}

		res.json(products);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
};

// ✅ Create product
export const createProduct = async (req, res) => {
	try {
		const { title, description, price, category } = req.body;

		if (!title || !price || !category || !description) {
			return res.status(400).json({ message: 'Missing required fields' });
		}

		const [result] = await db.query(
			'INSERT INTO products (title, description, price, category, userId) VALUES (?, ?, ?, ?, ?)',
			[title, description, price, category, req.user.id]
		);

		const productId = result.insertId;

		if (req.files && req.files.length > 0) {
			// Use correct column name here
			const imageQueries = req.files.map((file) => [
				productId,
				`/uploads/${file.filename}`,
			]);

			await db.query(
				'INSERT INTO product_images (productId, imageUrl) VALUES ?',
				[imageQueries]
			);
		}

		res
			.status(201)
			.json({ id: productId, title, description, price, category });
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
