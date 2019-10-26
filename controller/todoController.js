//A bunch of packages we will need 
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
    create: (req, res) => {
        //Some more fancy code 
        TodoItem.create(req.body)
        .then((response) => {
            res.json(response);
        }).catch( err => res.status(422).json(err));
    },
    update: (req, res) => {
        TodoItem.findOneAndUpdate({_id: req.params.id }, req.body, (response) => {
            res.json("Updated Successfully")
        })
        .catch( err => res.status(422).json(err));
    },
    delete: (req, res) => {
        TodoItem.findByIdAndDelete(req.params.id)
        .then((response) => {
            res.json(response)
        }).catch(err => res.status(422).json(err));

    }
}