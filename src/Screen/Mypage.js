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

import { StyleSheet, Alert, AsyncStorage } from "react-native";
import { SERVER_API } from "../api/API";

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
      nickname: null,
      partner_nickname: null,
      sendLetters: 0,
      receiveLetters: 0
    };
  }
  async componentDidMount() {
    //토큰 제출
    const token = await AsyncStorage.getItem("token");
    fetch(SERVER_API + "/check/mypage", {
      headers: { "x-access-token": token }
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status) {
          return;
        }
      })
      .then(json => {
        console.log(json);
        this.setState({
          nickname: json.nickname,
          partner_nickname: json.partner_nickname,
          sendLetters: json.fromData.length,
          receiveLetters: json.toData.length
        });
      })
      .catch(err => {
        console.log(err);
      });

    //토큰인증을 통해 userinfo를 받아온뒤, 파트너 아이디의 여부에 따라 partnerNickName과 주고받은 편지의 수를 환산해서, setState를 해준다.
  }
  disConnect = async () => {
    const { partner_nickname } = this.state;
    const token = await AsyncStorage.getItem("token");

    if (!partner_nickname) {
      Alert.alert("", "현재 파트너가 없어 이 기능을 사용할 수 없습니다.");
    } else {
      Alert.alert("", partner_nickname + " 님 과의 인연을 끊으시겠습니까?", [
        {
          text: "네",
          onPress: () => {
            fetch(SERVER_API + `/check/cutmatch`, {
              method: "PUT",
              //토큰을 보낸다. 토큰은 MyPage에서 props로 가져온다.
              headers: { "x-access-token": token }
            })
              .then(res => {
                if (res.status === 201) {
                  return res.json();
                } else if (res.status === 400) {
                  return res.json();
                }
              })
              .then(json =>
                Alert.alert("", json, [
                  {
                    text: "확인",
                    onPress: () => {
                      this.setState({
                        partner_nickname: null,
                        sendLetters: 0,
                        receiveLetters: 0
                      });
                    }
                  }
                ])
              )
              .catch(err => console.log(err));
          }
        },
        { text: "아니오" }
      ]);
    }
  };

  addBlacklist = () => {
    const { navigation } = this.props;
    const { partner_nickname } = this.state;
    if (!partner_nickname) {
      Alert.alert("", "현재 파트너가 없어 이 기능을 사용할 수 없습니다.");
    } else {
      Alert.alert("", partner_nickname + " 님을 신고하시겠습니까?", [
        {
          text: "네",
          onPress: () => {
            navigation.navigate("AddBlackList", {
              nickname: this.state.nickname
            });
          }
        },
        { text: "아니오" }
      ]);
    }
  };

  deleteInfoInService = () => {
    const { navigation } = this.props;
    Alert.alert("", "회원탈퇴를 원하시나요?", [
      {
        text: "네",
        onPress: () => {
          navigation.navigate("DeleteId");
        }
      },
      { text: "아니오" }
    ]);
  };

  render() {
    const { navigation } = this.props;
    const { partner_nickname, sendLetters, receiveLetters } = this.state;
    const msg = [
      `${partner_nickname} 님으로 부터 받은 편지 : ${receiveLetters} 통\n\n${partner_nickname} 님에게 보낸 편지 : ${sendLetters} 통`,
      "현재 파트너가 없습니다."
    ];
    let connetMessage;
    if (!partner_nickname) {
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
                Alert.alert("", "로그아웃하시겠습니까?", [
                  {
                    text: "네",
                    onPress: () => {
                      AsyncStorage.clear();
                      navigation.navigate("SignIn");
                    }
                  },
                  { text: "아니오" }
                ]);
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
