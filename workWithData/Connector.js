const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

function connectToDb(){
    let connection = mysql.createConnection({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
    });

    connection.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else{
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
    return connection
}

function closeConnection(connection){
    connection.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
}

module.exports.connect=connectToDb
module.exports.disconnect = closeConnection