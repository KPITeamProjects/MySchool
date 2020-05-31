const userinfo = require('../models/UserInfo')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");


test('should return user1 name: super user 1', () =>
    userinfo.getUserInfo(1, function (info, err) {
        console.log(info)
        expect(info.name, 'super user 1')
    }),
)