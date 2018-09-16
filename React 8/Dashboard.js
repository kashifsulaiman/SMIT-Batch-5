import React, { Component } from 'react';
import Container from '../../components/Container/Container'
import '../../App.css';

class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      dashboardText: props.text,
      isShow: false
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        console.log(res);
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dashboardText: nextProps.text
    })
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    const {dashboardText, isShow} = this.state;

    return (
        <div>
          Ye State ka text hai --> {dashboardText} <br/>
          Ye Props ka text hai --> {this.props.text}

          <button onClick={() => {this.setState({isShow: !isShow})}}>Toggle</button>
        </div>
    );
  }
}

export default Dashboard;
