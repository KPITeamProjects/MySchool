const user = require('../models/User')


module.exports.login = function (request, response) {
    response.render('login', { title: 'Логін' })
}


module.exports.register = function (request, response) {
    response.render('register', { title: 'Розклад'})
}

module.exports.checkForUser = function (request, response) {
    let login = request.body.login
    let password = request.body.password

    user.getUserByMail(login(),function (info, err) {
        if (err) alert("error login or password") ;
        if (password.equals(password)){
            response.redirect('/'+info.id)
        }
    })

}