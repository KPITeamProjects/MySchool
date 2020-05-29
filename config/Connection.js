let mysql = require('mysql');
const dbConfig = require("./db.config");

module.exports = mysql.createPool({

    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});



