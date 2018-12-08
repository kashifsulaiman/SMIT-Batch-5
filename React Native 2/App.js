import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Navigator from './navigation/AppNavigator';
import { Accelerometer, Contacts, Permissions } from 'expo'

export default class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
      movement: 0,
      jump: false
    }
  }

  componentDidMount() {
    Accelerometer.addListener(item => {
      this.setState({
        movement: item.x * -300
      })
    })

    this.getContacts()
  }

  jump() {
    this.setState({
      jump: true
    })

    setTimeout(() => {
      this.setState({jump: false})
    }, 1500)
  }

  async getContacts() {
    const { status } = await Permissions.getAsync(Permissions.CONTACTS);
    
    if (status !== 'granted') {
      alert('Hey! You might want to enable notifications for my app, they are good.');
    }
    const { data } = await Contacts.getContactsAsync({
      fields: [
        Contacts.PHONE_NUMBERS,
        Contacts.EMAILS,
      ]
    })
    alert('data ' + data.length)
    if (data.length > 0) {
      const contact = data[0];
      console.log(contact);
    }
  }

  render() {
    const { jump, movement } = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, position: 'absolute', top: 60}}>
          <Image source={require("./assets/bg.jpg")} />
        </View>
        <View style={{flex: 1, position: 'absolute', top: jump ? 70 : 150, left: movement}}>
          <Text>Here's the RYU</Text>
          {
            !jump ? 
            <TouchableOpacity onPress={() => this.jump()}>
              <Image 
                source={require("./assets/ryu-fwd.gif")} />
              <Image 
                source={require("./assets/spidey-walk1.gif")} />
              <Image 
                source={require("./assets/subzero-mk3-walk.gif")} />
            </TouchableOpacity>
          :
          <View>
          <Image 
            source={require("./assets/ryu-jump.gif")} />
          <Image 
                source={require("./assets/spider-sting.gif")} />
          <Image 
                source={require("./assets/subzero-mk3-hado.gif")} />      
          </View>      
          }
        </View>
      </View>
    );
  }
}
