const connection = require("../config/Connection").connection

module.exports = class School {

    constructor(id, info, name, libraryId) {
        this.id = id;
        this.info = info;
        this.name = name;
        this.libraryId = libraryId;
    }
}


module.exports.addSchool = function (school) {

    const sql = `INSERT INTO school(idschool, info, name,library_idlibrary, emablem) VALUES(?,?,?,?,?)`;
    connection.query(sql,[school.id,school.info,school.libraryId,null], function(err, results) {
        if(err) throw err;
        console.log(results);
    });
}

module.exports.getSchool = function (id, callback) {

    connection.query('SELECT * FROM school WHERE idschool=?',id, function(err, results){
        callback(results,err)
    });
}