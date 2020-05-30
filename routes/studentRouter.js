const express = require("express");
const studentController = require("../Controllers/studentController");
const studentRouter = express.Router();

studentRouter.get('/', studentController.fillInfo)
studentRouter.get('/tasks', studentController.fillTasks)
studentRouter.get('/schedule', studentController.getSchedule)
module.exports = studentRouter;
