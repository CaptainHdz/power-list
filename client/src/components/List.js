import React, {Component} from "react";
import axios from 'axios';
import TodoItem from '../components/TodoItem'
import '../index.css'

class List extends Component {
    
constructor (props) {
    super(props);
    this.state = {
        todos: []
    };
}
//The request grabs data from the db and sets them to the state
componentDidMount() {
    axios.get("/todos/")
    .then((response)=> {
        const listItemsArr = response.data;
        this.setState({
            todos: listItemsArr
        })
    }).catch((err) => console.log(err))
}

componentDidUpdate() {
    axios.get("/todos/")
    .then((response)=> {
        const listItemsArr = response.data;
        this.setState({
            todos: listItemsArr
        })
    }).catch((err) => console.log(err))
}
    render() {
        return (
            <div>
                <h2>WIN TODAY</h2>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Responsible</th>
                                <th>Priority</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todos => (
                                <TodoItem 
                                        id={todos._id}
                                        key={todos._id}
                                        description={todos.Description}
                                        responsible={todos.Responsible}
                                        priority={todos.Priority}
                                        completed={todos.Completed}
                                        />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default List;