let generator = require('./Controllers/Generator')
let refactor = require('./workWithData/DbRefactor').Refactor
let user = require('./models/User')

let user_id = generator.generateId()
let user_info_id = generator.generateId()
let user_role_id = generator.generateId()
let class_id = generator.generateId()
let schedule_id = generator.generateId()

refactor.addUser(new user.User(user_id,user_info_id, user_role_id, class_id))




