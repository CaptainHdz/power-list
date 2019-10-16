const express = require("express");

const router = express.Router()
const mongoose = require("mongoose");
const todoController = require("../controller/todoController");

router.route("/")
.get(todoController.findAll)
.post(todoController.Create);

router.route("/Create")

module.exports = router;

