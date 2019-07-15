import React, { Component } from "react";
import {
  Text,
  Container,
  Header,
  Footer,
  FooterTab,
  Button,
  Icon
} from "native-base";
import { StyleSheet } from "react-native";
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
  maintext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "50%"
  },
  subtext: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: 20
  },
  footer: {
    backgroundColor: "black"
  },
  timer: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: 17
  }
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerText: "HELLO OWLS!",
      subText: "당신의 펜팔친구를 찾아보세요!",
      matchStatus: "매칭시작",
      // 매칭 버튼을 누르면 메인 텍스트와 서브 텍스트를 변경한다.
      // 매칭 버튼을 누르면 서버에 post 요청 -> db에 partnerId가 null인
      // 상대와 서로를 추가한다.
      // 포스트 요청에 따라 푸시요청??
      partner: "Ironman",
      matchComplete: true,
      // fetch res.partnerNickName 이 null ? true : false
      // 매칭완료이면 true , 매칭 전, 대기 중에는 false
      // 매칭버튼 변경 . 기본 텍스트에서 상대방 닉네임으로 변경
      postStatus: true,
      // fetch res.date ? null ? true : false
      // 상대가 편지를 보냈으면 true , default = false -> true 면 또 변경.
      arriveTime: "07/15/19   21:00",
      // get 요청으로 받을 값이 들어갈 예정.
      date: null,
      // 여기에 도착예정 시간과 현재시간을 계산한 카운터 값이 들어가거나 , 편지도착알림 텍스트가 띄워진다.
      showAlert: false
      // true 일 때 alert , 편지시간이 되면 true로 되고 date는 다시 null.
    };
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  componentDidMount() {
    // fetch(LOGIN_API)
    //     .then(res => res.json())
    //     .then(res => {
    //       if(res.partnerNickname === null){
    //         this.setState({
    //           matchComplete : false
    //         });
    //       }
    //       this.setState({
    //         matchComplete : true
    //       });
    //     });

    // if (this.state.matchComplete === true) {
    //   // 상대방과 매칭 성공한다면
    //   fetch(LOGIN_API)
    //     .then(res => res.json())
    //     .then(res => {
    //       this.setState({
    //         partner: res.partnerNickname,
    //         matchStatus: "편지 쓰기"
    //       });
    //     });
    // }
    // else if (this.state.matchComplete === false) {
    //  // 상대방과 매칭 이전이라면 /매칭시작을 누른 적이 있는 지 , 없는 지
    //   if (this.state.matchStatus === "매칭 중") {
    //     this.setState({
    //       matchStatus: "매칭 중"
    //     });
    //   }
    //   this.setState({
    //     matchStatus: "매칭시작"
    //   });
    // }

    // 상대방이 있고 상대방 편지가 출발했을 때
    if (this.state.matchComplete && this.state.postStatus) {
      let x = setInterval(() => {
        // 여기도 fench 써서 아예 받아올 예정.
        let arrive = this.state.arriveTime;
        //console.log(times, "---", today, "---", arrive);
        var deadline = new Date(arrive).getTime();
        var now = new Date().getTime();
        let t = deadline - now;
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (t <= 0) {
          clearInterval(x);
          this.setState({
            date: null
          });
          this.setState({
            showAlert: true
          });
        } else {
          this.setState({
            date:
              "편지 도착까지, " +
              days +
              "일 " +
              hours +
              "시간 " +
              minutes +
              "분"
          });
        }
      }, 2000);
      // 처음에 한 번 띄워주고 하는 법을 생각해보자 ㅠ_ㅠ
    }
  }

  render() {
    const {
      centerText,
      subText,
      matchStatus,
      matchComplete,
      partner,
      date,
      postStatus,
      showAlert
    } = this.state;

    const { navigation } = this.props;

    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>

        <Container>
          {matchComplete === false ? (
            <Text style={styles.maintext}>{centerText}</Text>
          ) : (
            <Text style={styles.maintext}>My penpal : '{partner}'!</Text>
          )}

          {matchComplete === false ? (
            <Text style={styles.subtext}>{subText}</Text>
          ) : (
            <Text style={styles.subtext}>하루 한 통, 마음을 전해보세요.</Text>
          )}
          {postStatus === true ? (
            <Text style={styles.timer}>{date}</Text>
          ) : null}
        </Container>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="편지가 도착했어요!"
          message="Postbox에서 확인해보세요!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="📩"
          confirmButtonColor="black"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
        <Footer>
          <FooterTab>
            <Button
              style={styles.footer}
              onPress={() => {
                navigation.navigate("Postbox");
              }}
            >
              <Text>편지함</Text>
            </Button>
            <Button
              style={styles.footer}
              onPress={() => {
                if (matchComplete === false) {
                  this.setState({
                    centerText: "FIND FRIEND!",
                    subText: "펜팔친구를 찾고 있어요!",
                    matchStatus: "매칭 중"
                  });
                } else {
                  navigation.navigate("Send");
                }
              }}
            >
              <Text>{matchStatus}</Text>
            </Button>
            <Button
              style={styles.footer}
              onPress={() => {
                navigation.navigate("Mypage");
              }}
            >
              <Text>마이페이지</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

/*

*/
