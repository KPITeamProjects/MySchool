let mysql = require('mysql');
const dbConfig = require("./db.config");

modules.exports = mysql.createPool({

    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});



