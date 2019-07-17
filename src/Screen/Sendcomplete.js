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
import NumericInput from "react-native-numeric-input";
import { StyleSheet, Alert } from "react-native";

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
  footer: {
    backgroundColor: "black"
  }
});

export default class Sendcomplete extends Component {
  constructor(props) {
    super(props); // --> slice 안 한 편지 통째로 내용을 받음.

    this.state = {
      //sendletters: this.props.navigation.state.params.sendletter
    };
  }
  render() {
    const { navigation } = this.props;
    //const { sendletter } = this.state;
    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>
        <Container>
          <NumericInput type="up-down" onChange={value => console.log(value)} />
          {/* <NumericInput
            value={this.state.value}
            minValue={1}
            maxValue={12}
            initValue={1}
            type={"up-down"}
            onChange={value => this.setState({ value })}
            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
            totalWidth={240}
            totalHeight={50}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor="#B0228C"
            iconStyle={{ color: "white" }}
            rightButtonBackgroundColor="#EA3788"
            leftButtonBackgroundColor="#E56B70"
          />

          <NumericInput
            value={this.state.values}
            minValue={0}
            maxValue={59}
            initValue={0}
            onChange={values => this.setState({ values })}
            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
            totalWidth={240}
            totalHeight={50}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor="#B0228C"
            iconStyle={{ color: "white" }}
            rightButtonBackgroundColor="#EA3788"
            leftButtonBackgroundColor="#E56B70"
          /> */}

          <Button
            rounded
            dark
            onPress={() =>
              Alert.alert("", "부엉이가 출발했어요!", [
                {
                  text: "ok"
                }
              ])
            }
          >
            <Text>Send</Text>
          </Button>
        </Container>
        <Footer>
          <FooterTab>
            <Button
              style={styles.footer}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text>Home</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
