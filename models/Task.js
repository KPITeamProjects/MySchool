const connection = require("../config/Connection").connection
const course = require('./Course')

class TaskForm{

    constructor(deadline,text, subject) {
        this.deadline = deadline
        this.task = text
        this.lesson_name = subject
    }
}


/** Class representing a task. */
module.exports = class Task {
    /**
     * Create a task.
     * @param {number} id - The id value.
     * @param {date} deadline - The deadline date value.
     * @param {string} text - The task text value.
     * @param {string} progress - The task description value.
     * @param {number} studentId - The studentId value.
     * @param {number} courseId - The courseId value.
     */
    constructor(id, deadline, text,progress, studentId, courseId) {
        this.id = id
        this.deadline = deadline
        this.text = text
        this.progress = progress
        this.studentId = studentId
        this.courseId = courseId
    }
}
/**
 * Add task to data base.
 * @return void
 */
module.exports.addTask = function (task) {
    const sql = `INSERT INTO tasks(idtask, deadline, text,progress, studentId,courseId) VALUES(?,?,?,?,?)`;

    connection.query(sql,[task.id,task.deadline,task.text,task.progress,task.studentId,task.courseId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit task deadline in data base.
 * @return void
 */
module.exports.editTaskDeadline = function (newDeadline, id) {
    const script = 'UPDATE tasks SET deadline=? WHERE idtask=?'
    connection.query(script,[newDeadline, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit task text in data base.
 * @return void
 */
module.exports.editTaskText = function (newText, id) {
    const script = 'UPDATE tasks SET text=? WHERE idtask=?'
    connection.query(script,[newText, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit task deadline in data base.
 * @return void
 */
module.exports.editTaskDeadline = function (progress, id) {
    const script = 'UPDATE tasks SET progress=? WHERE idtask=?'
    connection.query(script,[progress, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Get student's task from data base.
 * @return callback function
 */
module.exports.getTasksForStudent = function (studentId, callback) {
    connection.query('SELECT * FROM  tasks WHERE studentId=?',studentId,function(err, results){
        callback(results, err)
    });
}
/**
 * Get all tasks by course from data base.
 * @return callback function
 */
module.exports.getAllTasksByCourse = function (courseId, callback) {
    connection.query('SELECT * FROM  tasks WHERE courseId=?',courseId,function(err, results){
        callback(results[0], err)
    });
}
/**
 * Delete task from data base.
 * @return void
 */

function getAllDoneTasksForStudent(studentId, callback) {
    connection.query('SELECT * FROM  tasks WHERE studentId=? AND progress=1',studentId,function(err, results){
        callback(results, err)
    });
}

function getUnfulfilledTasksForUser(studentId, callback){
    connection.query('SELECT * FROM  tasks WHERE studentId=? AND progress=0',studentId,function(err, results){
        callback(results, err)
    });
}

module.exports.deleteTask = function (id) {
    const sql = 'DELETE FROM tasks WHERE idtask=?'
    connection.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.makeTableWithDoneTasks = function(studentId,callback){
    getAllDoneTasksForStudent(studentId, function (tasks, err) {
        let table = []
        tasks.forEach(task =>
            course.getNameOfTheCourse(task.courseId, function (course,err) {
                let deadlineDate = task.deadline.getDate()+"."+task.deadline.getMonth()+"."+task.deadline.getFullYear()
                table.push(new TaskForm(deadlineDate, task.text, course[0].info))
            })
        )
        setTimeout(()=>callback(table),1000)
    })
}

module.exports.makeTableUnfulfilledTasksForUser = function(studentId,callback){
    getUnfulfilledTasksForUser(studentId, function (tasks, err) {
        let table = []
        tasks.forEach(task =>
            course.getNameOfTheCourse(task.courseId, function (course,err) {
                let deadlineDate = task.deadline.getDate()+"."+task.deadline.getMonth()+"."+task.deadline.getFullYear()
                table.push(new TaskForm(deadlineDate, task.text, course[0].info))
            })
        )
        setTimeout(()=>callback(table),1000)
    })
}

module.exports.getAllDoneTasksForStudent = getAllDoneTasksForStudent
module.exports.getUnfulfilledTasksForUser = getUnfulfilledTasksForUser