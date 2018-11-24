// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";

export default class DashboardScreen extends React.Component {
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Dashboard Screen</Text>
      </View>
    );
  }
}

