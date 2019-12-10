import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Footer,
  FooterTab,
  Button,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  CheckBox,
  Spinner
} from "native-base";

import { StyleSheet, AsyncStorage, Alert } from "react-native";
import { SERVER_API } from "../api/API";

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
  },

  posttime: {
    marginRight: "20%"
  }
});
export default class Postbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: null
    };
    // this.letters = [
    //   {
    //     from: "닉퓨리",
    //     to: "ironman",
    //     letter: "너 내가 전화 좀 잘 받으라고 했어 안했어",
    //     time: "3:43 pm"
    //   }
    // ];
    // this.checkbox = {};
    //
  }

  async componentDidMount() {
    let PostURL = `${SERVER_API}/check/postbox`; // 겟인데 한 5분 간격?
    const token = await AsyncStorage.getItem("token");
    this.setState({
      token: token
    });
    console.log(token);
    fetch(PostURL, {
      headers: {
        "x-access-token": token
      }
    })
      .then(res => res.json())
      // .then(res => res.toData)
      .then(res => {
        console.log(res);
        this.setState({
          letters: res
        });
        console.log(res);
        console.log("여기 맞지???state ====>", this.state.letters);
      })
      .catch(err => console.log(err));

    setInterval(() => {
      fetch(PostURL, {
        headers: {
          "x-access-token": token
        }
      })
        .then(res => res.json())
        // .then(res => res.toData)
        .then(res => {
          console.log(res);
          this.setState({
            letters: res
          });
          console.log(res);
          console.log("여기 맞지???state ====>", this.state.letters);
        })
        .catch(err => console.log(err));
    }, 50000);
    // home 에서 props 로 편지도착상태알림이오면 실행으로 변경 예정
  }

  // 실행이 안되네 바로 .. 패치요청 비동기?에러처리?
  afterDeleteReset = () => {
    //console.log("실행되니?????????????");
    let PostURL = `${SERVER_API}/check/postbox`; // 삭제할 때 다시 겟

    fetch(PostURL, {
      headers: {
        "x-access-token": this.state.token
      }
    })
      .then(res => res.json())
      //.then(res => res.json())
      .then(res => {
        // console.log(res);
        this.setState({
          letters: res
        });
        //console.log(res);
        //console.log("여기 맞지???state ====>", this.state.letters);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { navigation } = this.props;
    const { letters } = this.state;
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>

        {letters === null ? (
          <Container>
            <Spinner color="blue" />
          </Container>
        ) : (
          letters.toData.map((ele, idx) => (
            <List
              key={idx.toString()}
              // length 만큼 예를 뿌린다 스크롤 화면으로!
            >
              <ListItem
                avatar
                onPress={() => {
                  navigation.navigate("Letter", {
                    ele: ele
                  });
                }}
              >
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        "https://pbs.twimg.com/profile_images/2327813980/f0g6arshemdx1xxarjx5_400x400.jpeg"
                    }}
                  />
                </Left>
                <Body>
                  <Text>{ele.from}</Text>

                  {ele.messages.length < 25 ? (
                    <Text note>{ele.messages}</Text>
                  ) : (
                    <Text note>{ele.messages.slice(0, 20)}..... </Text>
                  )}
                </Body>
                <Right>
                  <Text note style={styles.posttime}>
                    {ele.time}
                  </Text>

                  <Button
                    onPress={() => {
                      //console.log(this.state.token);
                      fetch(`${SERVER_API}/check/deleteletter`, {
                        method: "DELETE",
                        body: JSON.stringify({
                          selectmessage: [{ messages: ele.messages }]
                        }),
                        headers: {
                          "x-access-token": this.state.token,
                          "Content-Type": "application/json"
                        }
                      })
                        .then(res => {
                          if (res.status === 200) {
                            return res.json();
                          } else if (res.status === 403) {
                            return res.json();
                          }
                        })
                        .then(res =>
                          Alert.alert("", res, [
                            {
                              text: "ok",
                              onPress: () => this.afterDeleteReset()
                            }
                          ])
                        )
                        .catch(err => console.log(err));
                    }}
                  >
                    <Text>🗑</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          ))
        )}

        <Container />
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
