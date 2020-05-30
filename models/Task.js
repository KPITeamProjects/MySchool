const connection = require("../config/Connection").connection

module.exports = class Task {

    constructor(id, deadline, text,progress, studentId, courseId) {
        this.id = id
        this.deadline = deadline
        this.text = text
        this.progress = progress
        this.studentId = studentId
        this.courseId = courseId
    }
}

module.exports.addTask = function (task) {
    const sql = `INSERT INTO tasks(idtask, deadline, text,progress, studentId,courseId) VALUES(?,?,?,?,?)`;

    connection.query(sql,[task.id,task.deadline,task.text,task.progress,task.studentId,task.courseId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editTaskDeadline = function (newDeadline, id) {
    const script = 'UPDATE tasks SET deadline=? WHERE idtask=?'
    connection.query(script,[newDeadline, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editTaskText = function (newText, id) {
    const script = 'UPDATE tasks SET text=? WHERE idtask=?'
    connection.query(script,[newText, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editTaskDeadline = function (progress, id) {
    const script = 'UPDATE tasks SET progress=? WHERE idtask=?'
    connection.query(script,[progress, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getTasksForStudent = function (studentId, callback) {
    connection.query('SELECT * FROM  tasks WHERE studentId=?',studentId,function(err, results){
        callback(results, err)
    });
}

module.exports.getAllTasksByCourse = function (courseId, callback) {
    connection.query('SELECT * FROM  marks WHERE courseId=?',courseId,function(err, results){
        callback(results[0], err)
    });
}

module.exports.deleteTask = function (id) {
    const sql = 'DELETE FROM tasks WHERE idtask=?'
    connection.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}