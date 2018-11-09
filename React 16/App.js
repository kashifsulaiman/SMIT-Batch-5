/* eslint-disable no-undef */

import React, { Component } from 'react';
import './App.css';
import Judge from './Components/Judge/Judge'
import Kid from './Components/Kid/Kid'
import Login from './Components/Login/Login'
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

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
          <PersistGate loading={null} persistor={persistor}>
              <div>
                <Login />
              </div>
          </PersistGate>
      </Provider>
   )
 }

}

export default App;