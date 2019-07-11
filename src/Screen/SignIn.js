import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Body,
  Input,
  Button,
  Bottom
} from "native-base";

export default class SignIn extends Component {
  render() {
    return (
      <Container>
        <Body />
        <Text>당신의 편지를 배달해드립니다</Text>
        <Text>owlPost</Text>
        <Content>
          <Input placeholder="e-mail" />
          <Input placeholder="password" />
          <Button>
            <Text>Sign In</Text>
          </Button>
        </Content>

        <Button>
          <Text>Sign up</Text>
        </Button>
      </Container>
    );
  }
}
