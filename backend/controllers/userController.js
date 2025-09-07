import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/connectDB.js';
import generateToken from '../utils/generateToken.js';

// REGISTER
export const registerUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// check if user exists
		const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [
			email,
		]);
		if (rows.length > 0)
			return res.status(400).json({ message: 'User already exists' });

		// hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// insert into db
		const [result] = await db.query(
			'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
			[username, email, hashedPassword]
		);

		generateToken(res, result.insertId, username);

		res.status(201).json({
			id: result.insertId,
			username,
			email,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
};

// LOGIN
export const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [
			email,
		]);
		if (rows.length === 0)
			return res.status(400).json({ message: 'Invalid credentials' });

		const user = rows[0];
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res.status(400).json({ message: 'Invalid credentials' });

		generateToken(res, user.id, user.username);

		res.json({
			id: user.id,
			name: user.name,
			email: user.email,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// LOGOUT
export const logoutUser = (req, res) => {
	// With JWT, logout is client-side (remove token)
	res.json({ message: 'Logged out successfully' });
};
