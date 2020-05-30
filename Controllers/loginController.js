const user = require('../models/User')


module.exports.login = function (request, response) {
    response.render('login', { title: 'Логін' })
}


module.exports.register = function (request, response) {
    response.render('register', { title: 'Розклад'})
}

module.exports.checkForUser = function (request, response) {
    let userLogin = request.body.login
    let password = request.body.password
    var joker = 1

    user.getUserByMail(userLogin,function (user, err) {
        if (err) alert("error login or password") ;
        if (password.equals(user.password)){
            response.redirect("/student/" + user.id + "/cabinet")
        }
    })
}
