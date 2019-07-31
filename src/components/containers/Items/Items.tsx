import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import AppContext from "../../../context/appContext";
import { StateType, ItemType } from '../../../context/types'
type PropType = {
  navigationProps: any
}

const Items = (props: PropType) => {
    const appContext: StateType = useContext(AppContext);
    console.log(appContext.items)
    // console.log(appContext.items ? appContext.items : null);

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => { _onPressItem(item.id)}}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.photo }}
                />
            </TouchableOpacity>
        );
    }
    const _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        console.log(id);
        // console.log(props)
        props.navigation.navigate("Item");
    };
    return (
        <FlatList
            data={appContext.items}
            renderItem={renderItem}
        />
    );
}

export default Items;
