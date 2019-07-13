import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Footer,
  FooterTab,
  Button,
  Icon,
  Body,
  ListItem,
  List
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
    top: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  footer: {
    backgroundColor: "black"
  },
  owlsInfo: {
    fontSize: 18,
    top: "14%",
    textAlign: "center"
  },
  btns: {
    top: "20%"
  },
  btntext: {
    fontSize: 20,
    color: "white"
  },
  btn: {
    flex: 0.3,
    marginBottom: 15
  }
});

export default class Mypage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>

        <Text style={styles.maintext}>myOwls</Text>
        <Text style={styles.owlsInfo}>
          'NickName' 님으로 부터 받은 편지 : 0 통{" "}
        </Text>
        <Text style={styles.owlsInfo}>'NickName' 님에게 보낸 편지 : 0 통 </Text>

        <Body style={styles.btns}>
          <List>
            <Button rounded dark style={styles.btn}>
              <Text style={styles.btntext}>관계 끊기</Text>
            </Button>
            <Button rounded dark style={styles.btn}>
              <Text style={styles.btntext}>신고/차단</Text>
            </Button>
            <Button
              rounded
              dark
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.btn}
            >
              <Text style={styles.btntext}>LOG OUT</Text>
            </Button>
            <Button rounded dark style={styles.btn}>
              <Text style={styles.btntext}>회원 탈퇴</Text>
            </Button>
          </List>
        </Body>
        <Footer>
          <FooterTab>
            <Button
              style={styles.footer}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{ fontSize: 15 }}>메인화면으로 이동</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
