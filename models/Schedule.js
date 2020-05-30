const connection = require("../config/Connection").connection

module.exports = class Schedule {

    constructor(id, monday,tuesday,wednesday,thursday,friday,saturday) {
        this.id = id
        this.monday = monday
        this.tuesday = tuesday
        this.wednesday = wednesday
        this.thursday = thursday
        this.friday = friday
        this.saturday = saturday
    }
}

module.exports.addSchedule = function(schedule){
    const script = 'INSERT INTO schedules(idschedule,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday) VALUES(?,?,?,?,?,?,?)'
    connection.query(script,[schedule.id,schedule.monday,schedule.tuesday,schedule.wednesday, schedule.thursday,
    schedule.friday,schedule.saturday], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getSchedule = function(id,callback){
    connection.query('SELECT * FROM  schedules WHERE idschedule=?',id,function(err, results){
        callback(results[0], err)
    });
}

module.exports.changeScheduleMonday = function (id,day) {
    const script = 'UPDATE schedules SET Monday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleTuesday = function (id,day) {
    const script = 'UPDATE schedules SET Tuesday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleWednesday = function (id,day) {
    const script = 'UPDATE schedules SET Wednesday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleThursday = function (id,day) {
    const script = 'UPDATE schedules SET Thursday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleFriday = function (id,day) {
    const script = 'UPDATE schedules SET Friday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleSaturday = function (id,day) {
    const script = 'UPDATE schedules SET Saturday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.deleteSchedule = function (id) {
    const sql = 'DELETE FROM schedules WHERE idschedule=?'
    connection.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

