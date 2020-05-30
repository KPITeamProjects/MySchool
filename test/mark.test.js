const mark = require('../models/Mark')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");

test('should return mark value for user1: 9', () =>
    mark.getAllMarksOfStudent(1, function (info, err) {
        expect(info.value, 9)
    }),
)

test('should return note for course by courseId: have some troubles', () =>
    mark.getAllMarksOfByCourse(1, function (info, err) {
        expect(info.notes, 'have some troubles')
    }),
)