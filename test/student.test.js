const student = require('../models/User')

let mysql = require('mysql');
const dbConfig = require("../config/db.config");

student.getUser(1, function (info,err) {
    console.log(info)
})

test('should return user2 id: 2', () =>
    student.getUser(2, function (info, err) {
        expect(info.id, 2)
    }),
)

test('should return user1 password: qwerty', () =>
    student.getUser(1, function (info, err) {
        expect(info.password, 'qwerty')
    }),
)

test('should return user1 info: 1', () =>
    student.getUser(1, function (info, err) {
        expect(info.info, 1)
    }),
)

test('should return user1 role: 1', () =>
    student.getUser(1, function (info, err) {
        expect(info.role, 1)
    }),
)

test('should return user3 class: NULL', () =>
    student.getUser(3, function (info, err) {
        expect(info.classId, NULL)
    }),
)

test('should return user2 email: bodya00735@gmail.com', () =>
    student.getUser(2, function (info, err) {
        expect(info.email, 'bodya00735@gmail.com')
    }),
)

test('should return user2 email: bodya00735@gmail.com', () =>
    student.getUser(2, function (info, err) {
        expect(info.email, 'bodya00735@gmail.com')
    }),
)

test('should return user1 photo: NULL', () =>
    student.getUser(1, function (info, err) {
        expect(info.photo, NULL)
    }),
)