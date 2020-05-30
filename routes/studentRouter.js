const express = require("express");
const studentController = require("../Controllers/studentController");
const studentRouter = express.Router();

studentRouter.get('/cabinet/:id', studentController.fillInfo)
studentRouter.get('/:id/tasks', studentController.fillTasks)
studentRouter.get('/:id/schedule', studentController.getSchedule)
module.exports = studentRouter;
