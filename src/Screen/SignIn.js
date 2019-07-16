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
import { StyleSheet, Alert, AsyncStorage } from "react-native";
import { SERVER_API } from "../api/API";

// if (statuscode === 200) {
//   //이때 토큰을 받아서 저장한다.
//   this.props.navigation.navigate("Home"); // ==> 홈 화면 으로
// } else if (statuscode === 201) {
//   Alert.alert("등록되지 않은 정보입니다.");
//}
export default class SignIn extends Component {
  logInGetRequest() {
    const email = this.email._root._lastNativeText;
    const password = this.password._root._lastNativeText;
    const { navigation } = this.props;
    //TODO : 인풋창의 값을 받아와서 객체 형태로 만들어주기
    if (email && password) {
      //console.log(process.env.SERVER_URL);
      //TODO : 서버에 회원인지 아닌지 확인 요청(GET)을 하기
      //console.log(LOGIN_API);
      fetch(SERVER_API + `/user/signin?email=${email}&password=${password}`)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 400) {
            Alert.alert("", "등록되지 않은 정보 입니다.");
          }
        })
        .then(async json => {
          //Asyncstorage에 토큰 저장
          //console.log(json.token);
          AsyncStorage.setItem("token", json.token);
          //홈화면으로 이동
          navigation.navigate("Home");
        });
    } else {
      alert("아이디와 패스워드를 정확히 입력하세요");
    }
  }

  render() {
    const { navigation } = this.props;

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
            <Input
              placeholder="e-mail"
              ref={ref => {
                this.email = ref;
              }}
            />
            <Input
              placeholder="password"
              ref={ref => {
                this.password = ref;
              }}
              secureTextEntry={true}
            />
          </Content>
          <Button block onPress={this.logInGetRequest.bind(this)}>
            <Text>Sign In</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              style={styles.signupbtn}
              onPress={() => navigation.navigate("Signup")}
            >
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
