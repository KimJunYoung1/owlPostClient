import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Body,
  Input,
  Button,
  Footer,
  FooterTab,
  Icon
} from "native-base";
import { StyleSheet } from "react-native";

export default class SignIn extends Component {
  render() {
    return (
      <Container>
        <Body>
          <Content style={styles.texts}>
            <Text style={styles.text}>나만의 편지 배달부</Text>
            <Text style={styles.text}>owlPost</Text>
          </Content>
        </Body>
        <Content>
          <Content style={styles.signinInput}>
            <Input placeholder="e-mail" />
            <Input placeholder="password" />
          </Content>
          <Button block>
            <Text>Sign In</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button style={styles.signupbtn}>
              <Text style={styles.signup}>회원가입</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: 40
  },
  texts: {
    top: "50%"
  },
  signup: {
    textDecorationLine: "underline"
  },
  signupbtn: {
    backgroundColor: "black"
  },
  signinInput: {
    textAlign: "center"
  }
});
