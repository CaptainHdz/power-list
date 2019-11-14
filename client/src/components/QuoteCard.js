import React, {Component} from 'react';
import '../index.css';

class Card extends Component {
    constructor (props) {
        super (props);

        this.state = {
            Quote: ""
        }

    }

    componentDidMount() {
        console.log("THIS WORKS!!!")

    }


    render() {
        return (
            <div className="card mt-5 quote mx-auto">
  <div className="card-header">
    Get Inspired
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
        )
    }

}

export default Card;