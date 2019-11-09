import React, {Component} from "react";
import axios from 'axios';

class EditList extends Component {
    constructor (props) {
        super (props);
        this.state = {
            description: '',
            responsible: '',
            priority: '',
            completed: false
        }
    }
//Write methods here
componentDidMount() {
    axios.get('/todos/' + this.props.match.params.id)
    .then((response) => {
        console.log(response.data)
        const todoItem = response.data
        this.setState({
            description: todoItem.Description,
            responsible: todoItem.Responsible,
            priority: todoItem.Priority,
            completed: false
        })
    }).catch(err => {console.log("Application Error: " + err)})
}

    render() {
        return (
            <div>
                <h2>Edit Task</h2>
                <form onSubmit={}>
                    <div>
                        <label>Description:</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditList;