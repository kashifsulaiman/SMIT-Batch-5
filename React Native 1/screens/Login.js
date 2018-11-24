// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation'

export default class Login extends React.Component {

  navigate() {

    // this.props.navigation.navigate("Dashboard")
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Dashboard' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={{ borderColor: 'blue', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>

        <Button 
        title="Sign In"
        color="#841584"
        onPress={this.navigate.bind(this)} />
      </View>
    );
  }
}

