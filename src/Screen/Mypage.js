import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Footer,
  FooterTab,
  Button
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
  maintext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "50%"
  },
  footer: {
    backgroundColor: "black"
  }
});
export default class Mypage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>
        <Text style={styles.maintext}>this is Mypage</Text>
        <Container>
          <Text>my page(fetch get some info)</Text>
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
