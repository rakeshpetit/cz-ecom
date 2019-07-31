import { createStackNavigator, createAppContainer } from "react-navigation";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Home from "../containers/Home/Home";
import Item from "../containers/Items/Item";

const Routes = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Item: {
            screen: Item
        }
    },
    {
        headerMode: "none"
    }
);

const AppRoute = createAppContainer(Routes);

export default AppRoute;
