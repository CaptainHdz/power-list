import React, {Component} from "react";
import axios from 'axios';

class EditList extends Component {
    constructor (props) {
        super (props);

this.onChangeDescription = this.onChangeDescription.bind(this);
this.onChangeResponsible = this.onChangeResponsible.bind(this);
this.onChangePriority = this.onChangePriority.bind(this);
this.onChangeCompleted = this.onChangeCompleted.bind(this);
this.onSubmit = this.onSubmit.bind(this);
this.deleteTask = this.deleteTask.bind(this)

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
            completed: todoItem.Completed
        })
    }).catch(err => {console.log("Application Error: " + err)})
}

onChangeDescription(e) {
    this.setState({
        description: e.target.value
    })
};

onChangeResponsible(e) {
    this.setState({
        responsible: e.target.value
    })
};

onChangePriority(e) {
    this.setState({
        priority: e.target.value
    })
};

onChangeCompleted(e) {
    this.setState({
        completed: !this.state.completed
    })
};

onSubmit(e) {
    e.preventDefault()
    const updatedTodo = {
        Description: this.state.description,
        Responsible: this.state.responsible,
        Priority: this.state.priority,
        Completed: this.state.completed
    };

    axios.post("/todos/update/" + this.props.match.params.id, updatedTodo)
    .then((response) => {
        console.log(response)
        this.props.history.push('/')
    })
}
deleteTask(e) {
    e.preventDefault()

    axios.delete("/todos/delete/" + this.props.match.params.id)
    .then((response) => {
        console.log(response)
        this.props.history.push('/')
    })
};

    render() {
        return (
            <div>
                <h2>Edit Task</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}/>
                    </div>

                    <div className="form-group">
                        <label>Responsible:</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.responsible}
                                onChange={this.onChangeResponsible}/>
                    </div>

                    <div className="form-group" >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.priority === "Low"}
                                   onChange={this.onChangePriority}
                                   />
                                   <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.priority === "Medium"}
                                   onChange={this.onChangePriority}
                                   />
                                   <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.priority === "High"}
                                   onChange={this.onChangePriority}
                                   />
                                   <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeCompleted}
                                    checked={this.state.completed}
                                    value={this.state.completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Task" className="btn btn-primary"/>
                        </div>
                        <div className="form-group">
                            <input type="button" onClick={this.deleteTask} value="Delete Task" className="btn btn-danger"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditList;