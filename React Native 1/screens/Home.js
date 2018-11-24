// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ borderColor: 'red', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button 
        title="Login"
        color="#841584"
        onPress={() => this.props.navigation.navigate("Login")} />
      </View>
    );
  }
}

