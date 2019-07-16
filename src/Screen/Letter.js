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
  },
  to: {
    textAlign: "left",
    fontSize: 20,
    marginTop: "5%"
  },
  letter: {
    textAlign: "center"
  },
  from: {
    textAlign: "right",
    fontSize: 20,
    marginBottom: "5%",
    marginRight: "3%"
  },
  time: {
    textAlign: "left",
    marginLeft: "5%",
    marginBottom: "0%"
  }
});

export default class Letter extends Component {
  constructor(props) {
    super(props); // --> slice 안 한 편지 통째로 내용을 받음.

    this.state = {
      ele: this.props.navigation.state.params.ele
    };
  }
  render() {
    const { navigation } = this.props;
    const { ele } = this.state;
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>
        <Text style={styles.to}> To. {ele.to} </Text>
        <Body>
          <Text>{ele.messages}</Text>
        </Body>
        <Text style={styles.time}>{ele.time}</Text>
        <Text style={styles.from}>From. {ele.from} </Text>
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
