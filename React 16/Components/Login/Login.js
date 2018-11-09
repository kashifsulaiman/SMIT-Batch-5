import React, { Component } from 'react';
import { updateUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this)
  }

  signIn() {
    const res = {name: 'Kashif', id: '231321', beverages: ['coffee']}

    this.props.updateUser(res)
  }

  render() {
    return (
      <div>
          <h1>Login</h1>
          <button onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
 }

const mapStateToProps = (state) => {
    return {
        user: state.authReducers.user
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)