const connection = require("../config/Connection").connection
/** Class representing a user. */
module.exports.User = class User {
    /**
     * Create a class.
     * @param {number} id - The id value.
     * @param {string} info - The user info value.
     * @param {number} role - The user role value.
     * @param {number} classId - The classId value.
     * @param {string} email - The user email value.
     * @param {photo} photo - The user photo.
     */
    constructor(id, info, role, classId, email, photo) {
        this.id = id;
        this.info = info;
        this.role = role;
        this.classId = classId;
        this.email = email;
        this.photo = photo
    }
}
/**
 * Add user to data base.
 * @return void
 */
module.exports.addUser = function (user) {

    const sql = `INSERT INTO users(idUser, idUserInfo, role_idrole,class_idclass, email, photo) VALUES(?,?,?,?,?,?)`;
    completeScript(sql, [user.id,user.info,user.role,user.classId, user.email, user.photo])
}
/**
 * Edit user role in data base.
 * @return void
 */
module.exports.editUserRole = function (role, id) {
    const sql = 'UPDATE users SET role_idrole=? WHERE idUser=?'
    completeScript(sql,[role,id])
}
/**
 * Edit user class in data base.
 * @return void
 */
module.exports.editUserClass = function (classId, id) {
    const sql = 'UPDATE users SET class_idclass=? WHERE idUser=?'
    completeScript(sql,[classId,id])
}
/**
 * Edit user email in data base.
 * @return void
 */
module.exports.editUserEmail = function(newEmail, id){
    const sql = 'UPDATE users SET email=? WHERE idUser=?'
    completeScript(sql,[newEmail,id])
}
/**
 * Edit user password in data base.
 * @return void
 */
module.exports.editPassword = function(newPassword, id){
    const sql = 'UPDATE users SET password=? WHERE idUser=?'
    completeScript(sql,[newPassword,id])
}
/**
 * Get all users from data base.
 * @return callback function
 */
module.exports.getAllUsers = function (callback) {
    connection.query('SELECT * FROM users',function(err, results){
        callback(results, err)
    });
}
/**
 * Get specific user from data base.
 * @return callback function
 */
module.exports.getUser = function (id, callback) {

    connection.query('SELECT * FROM users WHERE idUser=?',id, function(err, results){
        callback(results,err)
    });
}
/**
 * Get user by email from data base.
 * @return callback function
 */
module.exports.getUserByMail = function (mail, callback) {

    connection.query('SELECT * FROM users WHERE email=?',mail, function(err, results){
        callback(results[0],err)
    });
}
/**
 * Get specific user info from data base.
 * @return callback function
 */
module.exports.getUserInfoId = function (id, callback) {
    connection.query('SELECT idUserInfo FROM users WHERE idUser=?',id,function(err, results){
        callback(results, err)
    });
}
/**
 * Get specific user photo from data base.
 * @return callback function
 */
module.exports.getUserPhoto = function (id, callback) {
    connection.query('SELECT photo FROM users WHERE idUser=?',id,function(err, results){
        callback(results[0], err)
    });
}
/**
 * Script function.
 * @return void
 */
function completeScript(script,data) {

    connection.query(script,data, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}