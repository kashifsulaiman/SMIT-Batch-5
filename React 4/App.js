import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './screens/Search/Search'

class App extends Component {

  renderHeader() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Search</h1>
      </header>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        <Search />
      </div>
    );
  }
}

export default App;
