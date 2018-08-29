import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './screens/Search/Search'

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      text: '',
      currentIndex: null
    }

    this.add = this.add.bind(this);
    this.updateText = this.updateText.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  updateText(e) {
    this.setState({text: e.target.value})
  }

  add() {
    const {text, todos} = this.state;
    todos.push(text);
    this.setState({todos, text: ''});
  }

  edit(index) {
    const {todos} = this.state;
    
    this.setState({text: todos[index], currentIndex: index})
  }

  delete(index) {
    const {todos} = this.state;
    todos.splice(index, 1);

    this.setState({todos, currentIndex: null});
  }

  cancel() {
    this.setState({text: '', currentIndex: null})
  }

  renderHeader() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Search</h1>
      </header>
    )
  }

  renderTodos() {
    const {todos} = this.state;

    return <ol>{todos.map((item, index) => {
      return <li>
        {item}
        <button onClick={this.edit.bind(this, index)}>Edit</button>
        <button onClick={this.delete.bind(this, index)}>Delete</button>
      </li>
    })}
  </ol>
  }

  render() {
    const {currentIndex} = this.state;

    return (
      <div className="App">
        {this.renderHeader()}
        <input 
          placeholder="Enter something"
          onChange={this.updateText}
          value={this.state.text}
          />
        {currentIndex == null ? 
          <button onClick={this.add}>Add</button>
          : 
          <div>
            <button onClick={() => {}}>Update</button>
            <button onClick={this.cancel}>Cancel</button>
          </div>
        }
        <br/>
        {currentIndex != null && <p>You editing item # {currentIndex + 1} currently!</p>}

        {this.renderTodos()}
      </div>
    );
  }
}

export default App;
