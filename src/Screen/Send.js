import React, { Component } from "react";
import { Container, Text } from "native-base";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maintext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "50%"
  }
});
export default class Send extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.maintext}>this is Send</Text>
      </Container>
    );
  }
}
