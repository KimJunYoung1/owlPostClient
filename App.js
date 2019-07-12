import React, { Component } from "react";
import { View, Text } from "native-base";
import Signup from "./src/Screen/Signup";
import SignIn from "./src/Screen/SignIn";
import Home from "./src/Screen/Home";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import NaviApp from "./src/Screen/NaviApp";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      logInStatus: false, // using for seperate TH(false) / HS(true)
      navigation: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({
      loading: false
    });
  }

  navToSignUp() {
    this.setState({
      navigation: true
    });
  }

  render() {
    const { logInStatus } = this.state;
    const navToSignUp = this.navToSignUp;
    if (this.state.loading) {
      return <AppLoading />;
    }

    return logInStatus === false ? (
      this.state.navigation ? (
        <Signup />
      ) : (
        <SignIn navToSignUp={navToSignUp.bind(this)} />
      )
    ) : (
      <Home />
    );
  }
}
