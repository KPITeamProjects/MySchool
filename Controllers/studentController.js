const student = require('../models/User')
const mark = require('../models/Mark')

module.exports.fillInfo = function (request,response) {
    const id = request.id
    student.getUser(id, function (info,err) {
        if(err) alert("Not Found");

        response.render('cabinet.ejs',
        {})
    })
};
