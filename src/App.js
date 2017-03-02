import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import joinClasses from 'classnames';

const style = {
  first: {
    textAlign: 'center',
  },
  second: {
    header:'bg-light-blue',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px',
  },
  appIntro: {
    fontSize: 'large',
  },
}

const className = {
  header: 'bg-light-blue'
}

class App extends Component {
  render() {
    return (
      <div style={style.first}>
        <div style={style.second} className={className.header}>
          <img src={logo} style={style.appLogo} alt="logo" />
          <h2>Guess my doggie</h2>
        </div>
        <p style={style.appIntro} className="tc">
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
