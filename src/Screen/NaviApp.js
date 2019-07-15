import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home";
import Postbox from "./Postbox";
import Send from "./Send";
import Mypage from "./Mypage";
import SignIn from "./SignIn";
import Letter from "./Letter";

const HomeNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Mypage: { screen: Mypage },
    Postbox: { screen: Postbox },
    Send: { screen: Send },
    SignIn: { screen: SignIn },
    Letter: { screen: Letter }
  },
  { initialRouteName: "Home", headerMode: "none" }
);

const NaviApp = createAppContainer(HomeNavigation);

export default NaviApp;
