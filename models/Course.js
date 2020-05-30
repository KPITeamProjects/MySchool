const connection = require("../config/Connection").connection

module.exports = class Course {

    constructor(id, info, userId, bookId) {
        this.id = id;
        this.info = info;
    }

}

module.exports.addCourse = function (course) {
    const sql = `INSERT INTO course(idcourse, info) VALUES(?,?)`;

    connection.query(sql,[course.id, course.info], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getCourse = function (id, callback) {

    connection.query('SELECT * FROM course WHERE idcourse=?',id, function(err, results){
        callback(results,err)
    });
}