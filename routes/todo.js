const app = require("express");
const router = app.Router()
const mongoose = require("mongoose");
const todoController = require("../controller/todoController");

router.route("/")
.get(todoController.findAll)
.post(todoController.Create);

module.exports = router;

