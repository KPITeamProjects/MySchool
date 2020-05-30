const connection = require("../config/Connection").connection

module.exports.Mark = class Mark{

    constructor(id,value,date,notes,courseId,studentId,teacherId) {
        this.id = id
        this.value = value
        this.date = date
        this.notes = notes
        this.courseId = courseId
        this.studentId = studentId
        this.teacherId = teacherId
    }
}

module.exports.addMark = function (mark) {
    const script = 'INSERT INTO marks(idMark, value, date,notes,courseId, studentId,teacherId) VALUES(?,?,?,?,?,?,?)'
    connection.query(script,[mark.id,mark.value,mark.dte,mark.notes,mark.courseId,mark.studentId,mark.teacherId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editMarkValue = function (newValue, markId) {
    const script = 'UPDATE marks SET value=? WHERE idMark=?'
    connection.query(script,[newValue, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editMarkDate = function (newDate, markId) {
    const script = 'UPDATE marks SET date=? WHERE idMark=?'
    connection.query(script,[newDate, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editMarkNotes = function (newNotes, markId) {
    const script = 'UPDATE marks SET notes=? WHERE idMark=?'
    connection.query(script,[newNotes, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editMarkCourseId = function (newCourse, markId) {
    const script = 'UPDATE marks SET courseId=? WHERE idMark=?'
    connection.query(script,[newCourse, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editMarkStudentId = function (newStudent, markId) {
    const script = 'UPDATE marks SET studentId=? WHERE idMark=?'
    connection.query(script,[newStudent, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editMarkTeacherId = function (newTeacherId, markId) {
    const script = 'UPDATE marks SET teacherId=? WHERE idMark=?'
    connection.query(script,[newTeacherId, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getAllMarksOfStudent = function (studentId, callback) {
    connection.query('SELECT * FROM  marks WHERE studentId=?',studentId,function(err, results){
        callback(results[0],err)
    });
}

module.exports.getAllMarksOfStudentByCourse = function (studentId, courseId, callback) {
    connection.query('SELECT * FROM  marks WHERE studentId=?, courseId=?',[studentId, courseId],function(err, results){
        callback(results[0],err)
    });
}


module.exports.getAllMarksOfByCourse = function (courseId, callback) {
    connection.query('SELECT * FROM  marks WHERE courseId=?', courseId,function(err, results){
        callback(results[0],err)
    });
}