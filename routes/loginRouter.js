var express = require('express');
var loginRouter = express.Router();
var loginController = require('../Controllers/loginController')


loginRouter.get('/', loginController.login);
loginRouter.get('/register', loginController.register)
loginRouter.post('/auth', loginController.checkForUser)
module.exports = loginRouter;


