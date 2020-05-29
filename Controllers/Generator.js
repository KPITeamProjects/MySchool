var controller = require('./DBController')


function generateId() {
    let id = ""
    for (let i = 0; i < 6; i++) {
        id += Math.floor(Math.random() * 10)
    }
    return (controller.DBController.checkForId(id)) ? id : this.generateId
}

module.exports.generateId = generateId;


