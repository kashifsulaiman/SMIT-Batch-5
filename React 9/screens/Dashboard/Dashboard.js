import React, { Component } from 'react';
import Container from '../../components/Container/Container'
import '../../App.css';

class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      toggle: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        console.log(res);
    })
  }

  static getDerivedStateFromProps(props, state) {
    return {text: props.text}
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate', nextState.text);
    // if(nextState.text == "kashif") {
    //   return false
    // }
    // return false
    // return nextState.text = "kashif"
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(this.state.text == "kashif") {
      return {status: 'behtreen hogya!'}
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate****', snapshot)
  }

  componentWillUnmount() {
    console.log('unmount*****');
  }

  render() {
    const {text, toggle} = this.state;
    // console.log('render chala bhaya====>', text)

    return (
        <div>
          <button onClick={() => {this.setState({toggle: !toggle})}}>Toggle </button> 
          this is text from Parent Component: <b>{text}</b>
        </div>
    );
  }
}

export default Dashboard;
