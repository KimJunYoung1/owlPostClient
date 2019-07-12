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
import { StyleSheet } from "react-native";

export default class SignIn extends Component {
  logInGetRequest() {
    const email = this.email._root._lastNativeText;
    const password = this.password._root._lastNativeText;
    //TODO : 인풋창의 값을 받아와서 객체 형태로 만들어주기
    if (email && password) {
      const logInData = {
        email: email,
        password: password
      };
      console.log(logInData);
      alert("등록되지 않은 정보 입니다.");

      this.props.navigation.navigate("Home");
      //TODO : 서버에 회원인지 아닌지 확인 요청(GET)을 하기
      /*fetch(LOGINAPI, {
        method: "GET",
        body: JSON.stringify(logInData),
        headers: { "Contents-Type": "application/json" }
      }).then(res => {
        if (statuscode === 200) {   // ==> 홈 화면 으로
           } else if (statuscode === 201) { // ==> alert("등록되지 않은 정보 입니다.")창 띄우기
      }
    }); */
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
