let mysql = require('mysql2');
const dbConfig = require("./db.config");

module.exports.connection = mysql.createConnection({

    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});



