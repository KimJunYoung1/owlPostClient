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
  Icon,
  Right,
  Left,
  ListItem,
  Header,
  Picker,
  Accordion,
  CheckBox,
  Radio
} from "native-base";
import { StyleSheet, Alert } from "react-native";

const styles = StyleSheet.create({
  text: {
    flex: 1
  },
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
  }
});

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //상태 : 이 상태들이 모두 true여야 회원가입이 가능함
      statusEmail: false,
      statusPasswordMatch: null,
      statusSex: false,
      statusPartner: false,
      statusNickName: false,
      statusAgreeSelect: false,
      //회원가입시 보내줄 데이터들
      stateEmail: null,
      stateNickName: null,
      stateSex: null,
      statePartner: null,
      stateSelected: 0,
      statePassword: null,
      //signUp 컴포넌트 기능 구현을 위한 state
      radio1Select: false,
      radio2Select: false,
      radio3Select: false,
      radio4Select: false,
      stateComparePassword: null
    };
  }

  //[x]1. email 매칭 확인
  checkSameEmail() {
    //console.log(e.nativeEvent.text);
    //const email = this.email._root._lastNativeText;
    const email = this.state.stateEmail;
    if (email) {
      //TODO: email 형식을 지킬 수 있도록 조건 추가
      if (!email.includes("@") && !email.includes(".")) {
        Alert.alert("", "email의 형식이 아닙니다.");
      } else {
        //TODO: email형식을 지켰으면, DB안에 같은 데이터가 있는지 확인하고, 같은 데이터가 있으면 StausEmail 을 true로 바꾼다.
        const EMAIL_API = `http://3.15.161.138:5000/user/signup/overlapcheck?email=${email}`;
        fetch(EMAIL_API)
          .then(res => {
            if (res.status === 200) {
              this.setState({
                stateEmail: email,
                statusEmail: true
              });
              return res.json();
            } else if (res.status) {
              return res.json();
            }
          })
          .then(json => Alert.alert("", json));
      }
    } else {
      //TODO: 빈칸으로 넘기지 않도록 조건 추가
      Alert.alert("", "email을 입력하세요.");
    }
  }
  doNotStoreEmail(e) {
    const email = e.nativeEvent.text;
    //console.log(email);
    this.setState({
      stateEmail: email,
      statusEmail: false
    });
  }

  //[x]2. password 매칭확인
  // changePassword(e) {
  //   const password = e.nativeEvent.text;
  //   console.log(password);
  //   this.setState({
  //     statePassword: password
  //   });
  // }
  // checkPasswordMatch(e) {
  //   const password = this.state.statePassword;
  //   const comparePassword = e.nativeEvent.text;
  //   console.log(password, comparePassword);
  //   if (password === comparePassword) {
  //     this.setState({
  //       statusPasswordMatch: true,
  //       statePassword: password
  //     });
  //   } else if (!comparePassword.length) {
  //     this.setState({
  //       statusPasswordMatch: null,
  //       statePassword: null
  //     });
  //   } else {
  //     this.setState({
  //       statusPasswordMatch: false,
  //       statePassword: password
  //     });
  //   }
  // }

  //[x] 3. 닉네임 중복확인
  checkSameNickName() {
    //console.log(e.nativeEvent.text);
    //const nickname = this.nickName._root._lastNativeText;
    const nickname = this.state.stateNickName;
    //console.log(nickname);
    if (nickname) {
      Alert.alert("", "사용가능한 닉네임 입니다.");
      this.setState({
        stateNickName: nickname,
        statusNickName: true
      });
      // Alert.alert("","이미 같은 이름이 존재 합니다.")

      //TODO:  DB안에 같은 데이터가 있는지 확인하고, 같은 데이터가 있으면 StausNickName 을 true로 바꾼다.
      /*fetch(SAME_NickName_API,{
          method : "GET",
          body : JSON.stringify({ nickname : nickname }),
          headers: { "Contents-Type": "applsication/json" } 
        }).then((res)=>{
          if(rescode===202){
            Alert.alert("","이미 같은 이름이 존재 합니다.")
            //빈칸으로 만들어주기
          }
          else if(rescode === 200){
             Alert.alert("","사용가능한 닉네임 입니다.")
            this.setState({
              stateNickName : nickname,
              statusNickName : true  
            })
          }
        })*/
    } else {
      //TODO: 빈칸으로 넘기지 않도록 조건 추가
      Alert.alert("", "닉네임을 작성해주셔야해요");
    }
  }
  doNotStoreNickName(e) {
    const NickName = e.nativeEvent.text;
    //console.log(NickName);
    this.setState({
      stateNickName: NickName,
      statusNickName: false
    });
  }

  //[x] 4. sex 선택 및 중복선택 방지
  onRadioBtn1Click() {
    if (!this.state.radio2Select) {
      this.setState({
        radio1Select: !this.radio1Select,
        statusSex: true,
        stateSex: true
      });
    }
    //재선택 할 수 있는 기능
    if (this.state.radio2Select === true) {
      this.setState({
        radio1Select: true,
        radio2Select: false,
        statusSex: true,
        stateSex: true
      });
    }
  }

  onRadioBtn2Click() {
    if (!this.state.radio1Select) {
      this.setState({
        radio2Select: !this.radio2Select,
        statusSex: true,
        stateSex: false
      });
    }
    //재선택 할 수 있는 기능
    if (this.state.radio1Select === true) {
      this.setState({
        radio1Select: false,
        radio2Select: true,
        statusSex: true,
        stateSex: false
      });
    }
  }

  //[x] 4. 파트너 선택 및 중복선택 방지
  onRadioBtn3Click() {
    if (!this.state.radio4Select) {
      this.setState({
        radio3Select: !this.radio3Select,
        statusPartner: true,
        statePartner: true
      });
    }
    //재선택 할 수 있는 기능
    if (this.state.radio4Select === true) {
      this.setState({
        radio3Select: true,
        radio4Select: false,
        statusPartner: true,
        statePartner: true
      });
    }
  }

  onRadioBtn4Click() {
    if (!this.state.radio3Select) {
      this.setState({
        radio4Select: !this.radio4Select,
        statusPartner: true,
        statePartner: false
      });
    }
    //재선택 할 수 있는 기능
    if (this.state.radio3Select === true) {
      this.setState({
        radio3Select: false,
        radio4Select: true,
        statusPartner: true,
        statePartner: false
      });
    }
  }

  //[x]5. 연령대 선택
  onValueChange(value) {
    this.setState({
      stateSelected: value
    });
  }

  //6. 동의 약관 체크 여부
  checkAgree() {
    this.setState({
      statusAgreeSelect: !this.state.statusAgreeSelect
    });
  }
  //7. 가입완료 버튼 클릭 기능
  compelteSignUp() {
    const {
      statusEmail,
      statusAgreeSelect,
      statusNickName,
      statusPartner,
      statusPasswordMatch,
      statusSex
    } = this.state;
    const body = {
      email: this.state.stateEmail,
      password: this.state.statePassword,
      nickname: this.state.stateNickName,
      age: (this.state.stateSelected + 1) * 10,
      sex: this.state.stateSex,
      select: this.state.statePartner,
      blackList: [],
      partner_nickName: null
    };
    const status = [
      statusEmail,
      statusAgreeSelect,
      statusNickName,
      statusPartner,
      statusPasswordMatch,
      statusSex
    ];
    function truthy(currVal) {
      return currVal === true;
    }
    console.log(statusPasswordMatch);
    //console.log(status.every(truthy));

    Alert.alert("", "회원가입을 축하합니다!", [
      {
        text: "SignUP",
        onPress: () =>
          Alert.alert("", "회원가입완료! 메인화면으로 이동합니다.", [
            {
              text: "SignUp",
              onPress: () => {
                this.props.navigation.navigate("Home");
              }
            }
          ])
      }
    ]);

    //if (status.every(truthy)) {
    //fetch(SIGINUP_API + "/user/signup", {
    //  method: "POST",
    //  body: JSON.stringify(body),
    //  headers: { "Content-Type": "application/json" }
    //});
    //.then(res => {
    //  if (resStatus === 200) {
    //    Alert.alert("", "회원가입을 축하합니다!", [
    //      {
    //        text: "SignUP",
    //        onPress: () => {
    //          fetch(LOGIN_API, {
    //            method: "GET",
    //            body: JSON.stringify({
    //              email: this.state.statusEmail,
    //              password: this.state.statePassword
    //            }),
    //            headers: { "Contents-Type": "application/json" }
    //          }).then(res => {
    //            //HOME화면으로 이동 , 토큰 저장
    //              this.props.navigation.navigate("Home")
    //          });
    //        }
    //      }
    //    ]);
    //  }
    //});
    // } else {
    // Alert.alert("", "비밀번호가 일치여부, 중복확인여부 확인필요");
    // }
  }
  render() {
    const { navigation } = this.props;
    //TODO: for dynamic age change. if you want change range, you only change for loop range
    const age = [];
    for (let i = 10; i < 50; i += 10) {
      age.push(i + "");
    }

    //동의 약관 데이터
    const agree = [{ title: "동의 약관", content: "동의하시나요?" }];

    //패스워드가 매칭여부에 따라 메시지 변화
    let matchMsg;
    let passwordMatch;
    console.log(this.state.statePassword, this.state.stateComparePassword);
    if (!this.state.statePassword || !this.state.stateComparePassword) {
      matchMsg = "";
    } else if (this.state.statePassword === this.state.stateComparePassword) {
      matchMsg = "패스워드 일치";
      passwordMatch = true;
    } else {
      matchMsg = "패스워드 불 일치";
      passwordMatch = false;
    }

    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>
        <Content>
          {/*e-mail*/}
          <Content>
            <ListItem>
              <Input
                //ref={ref => (this.email = ref)}
                onChange={this.doNotStoreEmail.bind(this)}
                placeholder="email"
              />
              {this.state.statusEmail ? (
                <Button success>
                  {/*TODO: 같은 아이디가 있으면 가입되지 않음, @ 가 포함되지 않으면 가입되지 않도록 , 중복확인 버튼 안누르면 가입 안되도록*/}
                  <Text>중복확인</Text>
                </Button>
              ) : (
                <Button onPress={this.checkSameEmail.bind(this)}>
                  {/*TODO: 같은 아이디가 있으면 가입되지 않음, @ 가 포함되지 않으면 가입되지 않도록 , 중복확인 버튼 안누르면 가입 안되도록*/}
                  <Text>중복확인</Text>
                </Button>
              )}
            </ListItem>
          </Content>

          {/*password*/}
          <Content>
            <ListItem>
              <Input
                onChange={e => {
                  const password = e.nativeEvent.text;
                  const ComparePassword = this.state.stateComparePassword;
                  console.log(password);
                  if (password === ComparePassword) {
                    this.setState({
                      statusPasswordMatch: true,
                      statePassword: password
                    });
                  } else {
                    this.setState({
                      statePassword: password,
                      statusPasswordMatch: false
                    });
                  }
                }}
                placeholder="password"
                secureTextEntry={true}
              />
            </ListItem>
            <ListItem>
              <Input
                onChange={e => {
                  const ComparePassword = e.nativeEvent.text;
                  const password = this.state.statePassword;
                  console.log(password, ComparePassword);
                  if (password === ComparePassword) {
                    this.setState({
                      statusPasswordMatch: true,
                      stateComparePassword: ComparePassword
                    });
                  } else {
                    this.setState({
                      stateComparePassword: ComparePassword,
                      statusPasswordMatch: false
                    });
                  }
                }}
                placeholder="password 재확인"
                secureTextEntry={true}
              />
              <Text
                style={passwordMatch ? { color: "green" } : { color: "red" }}
              >
                {matchMsg}
              </Text>
            </ListItem>
            <ListItem>
              {/*TODO: 패스워드 일치 여부에 따라 아래의 텍스트 글자(일치,불일치)와 색상(초록,빨강)이 달라지도록, 일치하지 않으면 가입되지 않음*/}
              <Input
                //ref={ref => (this.nickName = ref)}
                onChange={this.doNotStoreNickName.bind(this)}
                placeholder="닉네임을 정해주세요"
              />
              {/*TODO: 같은 닉네임이 있거나 값이 null이면 가입되지 않음, 중복확인 버튼 안누르면 가입 안됩*/}
              {this.state.statusNickName ? (
                <Button success>
                  <Text>중복확인</Text>
                </Button>
              ) : (
                <Button onPress={this.checkSameNickName.bind(this)}>
                  {/*TODO: 같은 닉네임이 있거나 값이 null이면 가입되지 않음, 중복확인 버튼 안누르면 가입 안됩*/}
                  <Text>중복확인</Text>
                </Button>
              )}
            </ListItem>
          </Content>

          {/*Sex*/}
          <Content>
            <ListItem>
              <Text>당신의 성별은 ?</Text>
              <Right>
                <Radio
                  selected={this.state.radio1Select}
                  onPress={this.onRadioBtn1Click.bind(this)}
                />
              </Right>
              <Left>
                {/*TODO: slect true*/}
                <Text> 남자 </Text>
              </Left>
              <Right>
                <Radio
                  selected={this.state.radio2Select}
                  onPress={this.onRadioBtn2Click.bind(this)}
                />
              </Right>
              <Left>
                {/*TODO: false*/}
                <Text> 여자 </Text>
              </Left>
            </ListItem>
          </Content>

          {/*select*/}
          <Content>
            <ListItem>
              <Text>원하는 매칭상대?</Text>
              <Right>
                <Radio
                  selected={this.state.radio3Select}
                  onPress={this.onRadioBtn3Click.bind(this)}
                />
              </Right>
              <Left>
                {/*TODO: slect true*/}
                <Text> 이성 </Text>
              </Left>
              <Right>
                <Radio
                  selected={this.state.radio4Select}
                  onPress={this.onRadioBtn4Click.bind(this)}
                />
              </Right>
              <Left>
                {/*TODO: false*/}
                <Text> 상관없음 </Text>
              </Left>
            </ListItem>
          </Content>

          {/*age*/}
          <Content>
            <ListItem>
              <Text>연령대를 선택해주세요 : </Text>
              <Picker
                notemode="dropdown"
                style={{ width: 300 }}
                selectedValue={this.state.stateSelected}
                onValueChange={this.onValueChange.bind(this)}
              >
                {age.map((curr, index) => (
                  <Picker.Item
                    key={curr.charCodeAt}
                    label={curr + "대"}
                    value={index}
                  />
                ))}
              </Picker>
            </ListItem>
          </Content>

          {/*agree*/}
          <Content>
            <ListItem>
              {/*TODO: 동의 약관에 체크를 하지 않으면 가입이 되지 않음*/}
              <Accordion dataArray={agree} />
            </ListItem>
            <ListItem>
              <Text>위의 약관에 동의 하십니까?</Text>
              <Left>
                <CheckBox
                  checked={this.state.statusAgreeSelect}
                  onPress={this.checkAgree.bind(this)}
                />
              </Left>
            </ListItem>
          </Content>
        </Content>

        {/*complete*/}
        {/*TODO: 모든 조건을 갖춘 데이터를 db스키마 형태로 보낼것*/}
        <Footer>
          <FooterTab>
            <Button
              style={{ backgroundColor: "black" }}
              onPress={this.compelteSignUp.bind(this)}
            >
              <Text style={{ fontSize: 15 }}>가입완료</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
