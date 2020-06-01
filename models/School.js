const pool = require("../config/Connection").pool
/** Class representing a school. */
module.exports = class School {
    /**
     * Create a school.
     * @param {number} id - The id value.
     * @param {string} name - The school name value.
     * @param {string} info - The school info value.
     * @param {number} libraryId - The school libraryId value.
     */
    constructor(id, info, name, libraryId) {
        this.id = id;
        this.info = info;
        this.name = name;
        this.libraryId = libraryId;
    }
}

/**
 * Add school to data base.
 * @return void
 */
module.exports.addSchool = function (school) {

    const sql = `INSERT INTO school(idschool, info, name,library_idlibrary, emablem) VALUES(?,?,?,?,?)`;

    pool.execute(sql, [school.id,school.info,school.libraryId,null])
        .then(result =>{
            console.log(result[0]);
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Get school from data base.
 * @return callback function
 */
module.exports.getSchool = function (id, callback) {

    pool.execute('SELECT * FROM school WHERE idschool=?', [id])
        .then(result =>{
            callback(result[0]);
        })
        .catch(function(err) {
            console.log(err);
        });
}