import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import * as Screens from '../screens'

const Routes = () => (
    <Router>
      <div>
        <Route exact path="/" component={Screens.Login} />
        <PrivateRoute path="/dashboard" component={Screens.Dashboard} />
        <Route path="/addForm" component={Screens.AddForm} />
      </div>  
    </Router>
);

const fakeAuth = {
    isAuthenticated: false,
};

const AuthButton = withRouter(
    ({ history }) =>
      fakeAuth.isAuthenticated ? (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <p>You are not logged in.</p>
      )
  );

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location, fakeAuth }
          }}
        />
      )
    }
  />
)};

export default Routes;