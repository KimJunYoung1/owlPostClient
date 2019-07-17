import {
  Container,
  Button,
  Text,
  ListItem,
  Left,
  List,
  Header,
  Content,
  Right,
  Footer,
  FooterTab,
  Icon
} from "native-base";
import { StyleSheet, Alert, AsyncStorage } from "react-native";
import React, { Component } from "react";
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
    top: "5%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  list: {
    top: "21%"
  },
  footer: {
    backgroundColor: "black"
  },
  ask: { marginTop: "5%", textAlign: "center", fontSize: 20 }
});

export default class AddBlackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opinion: ""
    };
  }
  Submit = async () => {
    const nickname = this.props.navigation.state.params.nickname;
    const { navigation } = this.props;
    //console.log(nickname);
    const token = await AsyncStorage.getItem("token");
    Alert.alert(
      "제출 완료",
      "불편을 드려 죄송합니다.\n항상 노력하는 owlPost가 되겠습니다.",
      [
        {
          text: "ok",
          onPress: () => {
            //console.log(token);
            fetch(SERVER_API + `/check/blacklist?nickname=${nickname}`, {
              method: "POST",
              //토큰을 보낸다.
              headers: { "x-access-token": token }
            })
              .then(res => {
                console.log(res);
                if (res.status === 200) {
                  return res.json();
                }
              })
              .then(json => {
                console.log(json);
                Alert.alert("", json, [
                  {
                    text: "확인",
                    onPress: () => {
                      navigation.goBack();
                    }
                  }
                ]);
              })
              .catch(err => console.log(err));
          }
        }
      ]
    );
  };
  render() {
    const blacklistReason = [
      "욕설 및 비방",
      "장기간 연락 두절",
      "불쾌감 조성",
      "성희롱 및 음란물 첨부",
      "기타"
    ];

    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>
        <Content>
          <Text style={styles.ask}>
            파트너가 어떤 점을 가장 불편하게 만드셨나요?
          </Text>
          <List>
            {blacklistReason.map((curr, index) => (
              <ListItem selected key={index}>
                <Left>
                  <Button
                    transparent
                    onPress={() =>
                      this.setState({
                        opinion: curr
                      })
                    }
                  >
                    <Text ref={ref => (this.curr = ref)}>{curr}</Text>
                  </Button>
                </Left>
                <Right>
                  {curr === this.state.opinion ? (
                    <Icon name="checkmark" />
                  ) : (
                    undefined
                  )}
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button style={styles.footer} onPress={this.Submit}>
              <Text style={{ fontSize: 15 }}>제출</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
