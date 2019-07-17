import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Footer,
  FooterTab,
  Button
} from "native-base";

import { StyleSheet, TextInput, ScrollView } from "react-native";

import AwesomeAlert from "react-native-awesome-alerts";

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
  toptext: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "3%",
    marginTop: "3%"
  },
  lettertext: {
    fontSize: 20,
    marginLeft: "3%",
    marginTop: "7%"
  },
  footer: {
    backgroundColor: "black"
  }
});
export default class Send extends Component {
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const { navigation } = this.props;
    const { showAlert } = this.state;

    return (
      <Container
      // 닉네임에 get 요청 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
      >
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>
        <Text style={styles.toptext}>To. 'NickName'</Text>

        <ScrollView>
          <TextInput
            style={styles.lettertext}
            editable={true}
            maxLength={500}
            multiline={true}
            autoFocus={true}
          />
        </ScrollView>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="편지를 보내시겠습니까?"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, send it"
          confirmButtonColor="black"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            navigation.navigate("Sendcomplete", { sendletter: sendletter });
          }}
        />

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
            <Button
              style={styles.footer}
              onPress={() => {
                this.showAlert();
              }}
            >
              <Text>Send</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
//var d = new Date("2019-02-28")
//console.log(d)
// Wed Feb 29 2012 11:00:00 GMT+1100 (EST)

//d.setDate(d.getDate() + 1)
//console.log(d)

// Thu Mar 01 2012 11:00:00 GMT+1100 (EST)

//07/15/19
