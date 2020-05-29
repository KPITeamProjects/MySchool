const pool = require("../config/Connection")

module.exports.UserInfo = class UserInfo {
    constructor(id, name, date, user_id) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.userId = user_id
    }
}

module.exports.getUserInfo = function (id) {
    pool.query('SELECT * FROM users WHERE id=?',id,function(err, results){
        if (err) throw err;
        return results
    });
}

module.exports.addUserInfo = function (userInfo) {
    const script = 'INSERT INTO users_info(idUserInfo, userId, date,name) VALUES(?,?,?,?)'
    pool.query(script,[userInfo.id, userInfo.userId, userInfo.date, userInfo.name], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeUserName = function (newName, idInfo) {
    const sql = 'UPDATE users_info SET name=? WHERE idUserInfo=?'
    pool.query(sql,[newName,idInfo], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.changeUserDate = function (newDate, idInfo) {
    const sql = 'UPDATE users_info SET date=? WHERE idUserInfo=?'
    pool.query(sql,[newDate,idInfo], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

