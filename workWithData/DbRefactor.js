let connector = require('./Connector.js')

class DbRefactor {

    static addUser(user) {
        let connection = connector.connect()

        let id = user.id
        let info = user.info
        let role = user.role
        let class_id = user.classId

        const sql = `INSERT INTO users(idUser, idUserInfo, role_idrole,class_idclass) VALUES(?,?,?,?)`;

        connection.query(sql,[id,info,role,class_id], function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        connector.disconnect(connection)
    }

    addInfo(info){
        let connection = connector.connect()

        const sql = `INSERT INTO users_info(iduserInfo, name, date) VALUES(info.id, info.firstName + info.SecondName,
         info.date)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        connector.disconnect(connection)
    }

    addRole(role){
        let connection = connector.connect()

        const sql = `INSERT INTO role(idrole, post) VALUES(role.id, role.position)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        connector.disconnect(connection)
    }

    addClass(thisClass){
        let connection = connector.connect()

        const sql = `INSERT INTO class(idclass, Name, schedule_idschedule, tasks) VALUES(class.id, class.name,
         class.schedule, class.tasks)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        connector.disconnect(connection)
    }

    addSchedule(schedule){
        let connection = connector.connect()
        const sql = `INSERT INTO schedule(idschedule) VALUES(schedule.id)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        connector.disconnect(connection)
    }

    addTask(task){
        let connection = connector.connect()

        const sql = `INSERT INTO class(idtask, deadline, text) VALUES(task.id, task.deadline, task.text)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
        connector.disconnect(connection)
    }
}

module.exports.Refactor = DbRefactor


