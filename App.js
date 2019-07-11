import React, { Component } from "react";
import { Container } from "native-base";
import SignIn from "./src/Screen/SignIn";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logInStatus: false
    };
  }
  render() {
    const { logInStatus } = this.state;
    return (
      <Container>
        <SignIn />
      </Container>
    );
  }
}
