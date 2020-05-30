const connection = require("../config/Connection").connection

module.exports.User = class User {
    constructor(id, info, role, classId, email, photo) {
        this.id = id;
        this.info = info;
        this.role = role;
        this.classId = classId;
        this.email = email;
        this.photo = photo
    }
}

module.exports.addUser = function (user) {

    const sql = `INSERT INTO users(idUser, idUserInfo, role_idrole,class_idclass, email, photo) VALUES(?,?,?,?,?,?)`;
    completeScript(sql, [user.id,user.info,user.role,user.classId, user.email, user.photo])
}

module.exports.editUserRole = function (role, id) {
    const sql = 'UPDATE users SET role_idrole=? WHERE idUser=?'
    completeScript(sql,[role,id])
}

module.exports.editUserClass = function (classId, id) {
    const sql = 'UPDATE users SET class_idclass=? WHERE idUser=?'
    completeScript(sql,[classId,id])
}

module.exports.editUserEmail = function(newEmail, id){
    const sql = 'UPDATE users SET email=? WHERE idUser=?'
    completeScript(sql,[newEmail,id])
}

module.exports.editPassword = function(newPassword, id){
    const sql = 'UPDATE users SET password=? WHERE idUser=?'
    completeScript(sql,[newPassword,id])
}

module.exports.getAllUsers = function () {
    connection.query('SELECT * FROM users',function(err, results){
        if (err) throw err;
        return results
    });
}

module.exports.getUser = function (id, callback) {

    connection.query('SELECT * FROM users WHERE idUser=?',id, function(err, results){
        callback(results[0],err)
    });
}

module.exports.getUserInfoId = function (id) {
    connection.query('SELECT idUserInfo FROM users WHERE idUser=?',id,function(err, results){
        if (err) throw err;
        return results
    });
}

module.exports.getUserPhoto = function (id) {
    connection.query('SELECT photo FROM users WHERE idUser=?',id,function(err, results){
        if (err) throw err;
        return results
    });
}

function completeScript(script,data) {

    connection.query(script,data, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}