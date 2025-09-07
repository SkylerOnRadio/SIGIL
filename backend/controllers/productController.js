import { db } from "../config/connectDB.js";

// GET PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice } = req.query;
    let query = "SELECT * FROM products WHERE 1=1";
    const values = [];

    if (search) { query += " AND (title LIKE ? OR description LIKE ?)"; values.push(`%${search}%`, `%${search}%`); }
    if (category) { query += " AND category = ?"; values.push(category); }
    if (minPrice) { query += " AND price >= ?"; values.push(minPrice); }
    if (maxPrice) { query += " AND price <= ?"; values.push(maxPrice); }

    const [rows] = await db().query(query, values);
    res.json(rows);
  } catch (err) { console.error(err); res.status(500).json({ message: "Server error" }); }
};

// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
    if (!title || !price || !category) return res.status(400).json({ message: "Missing fields" });

    const [result] = await db().query(
      "INSERT INTO products (title, description, price, category, userId) VALUES (?, ?, ?, ?, ?)",
      [title, description, price, category, req.user.id]
    );

    res.status(201).json({ id: result.insertId, title, description, price, category });
  } catch (err) { console.error(err); res.status(500).json({ message: "Server error" }); }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const [rows] = await db().query("SELECT * FROM products WHERE id = ?", [productId]);
    if (rows.length === 0) return res.status(404).json({ message: "Product not found" });

    if (rows[0].userId !== req.user.id) return res.status(403).json({ message: "Not authorized" });

    await db().query("DELETE FROM products WHERE id = ?", [productId]);
    res.json({ message: "Product deleted successfully" });
  } catch (err) { console.error(err); res.status(500).json({ message: "Server error" }); }
};
