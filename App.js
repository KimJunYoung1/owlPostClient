import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logInStatus: false
    };
  }
  render() {
    const { logInStatus } = this.state;
    return <View>{logInStatus === false ? <SignIn /> : <Home />}</View>;
  }
}
