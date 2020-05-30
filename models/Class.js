const connection = require("../config/Connection").connection
/** Class representing a class. */
module.exports = class Class{
    /**
     * Create a class.
     * @param {number} id - The id value.
     * @param {string} name - The class name value.
     * @param {string} schedule - The schedule value.
     * @param {string} tasks - The task description value.
     */
    constructor(id, name, schedule, tasks) {

        this.id = id;
        this.name = name;
        this.schedule = schedule;
        this.tasks = tasks;
    }
}
/**
 * Add class to data base.
 * @return void
 */
module.exports.addClass = function (myClass) {
    const sql = `INSERT INTO class(idclass,schedule_idschedule,Name) VALUES(?,?,?)`;

    connection.query(sql,[myClass.id, myClass.schedule, myClass.name], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Get class from data base.
 * @return callback function
 */
module.exports.getClass = function (id, callback) {

    connection.query('SELECT * FROM class WHERE idclass=?',id, function(err, results){
        callback(results,err)
    });
}