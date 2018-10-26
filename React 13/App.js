/* eslint-disable no-undef */
/* global google */
import React, { Component } from 'react';
import './App.css';
import firebase from './Config/firebase'
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer, withScriptjs } from "react-google-maps"

const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      coords: {}
    };

    this.login = this.login.bind(this);
    this.updateCoords = this.updateCoords.bind(this);
    this.getDirections = this.getDirections.bind(this);
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

  getDirections() {
    const DirectionsService = new google.maps.DirectionsService();
   
      DirectionsService.route({
        origin: new google.maps.LatLng(24.8812296, 67.0727269),
        destination: new google.maps.LatLng(24.8861479, 67.0595196),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          alert("Sorry! Can't calculate directions!")
        }
      });
  }

  render() {
    const {coords, directions} = this.state;
    
    return(
      <div>
        {/* <button onClick={this.login}>Login with facebook shareef!</button> */}
        <MyMapComponent 
          isMarkerShown 
          coords={coords}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=<API_KEY_HERE>&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          directions={directions}
          />

          <button onClick={this.getDirections}><h1>Get Directions</h1></button>
      </div>
   )
 }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: 24.8812296, lng: 67.0727269 }}
  >

  <Marker position={{ lat: 24.8812296, lng: 67.0727269 }} />
  <Marker position={{ lat: 24.8861479, lng: 67.0595196 }} />

  {props.directions && <DirectionsRenderer directions={props.directions} />}

  </GoogleMap>
))

export default App;
