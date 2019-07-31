import React from "react";
import { Text, SafeAreaView } from "react-native";
const Item = () => {
    return (
        <SafeAreaView>
           <Text>Item Details</Text>
        </SafeAreaView>
    );
};

Item.navigationOptions: ({ navigation }) => {
    return {
        title: "Item Details",
        headerTitleStyle: {
    textAlign: "left",
    fontFamily: "OpenSans-Regular",
    fontSize: 24
  },
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>
        )
    };
};

export default Item;
