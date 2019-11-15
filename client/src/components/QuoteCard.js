import React, {Component} from 'react';
import '../index.css';

class Card extends Component {
    constructor (props) {
        super (props);

        this.state = {
            Quote: "",
            Author: ""
        }

    }

    componentDidMount() {
        const quotes = [
            {quote: 'You miss 100% of the shots you dont take.', author: 'Wayne Gretzky'},
            {quote: 'If you cannot do great things, do small things in a great way.', author: 'Napoleon Hill'},
            {quote: 'If not us, who? If not now, when?.', author: 'Hillel the Elder'},
            {quote: 'He that is good for making excuses, is seldom good for anything else.', author: 'Benjamin Franklin'},
            {quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.', author: 'Aristotle'},
            {quote: 'If you spend too much time thinking about a thing, you will never get it done.', author: 'Bruce Lee'},
            {quote: 'You cannot build a reputation on what you are going to do.', author: 'Henry Ford'},
            {quote: 'Make a list. Do the list. Win today.', author: 'Andy Frisella'}
    ];

    const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    console.log(randomQuote);
    this.setState({
        Quote: randomQuote.quote,
        Author: randomQuote.author
    })
    }


    render() {
        return (
            <div className="card mt-5 quote-card mx-auto border-0 m-5 fixed-bottom">
  <div className="card-header bg-dark text-light">
    Get Inspired
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
        <p className="quote">{this.state.Quote}</p>
        <footer className="blockquote-footer">{this.state.Author}</footer>
    </blockquote>
  </div>
</div>
        )
    }

}

export default Card;