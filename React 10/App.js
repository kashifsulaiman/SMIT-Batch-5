import React, { Component } from 'react';
import './App.css';
import firebase from './Config/firebase'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      coords: null
    };

    this.login = this.login.bind(this);
    this.updateCoords = this.updateCoords.bind(this);
  }

  componentDidMount() {
    this.setPosition();
  }

  login() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      
    }).catch(function(error) {
      
    });
  }

  setPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({coords: position.coords})
    });
  }

  updateCoords({latitude, longitude}) {
    this.setState({coords: {latitude, longitude}})
  }

  render() {
    const {coords} = this.state;
    
    return(
      <div>
        {/* <button onClick={this.login}>Login with facebook shareef!</button> */}

        {coords && <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coords={coords}
          updateCoords={this.updateCoords}
        />}
      </div>
   )
 }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
    {props.isMarkerShown && 
    <Marker 
      position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
      draggable={true}
      onDragEnd={position => {
          props.updateCoords({latitude: position.latLng.lat(), longitude: position.latLng.lng()})
      }}
      />}
  </GoogleMap>
))

export default App;
