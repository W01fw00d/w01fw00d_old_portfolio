import React, { Component } from 'react';
import Programmer from './Programmer';
import logo from '../assets/logo.svg';
import avatar from '../assets/avatar.png';
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={avatar} className="App-logo" alt="logo" />
            <h1>Portfolio</h1>
            <Programmer/>
        </div>
      </div>
    );
  }
}

export default App;
