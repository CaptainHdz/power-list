const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Todo = new Schema({
Description: {type: String, required: true},
Responsibility: {type: String, required: true},
Priority: {type: String, required: true},
Completed: {type: Boolean, requireed: true}

});

const TodoItem = mongoose.model('Todo', Todo)

module.exports = TodoItem;