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
  Thumbnail
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
  }
});
export default class Postbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // get 요청으로 받아서 뿌려질거임!
    };
    this.letters = [
      {
        from: "닉퓨리",
        to: "ironman",
        letter: "너 내가 전화 좀 잘 받으라고 했어 안했어",
        time: "3:43 pm"
      }
    ];
    //
  }

  render() {
    const { navigation } = this.props;
    const { from, letter, time } = this.letters[0];
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>

        <List
        // length 만큼 예를 뿌린다 스크롤 화면으로!
        >
          <ListItem
            avatar
            onPress={() => {
              navigation.navigate("Letter", {
                letters: this.letters
              });
            }}
          >
            <Left>
              <Thumbnail source={{ uri: "Image URL" }} />
            </Left>
            <Body>
              <Text>{from}</Text>
              <Text note>{letter}</Text>
            </Body>
            <Right>
              <Text note>{time}</Text>
            </Right>
          </ListItem>
        </List>

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
