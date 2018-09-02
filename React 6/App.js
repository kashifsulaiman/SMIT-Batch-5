import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './screens/Login/Login'
import Dashboard from './screens/Dashboard/Dashboard'
import AddForm from './screens/AddForm/AddForm'

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: false
    }

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(user) {
    console.log('user jo login hua==>?', user);
    this.setState({user: true});
  }

  render() {
    const {user} = this.state;

    return (
      <div className="App">
        {!user && <Login text="hello world" jabLoginKare={this.onLogin}/>}
        {user && <Dashboard />}
        {/* <AddForm /> */}
      </div>
    );
  }
}

export default App;