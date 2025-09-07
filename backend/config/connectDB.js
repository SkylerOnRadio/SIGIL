import mysql from 'mysql2/promise';

const HOST = process.env.HOST;
const USER = 'root';
const PASS = process.env.PASS;
const DB = process.env.DB;
const PORT = process.env.DB_PORT;

export const db = mysql.createPool({
	host: HOST,
	user: USER,
	password: PASS,
	database: DB,
	port: PORT,
});

export default db;
