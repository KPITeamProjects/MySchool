const connection = require("../config/Connection").connection
/** Class representing a userInfo. */
module.exports.UserInfo = class UserInfo {
    /**
     * Create a class.
     * @param {number} id - The id value.
     * @param {string} name - The class name value.
     * @param {date} date - The date value.
     * @param {number} user_id - The userId value.
     */
    constructor(id, name, date, user_id) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.userId = user_id
    }
}
/**
 * Get userInfo from data base.
 * @return callback function
 */
module.exports.getUserInfo = function (id, callback) {
    connection.query('SELECT * FROM users_info WHERE iduserInfo=?',id,function(err, results){
        callback(results, err)
    });
}
/**
 * Add userInfo to data base.
 * @return void
 */
module.exports.addUserInfo = function (userInfo) {
    const script = 'INSERT INTO users_info(idUserInfo, userId, date,name) VALUES(?,?,?,?)'
    connection.query(script,[userInfo.id, userInfo.userId, userInfo.date, userInfo.name], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit user name in data base.
 * @return void
 */
module.exports.changeUserName = function (newName, idInfo) {
    const sql = 'UPDATE users_info SET name=? WHERE idUserInfo=?'
    connection.query(sql,[newName,idInfo], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Edit user date in data base.
 * @return void
 */
module.exports.changeUserDate = function (newDate, idInfo) {
    const sql = 'UPDATE users_info SET date=? WHERE idUserInfo=?'
    connection.query(sql,[newDate,idInfo], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

