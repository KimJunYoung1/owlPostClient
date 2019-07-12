import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Footer,
  FooterTab,
  Button
} from "native-base";

import { StyleSheet, TextInput } from "react-native";

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
  toptext: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "3%",
    marginTop: "3%"
  },
  lettertext: {
    fontSize: 20,
    marginLeft: "3%",
    marginTop: "7%"
  },
  footer: {
    backgroundColor: "black"
  }
});
export default class Send extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container
      // 닉네임에 get 요청 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
      >
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>
        <Text style={styles.toptext}>To. 'NickName'</Text>
        <TextInput
          style={styles.lettertext}
          editable={true}
          maxLength={400}
          multiline={true}
        />
        <Container>
          <Text>----------------------------------</Text>
        </Container>
        <Footer>
          <FooterTab>
            <Button
              style={styles.footer}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text>Main</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

//가로 22 세로 18
