const connection = require("../config/Connection").connection

module.exports = class Class{

    constructor(id, name, schedule, tasks) {
        this.id = id;
        this.name = name;
        this.schedule = schedule;
        this.tasks = tasks;
    }
}

module.exports.addClass = function (myClass) {
    const sql = `INSERT INTO class(idclass,schedule_idschedule,Name) VALUES(?,?,?)`;

    connection.query(sql,[myClass.id, myClass.schedule, myClass.name], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getClass = function (id, callback) {

    connection.query('SELECT * FROM class WHERE idclass=?',id, function(err, results){
        callback(results,err)
    });
}