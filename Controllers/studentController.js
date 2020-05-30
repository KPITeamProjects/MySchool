const student = require('../models/User')
const mark = require('../models/Mark')
const info = require('../models/UserInfo')
const myClass = require('../models/Class')
const school = require('../models/School')


module.exports.fillInfo = function (request,response) {
    const id = request.id
    student.getUser(id, function (user,err) {
        if(err) alert("Not Found");
        mark.configMarksTableForUser(id, function (markTable,err) {
            info.getUserInfo(id, function (userInfo, error) {
                let splitedName = userInfo.name.split(' ')
                myClass.getClass(user.class_idclass, function (classInfo, err) {
                    mark.calculateMiddleMark(id,function (middle, error) {
                        school.getSchool(user.school, function (mySchool,err) {
                            response.render('cabinet.ejs', {
                                mark:middle,
                                surname:splitedName[0],
                                name:splitedName[1],
                                second_name:splitedName[2],
                                school:mySchool.name,
                                form:classInfo.Name,
                                userData:markTable
                            })
                        })

                    })

                })
            })
        })
    })
};