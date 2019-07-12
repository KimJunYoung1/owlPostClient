import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Footer,
  FooterTab,
  Button,
  Icon,
  Body
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
    textAlign: "center"
  },
  footer: {
    backgroundColor: "black"
  },
  owlsInfo: {
    fontSize: 15,
    textAlign: "center"
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

        <Text style={styles.maintext}>내 부엉이 정보</Text>
        <Text style={styles.owlsInfo}>
          'NickName' 님으로 부터 받은 편지 : 0 통{" "}
        </Text>
        <Text style={styles.owlsInfo}>'NickName' 님에게 보낸 편지 : 0 통 </Text>

        <Body>
          <Container>
            <Button transparent>
              <Text>관계 끊기</Text>
            </Button>
            <Button transparent>
              <Text>신고 / 차단</Text>
            </Button>
            <Button transparent>
              <Text>LOG OUT</Text>
            </Button>
            <Button transparent>
              <Text>회원탈퇴</Text>
            </Button>
          </Container>
        </Body>
        <Footer>
          <FooterTab>
            <Button
              style={styles.footer}
              onPress={() => {
                navigation.navigate("Home");
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
