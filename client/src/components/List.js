import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class List extends Component {
    
constructor (props) {
    super(props);
    this.state = {
        todos: []
    };
}

componentDidMount() {
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
                <h2>LIST COMPONENT</h2>
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
                            {this.state.todos.map((todos) => {
                                console.log(todos)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default List;