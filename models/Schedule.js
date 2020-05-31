const connection = require("../config/Connection").connection
/** Class representing a schedule. */
module.exports = class Schedule {
    /**
     * Create a schedule.
     * @param {number} id - The id value.
     * @param {string} monday - The weekday value.
     * @param {string} tuesday - The weekday value.
     * @param {string} wednesday - The weekday value.
     * @param {string} thursday - The weekday value.
     * @param {string} friday - The weekday value.
     * @param {string} saturday - The weekday value.
     */
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
/**
 * Add schedule to data base.
 * @return void
 */
module.exports.addSchedule = function(schedule){
    const script = 'INSERT INTO schedules(idschedule,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday) VALUES(?,?,?,?,?,?,?)'
    connection.query(script,[schedule.id,schedule.monday,schedule.tuesday,schedule.wednesday, schedule.thursday,
    schedule.friday,schedule.saturday], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Get schedule from data base.
 * @return callback function
 */
module.exports.getSchedule = function(id,callback){
    connection.query('SELECT * FROM  schedules WHERE idschedule=?',id,function(err, results){
        callback(results[0], err)
    });
}
/**
 * Change schedule for monday in data base.
 * @return void
 */
module.exports.changeScheduleMonday = function (id,day) {
    const script = 'UPDATE schedules SET Monday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Change schedule for tuesday in data base.
 * @return void
 */
module.exports.changeScheduleTuesday = function (id,day) {
    const script = 'UPDATE schedules SET Tuesday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Change schedule for wednesday in data base.
 * @return void
 */
module.exports.changeScheduleWednesday = function (id,day) {
    const script = 'UPDATE schedules SET Wednesday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Change schedule for thursday in data base.
 * @return void
 */
module.exports.changeScheduleThursday = function (id,day) {
    const script = 'UPDATE schedules SET Thursday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Change schedule for friday in data base.
 * @return void
 */
module.exports.changeScheduleFriday = function (id,day) {
    const script = 'UPDATE schedules SET Friday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Change schedule for saturday in data base.
 * @return void
 */
module.exports.changeScheduleSaturday = function (id,day) {
    const script = 'UPDATE schedules SET Saturday=? WHERE idschedule=?'
    connection.query(script,[day, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Delete schedule from data base.
 * @return void
 */
module.exports.deleteSchedule = function (id) {
    const sql = 'DELETE FROM schedules WHERE idschedule=?'
    connection.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.findMaxIndex = function (schedule) {
    let monday = schedule.Monday.split(',').length
    let tuesday = schedule.Tuesday.split(',').length
    let wednesday = schedule.Wednesday.split(',').length
    let thursday = schedule.Thursday.split(',').length
    let friday =  schedule.Friday.split(',').length

    return Math.max(monday,tuesday,wednesday,thursday,friday)
}

