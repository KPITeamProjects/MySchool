const student = require('../models/User')
let mysql = require('mysql');
const dbConfig = require("../config/db.config");

student.getUser(1, function (info,err) {
    console.log(info)
})

