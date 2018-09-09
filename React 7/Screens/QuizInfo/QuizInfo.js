import React, { Component } from 'react';

class QuizInfo extends Component {
  constructor() {
    super()
  }

  render(){
    const {quiz, onBack} = this.props;
    return(
      <div>
        <h1>{quiz.name}</h1>
        <h3>Total Questions {quiz.questions}</h3>
        <button onClick={onBack}>Back to Quiz List</button>
      </div>
      )
    }
    
}

export default QuizInfo;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.


