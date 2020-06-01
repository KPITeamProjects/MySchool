let mysql = require('mysql2');
const dbConfig = require("./db.config");

module.exports.pool = mysql.createPool({
    connectionLimit: 500,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
}).promise();





