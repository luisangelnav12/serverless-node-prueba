// db.js
require('dotenv').config();
const mysql = require('mysql');

const poolConfig = {
  host: process.env.DB_HOST,
  user:process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
// Conectar a la base de datos
const pool=mysql.createPool(poolConfig);

let conecction={
  query: async function(text, params){
    return new Promise((resolve,reject)=>{
      pool.query(text, params,function(err,result){
        if(err){console.log(err);return}
        resolve(result)
      })
    })

    }
}

module.exports= conecction;
