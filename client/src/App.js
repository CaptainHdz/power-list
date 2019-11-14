import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Create from "./components/Create";
import EditList from "./components/EditList";
import List from "./components/List";
import Card from './components/QuoteCard';
function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <a className="navbar-brand" href="https://captainhdz.github.io/portfolioV3/" target="/blank">Power List</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">List</Link>   
      </li>

      <li className="nav-item">
      <Link to="/create" className="nav-link">Create</Link>   
      </li> 
    </ul>
  </div>
</nav>

    <div className="container"> 
    <Route path="/" exact component={List} />
    <Route path="/edit/:id" component={EditList} />
    <Route path="/create" component={Create} />
    </div>

    <Card/>
      </div>
  
    </Router>
  );
}

export default App;
