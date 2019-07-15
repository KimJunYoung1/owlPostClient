import {
  Picker,
  Body,
  Container,
  Button,
  Text,
  ListItem,
  Left,
  List,
  Header,
  Content,
  Right,
  CheckBox,
  Footer,
  FooterTab,
  Icon
} from "native-base";
import { StyleSheet, Alert } from "react-native";
import React, { Component } from "react";

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
  Submit = () => {
    const { navigation } = this.props;
    Alert.alert(
      "제출 완료",
      "불편을 드려 죄송합니다.\n항상 노력하는 owlPost가 되겠습니다.",
      [
        {
          text: "ok",
          onPress: () => {
            navigation.navigate("Mypage");
          }
          /*fetch(BLACKLIST_API,{
            method:"POST"
           //토큰을 보낸다. 토큰은 MyPage에서 props로 가져온다. 
             }).then(res=>{
           if(resCode===200){
          Alert.alert("제출완료","불편을 드려 죄송합니다.\n항상 노력하는 owlPost가 되겠습니다.",{text : "ok",onPress:()=>navigation.navigate("Mypage")})
                }
            })*/
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
          <Text style={styles.maintext}>고객의 소리</Text>
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
