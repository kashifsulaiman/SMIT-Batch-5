import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      text: 'hello world',
      number: 2
    }
  }
  
  updateTheState() {
    this.setState({
      text: 'hello Saylani',
      number: ++this.state.number
    })

  }

  render() {
    const name = "Kashif";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={() => this.updateTheState()} className="App-title">Welcome to {this.state.text}, Number ==> {this.state.number}</h1>
        </header>
      </div>
    );
  }
}

export default App;