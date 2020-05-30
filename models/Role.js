const connection = require("../config/Connection").connection

module.exports = class Role{

    constructor(id, position) {
        this.id = id;
        this.position = position;
    }
}

module.exports.addRole = function (role) {
    const script = 'INSERT INTO roles(idRole, post) VALUES(?,?)'
    connection.query(script,[role.id,role.position], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getRole = function(id, callback){
    connection.query('SELECT * FROM  roles WHERE courseId=?',courseId,function(err, results){
        callback(results[0], err)
    });
}

module.exports.editPosition = function(position, id){
    const script = 'UPDATE roles SET post=? WHERE idRole=?'
    connection.query(script,[position, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.deleteRole = function (id) {
    const sql = 'DELETE FROM roles WHERE idRole=?'
    connection.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}