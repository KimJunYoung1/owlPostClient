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
  },
  deletebtn: {
    backgroundColor: "black",
    position: "absolute",
    right: 0
  },
  posttime: {
    marginRight: "20%"
  },
  selectall: {
    backgroundColor: "black",
    position: "absolute",
    left: 0
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

  componentDidMount() {
    let PostURL =
      "http://3.15.161.138:5000/check/postbox?email=junYoung@naver.com&nickname=hello";

    fetch(PostURL, {
      headers: {
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bllvdW5nQG5hdmVyLmNvbSIsImlhdCI6MTU2MzI0NjcyOSwiZXhwIjoxNTYzMjY0NzI5fQ.osuHrHMrx7FUohnQGLZGrtr8Qp8hzmG5w0LZnrkFrMI"
      }
    })
      .then(res => res.json())
      // .then(res => res.toData)
      .then(res => {
        this.setState({
          letters: res
        });
        console.log(res);
        console.log("여기 맞지???state ====>", this.state.letters);
      });
  }

  render() {
    const { navigation } = this.props;
    const { letters } = this.state;
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Button style={styles.selectall}>
            <Text>삭제</Text>
          </Button>
          <Text style={styles.logotext}>owlPost</Text>

          <Button style={styles.deletebtn}>
            <Text>전체선택</Text>
          </Button>
        </Header>

        {letters === null ? (
          <Spinner color="blue" />
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

                  <CheckBox
                    onPress={() => {
                      // let boxIdx = idx;
                      // this.setState({
                      //   [boxIdx]: true
                      // });
                    }}
                    checked={false}
                  />
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
