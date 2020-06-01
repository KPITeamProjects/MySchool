const pool = require("../config/Connection").pool
/** Class representing a course. */
module.exports = class Course {
    /**
     * Create a class.
     * @param {number} id - The id value.
     * @param {string} info - The course info value.
     * @param {number} userId - The userId value.
     * @param {number} bookId - The bookId value.
     */
    constructor(id, info, userId, bookId) {
        this.id = id;
        this.info = info;
    }

}
/**
 * Add course to data base.
 * @return void
 */
module.exports.addCourse = function (course) {
    const sql = `INSERT INTO course(idcourse, info) VALUES(?,?)`;

    pool.execute(sql, [course.id, course.info])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Get course to data base.
 * @return callback function
 */
module.exports.getCourse = function (id, callback) {

    pool.execute('SELECT * FROM course WHERE idcourse=?', [id])
        .then(result =>{
            callback(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}

module.exports.getNameOfTheCourse = function (id, callback) {
    pool.execute('SELECT info FROM course WHERE idcourse=?', [id])
        .then(result =>{
            callback(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}