import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Button, TouchableWithoutFeedback, Text } from 'react-native';
import { Notifications, Permissions } from 'expo'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      bottom: 220,
      mode: null
    }
  }

  async componentDidMount() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
  
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }
  
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
  
    console.log('token****', token);
  }

  render() {
    const { mode } = this.state;
    
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Sending notification
// fetch('https://exp.host/--/api/v2/push/send', {
// 	mode: 'no-cors',
//     method: 'POST',
//     headers: {
//     	"Accept":'application/json',
// 		"Content-Type": 'application/json'
//         },
// 	body: JSON.stringify({
//     to: "ExponentPushToken[<token here>]", body: "message here"
//   })
// });