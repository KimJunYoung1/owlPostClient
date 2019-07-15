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
      "탈퇴 처리 완료",
      "좋은의견 감사합니다.\n항상 노력하는 owlPost가 되겠습니다.\n다음에 또 이용해주세요!",
      [
        {
          text: "ok",
          onPress: () => {
            navigation.navigate("SignIn");
          }
          /*fetch(DELETE_API,{
              method:"DELETE"
             //토큰을 보낸다. 토큰은 MyPage에서 props로 가져온다. 
               }).then(res=>{
             if(resCode===200){
            Alert.alert("제출완료","좋은의견 감사합니다.\n항상 노력하는 owlPost가 되겠습니다.\n다음에 또 이용해주세요!",{text : "ok",onPress:()=>navigation.navigate("SignIn")})
            //토큰 제거
                  }
              })*/
        }
      ]
    );
  };
  render() {
    const deleteReason = [
      "매칭이 잘 안되서",
      "고객 서비스가 쓰레기네요",
      "그냥 맘에 안들어요",
      "동년배가 많이 없네요",
      "노잼"
    ];

    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>
        <Content>
          <Text style={styles.maintext}>고객의 소리</Text>
          <Text style={styles.ask}>
            서비스의 어느부분이 가장 마음에 안드셨나요?
          </Text>
          <List>
            {deleteReason.map((curr, index) => (
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
