var controller = require('./DBController')


function generateId() {
    let id = ""
    for (let i = 0; i < 6; i++) {
        id += Math.floor(Math.random() * 10)
    }
    return id
}

module.exports.generateId = generateId;


