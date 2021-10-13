const {pool} = require('pg');


const isProduction = process.env.NODE_ENV === 'production';

let pool;

if(isPrpduction){
  pool = new pool({
    connectionString:process.env.DATABASE_URL,
    ssl:{rejectUnauthorized: false},
  });
} else {
  pool =new pool({
    user:'postgres',
    host:'localhost',
    database:'crown_14',
    password:'0000',
    port:'5432',
  });
}

module.exports = pool;