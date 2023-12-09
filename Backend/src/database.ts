import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export async function connect() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
  });
  return connection;
}
