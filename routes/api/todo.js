const express = require("express");

const router = express.Router()
const todoController = require("../../controller/todoController");

router.route("/")
.get(todoController.findAll)
.post(todoController.create);

router.route("/:id")
.get(todoController.findId);

router.route("/add")
.post(todoController.create);

router.route("/update/:id")
.post(todoController.update);

router.route("/delete/:id")
.delete(todoController.delete);

module.exports = router;

