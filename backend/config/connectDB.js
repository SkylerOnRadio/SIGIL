import mysql from 'mysql2/promise';

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASS = process.env.PASS;
const DB = process.env.DB;
const PORT = process.env.DB_PORT;

export const db = mysql.createPool(process.env.SQL_URL);

export default db;
