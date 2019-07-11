import React, { Component } from "react";
import { View } from "native-base";
import Home from "./src/Screen/Home";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logInStatus: true
    };
  }
  render() {
    const { logInStatus } = this.state;
    return <Home />;
  }
}

//{logInStatus === false ? <SignIn /> : <Home />}
