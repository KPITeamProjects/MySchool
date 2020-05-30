const connection = require("../config/Connection").connection
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

    connection.query(sql,[course.id, course.info], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Get course to data base.
 * @return callback function
 */
module.exports.getCourse = function (id, callback) {

    connection.query('SELECT * FROM course WHERE idcourse=?',id, function(err, results){
        callback(results,err)
    });
}