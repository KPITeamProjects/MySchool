const connection = require("../config/Connection").connection
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
    connection.query(sql,[school.id,school.info,school.libraryId,null], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}
/**
 * Get school from data base.
 * @return callback function
 */
module.exports.getSchool = function (id, callback) {

    connection.query('SELECT * FROM school WHERE idschool=?',id, function(err, results){
        callback(results,err)
    });
}