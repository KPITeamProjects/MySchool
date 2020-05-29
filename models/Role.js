const pool = require("../config/Connection")

module.exports = class Role{

    constructor(id, position) {
        this.id = id;
        this.position = position;
    }
}

module.exports.addRole = function (role) {
    const script = 'INSERT INTO roles(idRole, post) VALUES(?,?)'
    pool.query(script,[role.id,role.position], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.editPosition = function(position, id){
    const script = 'UPDATE roles SET post=? WHERE idRole=?'
    pool.query(script,[position, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.deleteRole = function (id) {
    const sql = 'DELETE FROM roles WHERE idRole=?'
    pool.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}