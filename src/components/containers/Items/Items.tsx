import React, { useContext } from "react";
import { View, Text, FlatList, Image } from "react-native";
import AppContext from "../../../context/appContext";

const Items = () => {
    const appContext = useContext(AppContext);
    console.log(appContext.items)
    // console.log(appContext.items ? appContext.items : null);

    const renderItem = ({item}) => {
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.photo }}
                />
            </View>
        );
    }
    return (
        <FlatList
            data={appContext.items}
            renderItem={renderItem}
        />
    );
}

export default Items;
