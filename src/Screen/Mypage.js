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

import { StyleSheet, Alert } from "react-native";

import AwesomeAlert from "react-native-awesome-alerts";

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
    top: "10%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  footer: {
    backgroundColor: "black"
  },
  owlsInfo: {
    fontSize: 18,
    top: "15%",
    textAlign: "center"
  },
  btns: {
    top: "21%"
  },
  btntext: {
    fontSize: 20,
    color: "white"
  },
  btn: {
    flex: 0.3,
    marginBottom: "3.5%"
  }
});

export default class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partnerNickName: "2",
      sendLetters: 0,
      receiveLetters: 0
    };
  }
  componentDidMount() {
    //토큰 제출
    //fetch(TOKEN_API)
    //토큰인증을 통해 userinfo를 받아온뒤, 파트너 아이디의 여부에 따라 partnerNickName과 주고받은 편지의 수를 환산해서, setState를 해준다.
  }
  disConnect = () => {
    const { partnerNickName } = this.state;
    if (!partnerNickName) {
      Alert.alert("", "현재 파트너가 없어 이 기능을 사용할 수 없습니다.");
    } else {
      Alert.alert("", partnerNickName + " 님 과의 인연을 끊으시겠습니까?", [
        {
          text: "네",
          onPress: () => {
            Alert.alert(
              "",
              partnerNickName + " 님 과의 인연이 성공적으로 끊어졌습니다."
            );
            /*  fetch(DISCONNECT_API, {
              method:"POST",
              headers : TOKEN
            }).then(res=>{
              if(요청오면){
                this.setState({
                  partnerNickName: null,
                  sendLetters :  0,
                  receiveLetters : 0
                })
              }
            }); */
          }
        },
        { text: "아니오" }
      ]);
    }
  };
  addBlacklist = () => {
    const { navigation } = this.props;
    const { partnerNickName } = this.state;
    if (!partnerNickName) {
      Alert.alert("", "현재 파트너가 없어 이 기능을 사용할 수 없습니다.");
    } else {
      Alert.alert("", partnerNickName + " 님을 신고하시겠습니까?", [
        {
          text: "네",
          onPress: () => {
            navigation.navigate("AddBlackList");
          }
        },
        { text: "아니오" }
      ]);
    }
  };

  deleteInfoInService = () => {
    Alert.alert("", "회원탈퇴를 원하시나요?", [
      { text: "네" },
      { text: "아니오" }
    ]);
  };

  render() {
    const { navigation } = this.props;
    const { partnerNickName, sendLetters, receiveLetters } = this.state;
    const msg = [
      `${partnerNickName} 님으로 부터 받은 편지 : ${receiveLetters} 통\n\n${partnerNickName} 님에게 보낸 편지 : ${sendLetters} 통`,
      "현재 파트너가 없습니다."
    ];
    let connetMessage;
    if (!partnerNickName) {
      connetMessage = msg[1];
    } else {
      connetMessage = msg[0];
    }
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>

        <Text style={styles.maintext}>myOwls</Text>
        <Text style={styles.owlsInfo}>{connetMessage}</Text>
        <Body style={styles.btns}>
          <List>
            <Button rounded dark style={styles.btn} onPress={this.disConnect}>
              <Text style={styles.btntext}>관계 끊기</Text>
            </Button>
            <Button rounded dark style={styles.btn} onPress={this.addBlacklist}>
              <Text style={styles.btntext}>신고/차단</Text>
            </Button>
            <Button
              rounded
              dark
              onPress={() => {
                navigation.navigate("SignIn");
              }}
              style={styles.btn}
            >
              <Text style={styles.btntext}>LOG OUT</Text>
            </Button>
            <Button
              rounded
              dark
              style={styles.btn}
              onPress={this.deleteInfoInService}
            >
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
