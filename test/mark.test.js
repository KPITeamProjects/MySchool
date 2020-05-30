const mark = require('../models/Mark')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");


test('should return all marks for user1: 9, 11', () =>
    mark.getAllMarksOfStudent(1, function (info, err) {
        console.log(info)
        expect(info.value, 9, 11)
    }),
)

test('should return note for course by courseId: have some troubles', () =>
    mark.getAllMarksOfByCourse(1, function (info, err) {
        expect(info.notes, 'have some troubles')
    }),
)