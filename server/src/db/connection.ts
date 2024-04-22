import mysql from 'mysql2/promise';



const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Hanguel418@1179$',
    database: 'korean',
    connectionLimit: 5,
    maxIdle: 5,
  
  });

  export default pool;