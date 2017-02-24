import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header bg-light-blue">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Guess my doggie</h2>
        </div>
        <p className="App-intro tc">
          To get started, click
          <a className="bg-light-purple white db pa3">
            <Link to={`/doggo`}>start</Link>
          </a>
        </p>
      </div>
    );
  }
}

export default App;
