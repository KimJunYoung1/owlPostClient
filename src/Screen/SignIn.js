import React, { Component } from "react";
import { Container, Content, Text, Body, Input, Button } from "native-base";

export default class SignIn extends Component {
  render() {
    return (
      <Container>
        <Body />
        <Text>owlPost</Text>
        <Content>
          <Input placeholder="e-mail" />
          <Input placeholder="password" />
          <Button>
            <Text>dsfds</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
