let connector = require('../workWithData/Connector.js')

class DBController {


    static checkForId(id){
        let connection = connector.connect()
        let result  = this.checkIdInAllTables(id, connection)
        connector.disconnect(connection)
        return result;
    }

    //TODO add decorator if it complicated
    static checkIdInAllTables(id, connection){
        connection.query(`SELECT * FROM users WHERE idUser=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM school WHERE idSchool=?`, id, function(err, results) {
            if(err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM ;ibrary WHERE idLibrary=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM users_info WHERE iduserInfo=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM role WHERE idrole=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM books WHERE idbook=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM class WHERE idclass=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM course WHERE idcourse=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM event WHERE idevent=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM lesson WHERE idlesson=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM post WHERE idpost=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM schedule WHERE idschedule=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        connection.query(`SELECT * FROM task WHERE idtask=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });
        return true
    }
}

module.exports.DBController = DBController;