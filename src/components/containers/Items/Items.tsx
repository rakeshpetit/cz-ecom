import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import AppContext from "../../../context/appContext";
import { StateType, ItemType } from '../../../context/types'
type PropType = {
  navigation: any,
  items: Array<any>
}

const Items = (props: PropType) => {
    const appContext: StateType = useContext(AppContext);
    // console.log(appContext.items)
    const { setSelectedItem } = appContext;
    // console.log(appContext.items ? appContext.items : null);

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row'}} onPress={() => { _onPressItem(item.id)}}>
            <View style={{flex: 2, alignItems: 'center'}}>
            <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: item.photo }}
            />
            </View>
            <View style={{flex: 3, justifyContent: 'center'}}>
                <Text>{item.name}</Text>
                <Text>{`£ ${item.price}`}</Text>
                </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
              <Text>{item.isItemInCart ? 'Cart' : null}</Text>
              <Text>{item.isItemInWishList ? 'Wish List' : null}</Text>
              </View>
            </TouchableOpacity>
        );
    }
    const _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        // console.log(id);
        setSelectedItem(id)
        // console.log(props)
        props.navigation.navigate("Item");
    };
    return (
      <View>
        <FlatList
        ItemSeparatorComponent={() => (
    <View style={[{ height: 1, marginTop: 10, marginBottom: 10, width: '100%', backgroundColor: 'grey'}]} />
  )}
            data={props.items}
            renderItem={renderItem}
        />
        </View>
    );
}

export default Items;
