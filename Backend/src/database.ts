import { createPool } from 'mysql2/promise';

export async function connect() {
  const connection = await createPool({
    host: 'localhost',
    user: 'root',
    password: '4dm1n_sql',
    database: 'mysql_paillaco',
    connectionLimit: 10,

  });
  return connection;
}
