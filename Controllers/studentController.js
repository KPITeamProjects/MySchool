const student = require('../models/User')
const mark = require('../models/Mark')
const info = require('../models/UserInfo')
const myClass = require('../models/Class')
const school = require('../models/School')
const task = require('../models/Task')
const schedule = require('../models/Schedule')


module.exports.fillInfo = function (request,response) {
    const id = request.session.userId
    student.getUser(id, function (user,err) {
        if(err) response.send(id);
        mark.configMarksTableForUser(id, function (markTable,err) {
            info.getUserInfo(id, function (userInfo, error) {
                let splitedName = userInfo[0].name.split(' ')
                myClass.getClass(user[0].class_idclass, function (classInfo, err) {
                    mark.calculateMiddleMark(id,function (middle, error) {
                        school.getSchool(user[0].school, function (mySchool,err) {
                            response.render('cabinet.ejs', {
                                mark:middle,
                                surname:splitedName[0],
                                name:splitedName[1],
                                second_name:splitedName[2],
                                school:mySchool[0].name,
                                form:classInfo[0].Name,
                                userData:markTable
                            })
                        })

                    })

                })
            })
        })
    })
};


module.exports.fillTasks = function (request, response) {
    const id = request.session.userId
    task.makeTableWithDoneTasks(id,function (doneTable) {
        task.makeTableUnfulfilledTasksForUser(id, function (todoTable) {
            response.render('events.ejs',{
                taskTable:todoTable,
                taskdoneTable:doneTable,
                title:"Завдання"
            })
        })
    })
};


module.exports.getSchedule = function (request, response) {
    const id = request.session.userId
    student.getUser(id, function (thisStudent,er) {
        myClass.getClass(thisStudent[0].class_idclass, function (thisClass, err) {
            schedule.getSchedule(thisClass[0].schedule_idschedule, function (thisSchedule,err) {
                let maxIndex = schedule.findMaxIndex(thisSchedule)
                response.render('rozklad.ejs', {
                    dataMonday: thisSchedule.Monday.split(','),
                    dataTuesday: thisSchedule.Tuesday.split(','),
                    dataWednesday: thisSchedule.Wednesday.split(','),
                    dataThursday: thisSchedule.Thursday.split(','),
                    dataFriday: thisSchedule.Friday.split(','),
                })
            })
        })
    })
};
