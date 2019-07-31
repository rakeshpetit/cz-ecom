import React, { useContext } from "react";
import { View, Text, Image, SafeAreaView, Button } from "react-native";
import AppContext from "../../../context/appContext";
import { StateType } from '../../../context/types'
type PropType = {
  navigation: any
}

const Item = (props: PropType) => {
  const appContext: StateType = useContext(AppContext);
  console.log(appContext.selectedItem)
  const { selectedItem, addToCart, addToWishList } = appContext
    return (
        <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center', flex: 1}}>
        <View style={{ alignItems: 'center'}}>
        <Image
            style={{ width: 250, height: 250 }}
            source={{ uri: selectedItem.photo }}
        />
           <Text style={{ fontSize: 20}}>{selectedItem.name}</Text>
           <Text style={{ fontSize: 16}}>{`£ ${selectedItem.price}`}</Text>

            </View>
            <View style={{ justifyContent: 'flex-end'}}><Button
                disabled={selectedItem.isItemInCart}
                onPress={() => {
                  props.navigation.navigate(
                      "Home"
                  )
                  return addToCart(selectedItem)
                }
                }
                title="Add to Cart"
            />
            <Button
            disabled={selectedItem.isItemInWishList}
            onPress={() => {
              props.navigation.navigate(
                  "Home"
              )
              return addToWishList(selectedItem)
            }
            }
                title="Add to Wishlist"
            /></View>
        </SafeAreaView>
    );
};


export default Item;
