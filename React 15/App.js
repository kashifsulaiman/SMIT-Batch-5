/* eslint-disable no-undef */

import React, { Component } from 'react';
import './App.css';
import Judge from './Components/Judge/Judge'
import Kid from './Components/Kid/Kid'
import store from './Redux/store'
import { Provider } from 'react-redux'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      coords: {}
    };

  }

  render() {
    return(
      <Provider store={store}>
          <div><Judge />
          <Kid /></div>
      </Provider>
   )
 }

}

export default App;