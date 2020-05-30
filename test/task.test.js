const task = require('../models/Task')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");

test('should return taskId for user1: 1', () =>
    task.getTasksForStudent(1, function (info, err) {
        expect(info.id, 1)
    }),
)

test('should return course name by courseId: programming', () =>
    task.getAllTasksByCourse(1, function (info, err) {
        expect(info.info, 'programming')
    }),
)