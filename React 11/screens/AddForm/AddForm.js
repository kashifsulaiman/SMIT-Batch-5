import React, { Component } from 'react';
import '../../App.css';

class AddForm extends Component {
  constructor(props) {
    super();

    this.state = {
      quiz: props.currentQuiz
    }
  }

  render() {
    const {quiz} = this.state;
    console.log('quiz***', quiz);
    return (
      <div >
        <h1>Add Form</h1>
      </div>
    );
  }
}

export default AddForm;
