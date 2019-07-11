import React, { Component } from "react";
import {
  Text,
  Container,
  Header,
  Footer,
  FooterTab,
  Button
} from "native-base";
import { StyleSheet } from "react-native";
//import BotNavi from './botNavi';

const styles = StyleSheet.create({
  toplogo: {
    paddingTop: "1.4%",
    marginTop: "5.7%",
    backgroundColor: "black",
    borderRadius: 20
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
  subtext: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: 20
  },
  bottom: {}
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerText: "HELLO OWLS!"
      // 매칭 버튼을 누르면 메인 텍스트와 서브 텍스트를 변경한다.
      // 포스트 요청에 따라 푸시요청??
    };
  }

  render() {
    const { centerText } = this.state;
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>

        <Container>
          <Text style={styles.maintext}>{centerText}</Text>
          <Text style={styles.subtext}> 당신의 펜팔친구를 찾아보세요!</Text>
        </Container>

        <Footer>
          <FooterTab>
            <Button />
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
