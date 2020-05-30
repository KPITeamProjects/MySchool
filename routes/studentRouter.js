const express = require("express");
const studentController = require("../Controllers/studentController");
const studentRouter = express.Router();

studentRouter.get('/:id/cabinet', studentController.fillInfo)
studentRouter.get('/:id/tasks', studentController.fillTasks)
studentRouter.get('/:id/schedule', studentController.getSchedule)
module.exports = studentRouter;
