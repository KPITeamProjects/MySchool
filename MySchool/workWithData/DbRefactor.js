
class DbRefactor {

    addUser(user) {
        let connection = connectToDb()

        const sql = `INSERT INTO users(idUser, idUserInfo, role_idrole,class_idclass) VALUES(user.id, user.info,
         user.role, user.class)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        closeConnection(connection)
    }

    addInfo(info){
        let connection = connectToDb()

        const sql = `INSERT INTO users_info(iduserInfo, name, date) VALUES(info.id, info.firstName + info.SecondName,
         info.date)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        closeConnection(connection)
    }

    addRole(role){
        let connection = connectToDb()

        const sql = `INSERT INTO role(idrole, post) VALUES(role.id, role.position)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        closeConnection(connection)
    }

    addClass(thisClass){
        let connection = connectToDb()

        const sql = `INSERT INTO class(idclass, Name, schedule_idschedule, tasks) VALUES(class.id, class.name,
         class.schedule, class.tasks)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        closeConnection(connection)
    }

    addSchedule(schedule){
        let connection = connectToDb()
        const sql = `INSERT INTO schedule(idschedule) VALUES(schedule.id)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        closeConnection(connection)
    }

    addTask(task){
        let connection = connectToDb()

        const sql = `INSERT INTO class(idtask, deadline, text) VALUES(task.id, task.deadline, task.text)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        closeConnection(connection)
    }
}

let generator = require('../Controllers/Generator')


console.log(generator.generateId())

