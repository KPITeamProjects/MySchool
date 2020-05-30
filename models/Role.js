const connection = require("../config/Connection").connection
/** Class representing a role. */
module.exports = class Role{
    /**
     * Create a role.
     * @param {number} id - The id value.
     * @param {number} position - The position value.
     */
    constructor(id, position) {
        this.id = id;
        this.position = position;
    }
}
/**
 * Add role to data base.
 * @return void
 */
module.exports.addRole = function (role) {
    const script = 'INSERT INTO roles(idRole, post) VALUES(?,?)'
    connection.query(script,[role.id,role.position], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Get role from data base.
 * @return callback function
 */
module.exports.getRole = function(id, callback){
    connection.query('SELECT * FROM  roles WHERE courseId=?',courseId,function(err, results){
        callback(results[0], err)
    });
}
/**
 * Edit user position in data base.
 * @return void
 */
module.exports.editPosition = function(position, id){
    const script = 'UPDATE roles SET post=? WHERE idRole=?'
    connection.query(script,[position, id], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Delete user role from data base.
 * @return void
 */
module.exports.deleteRole = function (id) {
    const sql = 'DELETE FROM roles WHERE idRole=?'
    connection.query(sql,id, function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}