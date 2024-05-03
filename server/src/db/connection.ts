import mysql from 'mysql2/promise';



const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Hanguel418@1179$',
    database: 'korean',
  
  });

  export default pool;