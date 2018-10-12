import React, { Component } from 'react';
import './App.css';
import firebase from './Config/firebase'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      coords: {}
    };

  }

  componentDidMount() {
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   console.log('token****', token)
    //   console.log('user****', user)
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
    this.setPosition();
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
        {coords.latitude && <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coords={coords}
          updateCoords={this.updateCoords.bind(this)}
          />}
      </div>
   )
 }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
    {props.isMarkerShown && <Marker 
    position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
    draggable={true}
    onDragEnd={pos => {
      props.updateCoords({latitude: pos.latLng.lat(), longitude: pos.latLng.lng()})
    }}
    />}
  </GoogleMap>
))
export default App;