import React, { Component } from 'react';
import QuizList from './Screens/QuizList/QuizList'
import QuizInfo from './Screens/QuizInfo/QuizInfo'
import './App.css';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      quizzes: [
        {name: 'AngularJs', questions: 50},
        {name: 'React', questions: 30},
        {name: 'PWA', questions: 20},
        {name: 'HTML', questions: 50}
      ]
    };

    this.enterQuiz = this.enterQuiz.bind(this);
    this.showList = this.showList.bind(this);
  }

  enterQuiz(index) {
    const {quizzes} = this.state;
    this.setState({quiz: quizzes[index]});
  }

  showList() {
    this.setState({quiz: null});
  }

  render(){
    const {quizzes, quiz} = this.state;

    return(
      <div>
        {!quiz && <QuizList list={quizzes} onPress={this.enterQuiz}/>}
        {quiz && <QuizInfo quiz={quiz} onBack={this.showList}/>}
      </div>
      )
    }
    
}

export default App;