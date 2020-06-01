const pool = require("../config/Connection").pool
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

    pool.execute('SELECT * FROM users_info WHERE iduserInfo=?', [id])
        .then(result =>{
            callback(result[0]);
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Add userInfo to data base.
 * @return void
 */
module.exports.addUserInfo = function (userInfo) {
    const script = 'INSERT INTO users_info(idUserInfo, userId, date,name) VALUES(?,?,?,?)'

    pool.execute(script,[userInfo.id, userInfo.userId, userInfo.date, userInfo.name])
        .then(result =>{
            console.log(result[0]);
        })
        .catch(function(err) {
            console.log(err);
        });

}
/**
 * Edit user name in data base.
 * @return void
 */
module.exports.changeUserName = function (newName, idInfo) {
    const sql = 'UPDATE users_info SET name=? WHERE idUserInfo=?'

    pool.execute(sql,[newName,idInfo])
        .then(result =>{
            console.log(result[0]);
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Edit user date in data base.
 * @return void
 */
module.exports.changeUserDate = function (newDate, idInfo) {
    const sql = 'UPDATE users_info SET date=? WHERE idUserInfo=?'

    pool.execute(sql,[newDate,idInfo])
        .then(result =>{
            console.log(result[0]);
        })
        .catch(function(err) {
            console.log(err);
        });
}

