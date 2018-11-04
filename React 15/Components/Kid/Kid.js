import React from 'react';
import { connect } from 'react-redux'

class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
 }

 componentWillReceiveProps(nextProps) {
  console.log('nextProps KIDS.js ==>', nextProps.user);
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
    
  }
}
 

Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

export default connect(mapStateToProps, mapDispatchToProps)(Kid)