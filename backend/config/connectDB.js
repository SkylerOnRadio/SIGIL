import mysql from 'mysql2';

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASS = process.env.PASS;
const DB = process.env.DB;

export const db = mysql.createPool({
	host: HOST,
	user: USER,
	password: PASS,
	database: DB,
});

export default db;
