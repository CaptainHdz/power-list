import React, {Component} from "react";

class Create extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            description: "",
            responsible: "",
            priority: "",
            completed: false
    
        }
    }

onChangeDescription(e) {
    this.setState({
        description: e.target.value
    });
}

onChangeResponsible(e) {
    this.setState({
        responsible: e.target.value
    });
}

onChangePriority(e) {
    this.setState({
        priority: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();
    console.log("Hey it works!")
    this.setState({
        description: "",
            responsible: "",
            priority: "",
            completed: false
    })
}


    render() {
        return (
            <div>
                <h2>CREATE COMPONENT</h2>
            </div>
        )
    }
}

export default Create;