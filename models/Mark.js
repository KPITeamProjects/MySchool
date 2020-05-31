const connection = require("../config/Connection").connection
const course = require('./Course')
const user = require('./User')
const userInfo = require('./UserInfo')
/** Class representing a mark configuration. */
class MarkConfig{
    constructor(lesson_name, date, teacher_name, value) {
        this.lesson_name = lesson_name
        this.date = date
        this.teacher_name = teacher_name
        this.value = value
    }
}

/** Class representing a mark. */
class Mark{
    /**
     * Create a class.
     * @param {number} id - The id value.
     * @param {number} value - The mark value.
     * @param {date} date - The date value.
     * @param {string} notes - The notes value.
     * @param {number} courseId - The courseId value.
     * @param {number} studentId - The studentId value.
     * @param {number} teacherId - The teacherId value.
     */
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
/**
 * Add mark to data base.
 * @return void
 */
module.exports.addMark = function (mark) {
    const script = 'INSERT INTO marks(idMark, value, date,notes,courseId, studentId,teacherId) VALUES(?,?,?,?,?,?,?)'
    connection.query(script,[mark.id,mark.value,mark.date,mark.notes,mark.courseId,mark.studentId,mark.teacherId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit mark value in data base.
 * @return void
 */
module.exports.editMarkValue = function (newValue, markId) {
    const script = 'UPDATE marks SET value=? WHERE idMark=?'
    connection.query(script,[newValue, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit date of mark in data base.
 * @return void
 */
module.exports.editMarkDate = function (newDate, markId) {
    const script = 'UPDATE marks SET date=? WHERE idMark=?'
    connection.query(script,[newDate, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit notes for mark in data base.
 * @return void
 */
module.exports.editMarkNotes = function (newNotes, markId) {
    const script = 'UPDATE marks SET notes=? WHERE idMark=?'
    connection.query(script,[newNotes, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit courseId for mark in data base.
 * @return void
 */
module.exports.editMarkCourseId = function (newCourse, markId) {
    const script = 'UPDATE marks SET courseId=? WHERE idMark=?'
    connection.query(script,[newCourse, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit studentId for mark in data base.
 * @return void
 */
module.exports.editMarkStudentId = function (newStudent, markId) {
    const script = 'UPDATE marks SET studentId=? WHERE idMark=?'
    connection.query(script,[newStudent, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit teacherId for mark in data base.
 * @return void
 */
module.exports.editMarkTeacherId = function (newTeacherId, markId) {
    const script = 'UPDATE marks SET teacherId=? WHERE idMark=?'
    connection.query(script,[newTeacherId, markId], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

function getAllMarksOfStudent(studentId, callback) {
    connection.query('SELECT * FROM  marks WHERE studentId=?',studentId,function(err, results){
        callback(results,err)
    });
}
/**
 * Get all marks of specific student by course
 * from data base.
 * @return callback function
 */
module.exports.getAllMarksOfStudentByCourse = function(studentId, courseId, callback) {
    connection.query('SELECT * FROM  marks WHERE studentId=?, courseId=?',[studentId, courseId],function(err, results){
        callback(results,err)
    });
}

/**
 * Get all marks by specific course from data base.
 * @return callback function
 */
module.exports.getAllMarksOfByCourse = function (courseId, callback) {
    connection.query('SELECT * FROM  marks WHERE courseId=?', courseId,function(err, results){
        callback(results,err)
    });
}
/**
 * Calculate average value of all marks
 * of specific student by course from data base.
 * @return callback function
 */
module.exports.calculateMiddleMark = function(id,callback){
    getAllMarksOfStudent(id, function (info, err) {
        let marks = info
        var result = 0;
        try {
            marks.forEach(mark=>result+=mark.value)
            callback(mark)
        }catch (e) {
            callback(marks.value)
        }

    })
}
/**
 * Configure a table with marks
 * of specific student by course from data base.
 * @return callback function
 */
module.exports.configMarksTableForUser = function (id, callback) {
    getAllMarksOfStudent(id, function (info, err) {
        let mark = info
        let table = []

        mark.forEach(element =>
            course.getCourse(element.courseId, function (lesson, error) {
                user.getUser(element.teacherId, function (teacher, error) {
                    userInfo.getUserInfo(teacher[0].idUserInfo, function (info,err) {
                        table.push(new MarkConfig(lesson[0].info,element.date,info[0].name,element.value))
                    })
                })
            }))

        setTimeout(()=>callback(table), 1000)

        /*course.getCourse(info.courseId, function (lesson, error) {
            user.getUser(info.teacherId, function (teacher, error) {
                callback([new MarkConfig(lesson,info.date,teacher,info.value)])
            })
        })*/
    })

}

module.exports.getAllMarksOfStudent = getAllMarksOfStudent
module.exports.Mark = Mark
module.exports.MarkConfig = MarkConfig