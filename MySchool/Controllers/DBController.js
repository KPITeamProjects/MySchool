class DBController {
    connectToDb(){
        this.connection = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DB
        });

        this.connection.connect(function(err){
            if (err) {
                return console.error("Error: " + err.message);
            }
            else{
                console.log("Connected");
            }
        });
    }

    closeConnection(){
        this.connection.end(function(err) {
            if (err) {
                return console.log("Error: " + err.message);
            }
            console.log("Connection closed");
        });
    }

    checkForId(id){
        this.connectToDb()
        let result  = this.checkIdInAllTables(id)
        this.closeConnection()
        return result;
    }

    checkIdInAllTables(id){
        this.connection.query(`SELECT * FROM users WHERE idUser=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM school WHERE idSchool=?`, id, function(err, results) {
            if(err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM ;ibrary WHERE idLibrary=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM users_info WHERE iduserInfo=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM role WHERE idrole=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM books WHERE idbook=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM class WHERE idclass=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM course WHERE idcourse=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM event WHERE idevent=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM lesson WHERE idlesson=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM post WHERE idpost=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM schedule WHERE idschedule=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });

        this.connection.query(`SELECT * FROM task WHERE idtask=?`, id, function(err, results) {
            if(!err) return false;
            console.log(results);
        });
        return true
    }
}