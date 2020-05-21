var controller = require('./DBController')


const generateId = function() {
    let id = ""
    for (let i = 0; i < 6; i++) {
        id += Math.floor(Math.random() * 10)
    }
    return (new controller.DBController.checkForId(id)) ? id : this.generateId
};

module.exports.generateId = generateId;


