import React, { Component } from 'react';
import Container from '../../components/Container/Container'
import '../../App.css';
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super();
    this.login = this.login.bind(this);
  }

  login() {
    this.props.location.state.fakeAuth.isAuthenticated = true
    this.props.history.push(`/dashboard`)
  }

  render() {
    const userId = "sdfjkalskdfjsak343";

    return (
      <div>
          <h1>Login</h1>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <Link to={{
            pathname: "/dashboard/abcd",
            search: "?firstLogin=true",
            state: {user: {name: 'xuz', age: 34}}
          }} >Go to Dashboard </Link>
          <button onClick={this.login}>LOGIN KARDUN?</button>
      </div>
    );
  }
}

export default Login;
