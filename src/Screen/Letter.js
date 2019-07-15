import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Footer,
  FooterTab,
  Button,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail
} from "native-base";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  toplogo: {
    paddingTop: "1.4%",
    marginTop: "5.7%",
    backgroundColor: "black"
  },
  logotext: {
    paddingBottom: "3%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  footer: {
    backgroundColor: "black"
  }
});

export default class Letter extends Component {
  constructor(props) {
    super(props); // --> slice 안 한 편지 통째로 내용을 받음.
    this.state = {
      letters: this.props.navigation.state.params.letters
    };
  }
  render() {
    const { letters } = this.state;
    const { navigation } = this.props;
    //const { ??? } = this.props
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>

        <Text> {letters[0].from} </Text>

        <Container />
        <Footer>
          <FooterTab>
            <Button
              style={styles.footer}
              onPress={() => {
                navigation.navigate("Postbox");
              }}
            >
              <Text>Postbox</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
