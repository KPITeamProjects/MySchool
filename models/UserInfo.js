const connection = require("../config/Connection").connection

module.exports.UserInfo = class UserInfo {
    constructor(id, name, date, user_id) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.userId = user_id
    }
}

module.exports.getUserInfo = function (id, callback) {
    connection.query('SELECT * FROM users WHERE id=?',id,function(err, results){
        callback(results, err)
    });
}

module.exports.addUserInfo = function (userInfo) {
    const script = 'INSERT INTO users_info(idUserInfo, userId, date,name) VALUES(?,?,?,?)'
    connection.query(script,[userInfo.id, userInfo.userId, userInfo.date, userInfo.name], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeUserName = function (newName, idInfo) {
    const sql = 'UPDATE users_info SET name=? WHERE idUserInfo=?'
    connection.query(sql,[newName,idInfo], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeUserDate = function (newDate, idInfo) {
    const sql = 'UPDATE users_info SET date=? WHERE idUserInfo=?'
    connection.query(sql,[newDate,idInfo], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

