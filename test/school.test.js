const school = require('../models/School')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");


test('should return school id 1 info: Kurenivka', () =>
    school.getSchool(1, function (info, err) {
        console.log(info)
        expect(info.info, 'Kurenivka')
    }),
)