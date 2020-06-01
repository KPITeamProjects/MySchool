const pool = require("../config/Connection").pool
const course = require('./Course')
const user = require('./User')
const userInfo = require('./UserInfo')
/** Class representing a mark configuration. */
class MarkConfig{
    constructor(lesson_name, date, teacher_name, value, comment) {
        this.lesson_name = lesson_name
        this.date = date
        this.teacher_name = teacher_name
        this.value = value
        this.commen = comment
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

    pool.execute(script, [mark.id,mark.value,mark.date,mark.notes,mark.courseId,mark.studentId,mark.teacherId])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Edit mark value in data base.
 * @return void
 */
module.exports.editMarkValue = function (newValue, markId) {
    const script = 'UPDATE marks SET value=? WHERE idMark=?'

    pool.execute(script, [newValue, markId])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Edit date of mark in data base.
 * @return void
 */
module.exports.editMarkDate = function (newDate, markId) {
    const script = 'UPDATE marks SET date=? WHERE idMark=?'

    pool.execute(script, [newDate, markId])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Edit notes for mark in data base.
 * @return void
 */
module.exports.editMarkNotes = function (newNotes, markId) {
    const script = 'UPDATE marks SET notes=? WHERE idMark=?'

    pool.execute(script, [newNotes, markId])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Edit courseId for mark in data base.
 * @return void
 */
module.exports.editMarkCourseId = function (newCourse, markId) {
    const script = 'UPDATE marks SET courseId=? WHERE idMark=?'

    pool.execute(script, [newCourse, markId])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Edit studentId for mark in data base.
 * @return void
 */
module.exports.editMarkStudentId = function (newStudent, markId) {
    const script = 'UPDATE marks SET studentId=? WHERE idMark=?'

    pool.execute(script, [newStudent, markId])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Edit teacherId for mark in data base.
 * @return void
 */
module.exports.editMarkTeacherId = function (newTeacherId, markId) {
    const script = 'UPDATE marks SET teacherId=? WHERE idMark=?'

    pool.execute(script, [newTeacherId, markId])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}

function getAllMarksOfStudent(studentId, callback) {

    pool.execute('SELECT * FROM  marks WHERE studentId=?', [studentId])
        .then(result =>{
            callback(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Get all marks of specific student by course
 * from data base.
 * @return callback function
 */
module.exports.getAllMarksOfStudentByCourse = function(studentId, courseId, callback) {

    const script = 'SELECT * FROM  marks WHERE studentId=? AND courseId=?'

    pool.execute(script, [studentId, courseId])
        .then(result =>{
            callback(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}

/**
 * Get all marks by specific course from data base.
 * @return callback function
 */
module.exports.getAllMarksByCourse = function (courseId, callback) {

    pool.execute('SELECT * FROM  marks WHERE courseId=?', [courseId])
        .then(result =>{
            callback(result[0])
        })
        .catch(function(err) {
            console.log(err);
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
        var counter = 0;
        try {
            marks.forEach(function(mark){
                result+=mark.value
                counter++;
            })
            setTimeout(()=>callback((result/counter).toFixed(1)), 1000)
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
                    userInfo.getUserInfo(teacher.idUserInfo, function (info,err) {
                        let dating = element.date.getDate()+"."+element.date.getMonth()+"."+element.date.getFullYear()
                        table.push(new MarkConfig(lesson[0].info,dating,info[0].name,element.value, element.notes))
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