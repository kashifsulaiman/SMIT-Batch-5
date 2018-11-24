import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/AppNavigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Navigator />
      </View>
    );
  }
}
