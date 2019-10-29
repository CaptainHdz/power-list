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
    .then((response)=> console.log(response))
}
    render() {
        return (
            <div>
                <h2>LIST COMPONENT</h2>
            </div>
        )
    }
}

export default List;