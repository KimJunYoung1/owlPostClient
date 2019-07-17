import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home";
import Signup from "./Signup";
import SignIn from "./SignIn";
import Postbox from "./Postbox";
import Send from "./Send";
import Mypage from "./Mypage";
import AddBlackList from "./AddBlackList";
import DeleteId from "./DeleteId";
import Letter from "./Letter";
import Sendcomplete from "./Sendcomplete";

const SignNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Signup: { screen: Signup },
    SignIn: { screen: SignIn },
    Mypage: { screen: Mypage },
    Postbox: { screen: Postbox },
    Send: { screen: Send },
    AddBlackList: { screen: AddBlackList },
    DeleteId: { screen: DeleteId },
    Letter: { screen: Letter },
    Sendcomplete: { screen: Sendcomplete }
  },
  { initialRouteName: "SignIn", headerMode: "none" }
);

const SignNavi = createAppContainer(SignNavigation);

export default SignNavi;
