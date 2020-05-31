const form = require('../models/Class')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");


test('should return class id 1 name: 7-В', () =>
    form.getClass(1, function (info, err) {
        console.log(info)
        expect(info.name, '7-В')
    }),
)