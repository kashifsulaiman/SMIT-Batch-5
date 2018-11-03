import React, { Component } from 'react';
import { updateUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux'

class Judge extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateUser({name: 'kashif', age: 51})
  }

  render() {
    return (
      <div>
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
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Judge)