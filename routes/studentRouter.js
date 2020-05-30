const express = require("express");
const studentController = require("../Controllers/studentController");
const studentRouter = express.Router();

studentRouter.get('/:id/cabinet', studentController.fillInfo)