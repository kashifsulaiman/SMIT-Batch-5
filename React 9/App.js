import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container'
import Login from './screens/Login/Login'
import Dashboard from './screens/Dashboard/Dashboard'
import QuizForm from './screens/AddForm/AddForm'
import axios from 'axios'
import COLORS from './helpers'
import {getData} from './api/hackerNews'
//alias

console.log('COLORS****', COLORS)

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 11000,
  headers: {'X-Custom-Header': 'foobar'}
});


class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "angular",
      result: {}
    }

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.search = this.search.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }    

  componentDidMount() {
    const { searchTerm } = this.state;
    
    this.search(searchTerm);
  }
  
  search(searchTerm) {
    this.getData();
  }
    

  render() {
    const {result} = this.state;

    console.log('result****', result);
    return (
      <div className="App">
        <input placeholder="Search here" onChange={e => this.search(e.target.value)}/>
        <h1>Result</h1>

        <ul>
          {result.hits && result.hits.length ? result.hits.map(item => {
            return <li>{item.title}</li>
          }) : <p>Oops! Not found! Search change karne ka bhaya!</p>}
        </ul>
      </div>
    );
  }
}

export default App;