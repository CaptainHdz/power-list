const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

const Todo = require("./models/todo")

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todos";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MONGODB is now connected"))
.catch(err => console.log("MONGODB ERROR: " + err))


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})