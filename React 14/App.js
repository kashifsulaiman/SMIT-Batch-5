/* eslint-disable no-undef */

import React, { Component } from 'react';
import './App.css';
import Judge from './Components/Judge/Judge'
import store from './Redux/store'

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
          <Judge />
      </Provider>
   )
 }

}

export default App;