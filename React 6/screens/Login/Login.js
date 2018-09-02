import React, { Component } from 'react';
import '../../App.css';

class Login extends Component {
  constructor(props) {
    super();

    this.login = this.login.bind(this);
  }

  login() {
    // const {email, password} = this.state;
    // if(email === "admin@domain.com" && password === "admin") {
      this.props.jabLoginKare({email: 'admin', password: 'admin'})
    // }

  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <h1>Login</h1>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button onClick={this.login}>LOGIN KARDUN?</button>
      </div>
    );
  }
}

export default Login;
