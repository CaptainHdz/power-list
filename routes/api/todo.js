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

//More production code for routes
router.use(function(req, res) {
    res.sendFile( path.join(__dirname, '../client/build/index.html'));
  });

module.exports = router;

