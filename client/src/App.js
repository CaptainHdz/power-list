import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="container">
      <h1>MERN APP IN PROGRESS</h1>
    </div>
    <Route path="/" exact component={List} />
    <Route path="/edit/:id" component={EditList} />
    <Route path="/create" component={Create} />

    </Router>
  );
}

export default App;
