const mark =require('./Mark')
const user = require('./User')
const course = require('./Course')
const task = require('./Task')
const userInfo = require('./UserInfo')
const school = require('./School')
const schedule = require('./Schedule')
const myClass = require('./Class')



user.getUser(1, function (thisStudent,er) {
    myClass.getClass(thisStudent[0].class_idclass, function (thisClass, err) {
        schedule.getSchedule(thisClass[0].schedule_idschedule, function (thisSchedule,err) {
            console.log(thisSchedule.Monday.split(','))
        })
    })
})