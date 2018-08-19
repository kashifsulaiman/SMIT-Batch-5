import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      condition: true
    }

  }

  updateTheState(y) {
    console.log('y**', y)
    this.setState({
      text: this.state.condition ? 'I Love Saylani' : 'Saylani meri jaan!',
      condition: !this.state.condition
    })
  }

  setSomething(x) {
    console.log(x, 'hello World')
    console.log(this);
  }

  renderHeader() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.text}</h1>
          <button onClick={() => this.updateTheState('&&&&&')}>Change the State</button>
      </header>
    )
  }

  renderBody() {
    return (
      <div>I'm body....</div>
    )
  }

  renderFooter() {
    return (
      <div>I'm footer....</div>
    )
  }

  render() {

    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}  
        <button onClick={this.setSomething.bind(this, '****')}>Click me!</button>      
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
