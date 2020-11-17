const mysql = require('mysql');
const { connect } = require('./controlador/index.js');
const { database } = require('./keys.js');
const pool = mysql.createPool(database);
const { promisify } = require('util');

pool.getConnection((err, connection) => {
    if  ( err )  { 
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
            console.error ('Se cerró la conexión a la base de datos'); 
        }
        if (err.code === 'ER_CON_COUNT_ERROR') { 
            console.error ('La base de datos tiene muchas conexiones'); 
        } 
        if  (err.code === 'ECONNREFUSED') { 
          console.error ('Se rechazó la conexión a la base de datos'); 
        } 
      } 
    
    if  (connection) connection.release(); 
      console.log('DB está conectado'); 
      return; 
});

//transformamos a promesas
pool.query = promisify(pool.query);

module.exports = pool;