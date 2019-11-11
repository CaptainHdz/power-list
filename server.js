const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todos";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log("MONGODB is now connected"))
.catch(err => console.log("MONGODB ERROR: " + err))


app.use("/todos", require("./routes/api/todo"))

//Production/deployment code 
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    app.use(express.static('client/build'));
  
    // Express will serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
//More production code for routes
  router.use(function(req, res) {
    res.sendFile( path.join(__dirname, '../client/build/index.html'));
  });


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})