const pool = require("../config/Connection")

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
    pool.query(script,[schedule.id,schedule.monday,schedule.tuesday,schedule.wednesday, schedule.thursday,
    schedule.friday,schedule.saturday], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getSchedule = function(id){
    pool.query('SELECT * FROM  schedules WHERE idschedule=?',id,function(err, results){
        if (err) throw err;
        return results
    });
}

module.exports.changeScheduleMonday = function (id,day) {
    const script = 'UPDATE schedules SET Monday=? WHERE idschedule=?'
    pool.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleTuesday = function (id,day) {
    const script = 'UPDATE schedules SET Tuesday=? WHERE idschedule=?'
    pool.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleWednesday = function (id,day) {
    const script = 'UPDATE schedules SET Wednesday=? WHERE idschedule=?'
    pool.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleThursday = function (id,day) {
    const script = 'UPDATE schedules SET Thursday=? WHERE idschedule=?'
    pool.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleFriday = function (id,day) {
    const script = 'UPDATE schedules SET Friday=? WHERE idschedule=?'
    pool.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeScheduleSaturday = function (id,day) {
    const script = 'UPDATE schedules SET Saturday=? WHERE idschedule=?'
    pool.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.deleteSchedule = function (id) {
    const sql = 'DELETE FROM schedules WHERE idschedule=?'
    pool.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

