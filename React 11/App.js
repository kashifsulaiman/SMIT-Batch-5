import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './config/router'

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "angular",
      result: {}
    }

  }

  render() {
    return (
      <div className="App">
        <h1>This is header!</h1>
        <Routes />
        <h1>This is footer!</h1>
      </div>
    );
  }
}

export default App;