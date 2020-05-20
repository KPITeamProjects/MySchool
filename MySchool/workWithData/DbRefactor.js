import Generator from "/Controllers"

const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

class DbRefactor {
    connectToDb(){
            this.connection = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DB
        });

        this.connection.connect(function(err){
            if (err) {
                return console.error("Ошибка: " + err.message);
            }
            else{
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });
    }

    closeConnection(){
        this.connection.end(function(err) {
            if (err) {
                return console.log("Ошибка: " + err.message);
            }
            console.log("Подключение закрыто");
        });
    }

    addUser(user) {
        this.connectToDb()

        const sql = `INSERT INTO users(idUser, idUserInfo, role_idrole,class_idclass) VALUES(user.id, user.info, user.role, user.class)`;

        this.connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        this.closeConnection()
    }

    addInfo(info){
        this.connectToDb()

        const sql = `INSERT INTO users_info(iduserInfo, name, date) VALUES(info.id, info.firstName + info.SecondName,
         info.date)`;

        this.connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        this.closeConnection()
    }

    addRole(role){
        this.connectToDb()

        const sql = `INSERT INTO role(idrole, post) VALUES(role.id, role.position)`;

        this.connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        this.closeConnection()
    }

    addClass(thisClass){
        this.connectToDb()

        const sql = `INSERT INTO class(idclass, Name, schedule_idschedule, tasks) VALUES(class.id, class.name,
         class.schedule, class.tasks)`;

        this.connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        this.closeConnection()
    }

    addSchedule(schedule){
        this.connectToDb()
        const sql = `INSERT INTO schedule(idschedule) VALUES(schedule.id)`;

        this.connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        this.closeConnection()
    }

    addTask(task){
        this.connectToDb()

        const sql = `INSERT INTO class(idtask, deadline, text) VALUES(task.id, task.deadline, task.text)`;

        this.connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        this.closeConnection()
    }


}

let generator = new Generator()
let db = new DbRefactor()
db.addUser(new User(1,2,3,4))
db.addInfo(new Info("Test", "Second", new Date(2000,0,0), 2))
db.addRole(new Role(3, "dev"))
db.addClass(new Class(5,"1-B", 6, "7"))
db.addSchedule(new Schedule(5))
db.addTask(new Task(7,new Date(), "Done!"))
console.log(generator.generateId())

