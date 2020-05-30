const user = require('../models/User')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");

user.getUser(1, function (info,err) {
    console.log(info)
})

test('should return user2 id: 2', () =>
    user.getUser(2, function (info, err) {
        expect(info.id, 2)
    }),
)

test('should return user1 password: qwerty', () =>
    user.getUser(1, function (info, err) {
        expect(info.password, 'qwerty')
    }),
)

test('should return user1 info: 1', () =>
    user.getUser(1, function (info, err) {
        expect(info.info, 1)
    }),
)

test('should return user1 role: 1', () =>
    user.getUser(1, function (info, err) {
        expect(info.role, 1)
    }),
)

test('should return user3 class: NULL', () =>
    user.getUser(3, function (info, err) {
        expect(info.classId, NULL)
    }),
)

test('should return user2 email: bodya00735@gmail.com', () =>
    user.getUser(2, function (info, err) {
        expect(info.email, 'bodya00735@gmail.com')
    }),
)

test('should return user2 email: bodya00735@gmail.com', () =>
    user.getUser(2, function (info, err) {
        expect(info.email, 'bodya00735@gmail.com')
    }),
)

test('should return user1 photo: NULL', () =>
    user.getUser(1, function (info, err) {
        expect(info.photo, NULL)
    }),
)