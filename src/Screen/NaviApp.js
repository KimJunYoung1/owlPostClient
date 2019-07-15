import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home";
import Postbox from "./Postbox";
import Send from "./Send";
import Mypage from "./Mypage";
import SignIn from "./SignIn";
import AddBlackList from "./AddBlackList";
import DeleteId from "./DeleteId";

const HomeNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Mypage: { screen: Mypage },
    Postbox: { screen: Postbox },
    Send: { screen: Send },
    SignIn: { screen: SignIn },
    AddBlackList: { screen: AddBlackList },
    DeleteId: { screen: DeleteId }
  },
  { initialRouteName: "Home", headerMode: "none" }
);

const NaviApp = createAppContainer(HomeNavigation);

export default NaviApp;
