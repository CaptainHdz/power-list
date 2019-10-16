//A bunch of packages we will need 
const mongoose = require("mongoose");
const TodoItem = require("../models/todo");

module.exports = {
    findAll: (req, res) => {
        //Some fnacy route code
        TodoItem.find((err, todos) => {
            if (err) {console.log("DB error: " + err)}
            else {console.log(todos)};
            res.json(todos)
        })
    },
    findId: (req, res) => {
        let id = req.params.id;
        TodoItem.findById(id, (err, todo) => {
            (err)? console.log(err) : console.log(todo);
            res.json(todo)
            
        })
    },
    Create: (req, res) => {
        //Some more fancy code 
    }
}