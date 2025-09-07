import db from "../config/connectDB.js";

//  Get products of logged-in user
export const getMyProducts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products WHERE userId = ?", [req.user.id]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
