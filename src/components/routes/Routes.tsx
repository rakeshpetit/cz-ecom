import { createStackNavigator, createAppContainer } from "react-navigation";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Home from "../containers/Home/Home";
import Item from "../containers/Items/Item";

const ItemStackNavigator = createStackNavigator(
    {
        ItemScreen: {
            screen: Item,
            navigationOptions: ({ navigation }) => {
                return {
                    title: "Item Details",
                    headerTitleStyle: {
                        textAlign: "left",
                        fontSize: 24
                    },
                    headerLeft: (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(
                                    "Home"
                                )
                            }>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    )
                };
            }
        }
    },
    {
        headerMode: "float"
    }
);


const Routes = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Item: {
            screen: ItemStackNavigator
        }
    },
    {
        headerMode: "none"
    }
);

const AppRoute = createAppContainer(Routes);

export default AppRoute;
