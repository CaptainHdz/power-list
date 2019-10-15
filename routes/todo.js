const app = require("express");
const router = app.Router()
const mongoose = require("mongoose");

router.get("/", (req, res) => {
res.json("Hello there!")

})

module.exports = router;

