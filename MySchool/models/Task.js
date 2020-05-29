const pool = require("../config/Connection")

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

    pool.query(sql,[task.id,task.deadline,task.text,task.progress,task.studentId,task.courseId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editTaskDeadline = function (newDeadline, id) {
    const script = 'UPDATE tasks SET deadline=? WHERE idtask=?'
    pool.query(script,[newDeadline, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editTaskText = function (newText, id) {
    const script = 'UPDATE tasks SET text=? WHERE idtask=?'
    pool.query(script,[newText, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editTaskDeadline = function (progress, id) {
    const script = 'UPDATE tasks SET progress=? WHERE idtask=?'
    pool.query(script,[progress, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getTasksForStudent = function (studentId) {
    pool.query('SELECT * FROM  tasks WHERE studentId=?',studentId,function(err, results){
        if (err) throw err;
        return results
    });
}

module.exports.getAllTasksByCourse = function (courseId) {
    pool.query('SELECT * FROM  marks WHERE courseId=?',courseId,function(err, results){
        if (err) throw err;
        return results
    });
}

module.exports.deleteTask = function (id) {
    const sql = 'DELETE FROM tasks WHERE idtask=?'
    pool.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}