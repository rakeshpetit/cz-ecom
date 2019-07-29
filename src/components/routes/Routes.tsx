import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../containers/Home/Home";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    headerMode: "none"
  }
);

const AppRoute = createAppContainer(Routes);

export default AppRoute;
