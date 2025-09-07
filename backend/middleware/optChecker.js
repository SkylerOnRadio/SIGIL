import nodemailer from 'nodemailer';
import db from '../config/connectDB.js';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

// Generate 6-digit OTP
const generateOTP = () =>
	Math.floor(100000 + Math.random() * 900000).toString();

export const sendOTP = async (email) => {
	if (!email) throw new Error('Email is required');

	const otp = generateOTP();

	const sql = `
    INSERT INTO otp_table (email, otp, expires_at)
    VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 5 MINUTE))
    ON DUPLICATE KEY UPDATE otp=?, expires_at=DATE_ADD(NOW(), INTERVAL 5 MINUTE)
  `;

	try {
		await db.execute(sql, [email, otp, otp]);

		// Send OTP email
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: email,
			subject: 'Your OTP Code',
			text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
		});
	} catch (err) {
		throw new Error('Failed to send OTP: ' + err.message);
	}
};

export const verifyOTP = async (email, otp) => {
	if (!email || !otp) throw new Error('Email and OTP are required');

	const sql = 'SELECT otp FROM otp_table WHERE email=? AND expires_at > NOW()';
	try {
		const [rows] = await db.execute(sql, [email]);
		if (rows.length === 0) return false; // no OTP found or expired
		return rows[0].otp === otp; // true if matches, false otherwise
	} catch (err) {
		throw new Error('Failed to verify OTP: ' + err.message);
	}
};
