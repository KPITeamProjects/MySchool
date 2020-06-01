const pool = require("../config/Connection").pool
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

    pool.execute(script, [role.id,role.position])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Get role from data base.
 * @return callback function
 */
module.exports.getRole = function(id, callback){

    pool.execute('SELECT * FROM  roles WHERE idRole=?', [id])
        .then(result =>{
            callback(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Edit user position in data base.
 * @return void
 */
module.exports.editPosition = function(position, id){
    const script = 'UPDATE roles SET post=? WHERE idRole=?'

    pool.execute(script, [position, id])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Delete user role from data base.
 * @return void
 */
module.exports.deleteRole = function (id) {
    const sql = 'DELETE FROM roles WHERE idRole=?'

    pool.execute(sql, [id])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}