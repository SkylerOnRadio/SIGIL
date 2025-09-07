import mysql from 'mysql2';

const HOST = process.env.HOST || "crossover.proxy.rlwy.net";
const USER = process.env.USER || root;
const PASS = process.env.PASS || zPKOLUGlkUitKlSCxuDJZvSyzSCecw;
const DB = process.env.DB || railway;

export const db = mysql.createPool({
	host: HOST,
	user: USER,
	password: PASS,
	database: DB,
});

export default db;
