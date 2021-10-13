const { Pool } = require('pg');

const isProduction = Process.env.NODE_ENV === 'production';

const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Crown_14',
//   password: '0000',
//   port: 5432,
    connectionString: isProduction ? process.env.DATABASE_URL: `postgresql://postgres:0000@localhost:5432/crown_14`
});

pool.query('SELECT * From category_69', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
});

module.export = pool;
