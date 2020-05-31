const schedule = require('../models/Schedule')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");


test('should return wednesday first class: Math', () =>
    schedule.getSchedule(1, function (info, err) {
        console.log(info)
        expect(info.wednesday, 'Math')
    }),
)