import React, { useReducer } from "react";
import * as faker from 'faker';
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_WISH_LIST,
    REMOVE_FROM_WISH_LIST,
    SET_ITEMS,
    SET_SELECTED_ITEM,
    GET_CART_ITEMS,
    GET_WISH_LIST_ITEMS,
    CLEAR_WISH_LIST,
    CLEAR_CART,
    SET_LOADING,
    StateType,
    ItemType
} from "./types";

const AppState =( props: any) => {
    const initialState: StateType = {
        items: [],
        cart: [],
        wishList: [],
        selectedItem: null,
        loading: false,
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Add to Cart
    const addToCart = (item: ItemType) => {
      dispatch({ type: ADD_TO_CART, payload: item });
    }
    // Add to Wishlist
    const addToWishList = (item: ItemType) => {
      dispatch({ type: ADD_TO_WISH_LIST, payload: item });
    }
    // Get Items
    const setSelectedItem = (i: number) => {
      dispatch({ type: SET_SELECTED_ITEM, payload: i });
    };
    const getRandomItems = () => {
        setLoading();
        let data = [];
        for (let i = 0; i < 20; i++) {
            const item = {
                id: i,
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                photo: `https://picsum.photos/id/${i}/200/300`
            };
            data.push(item);
        }
        dispatch({ type: SET_ITEMS, payload: data });
    };
    // Get Cart Items
    // Get Wish list
    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <AppContext.Provider
            value={{
                items: state.items,
                cart: state.cart,
                wishList: state.wishList,
                loading: state.loading,
                selectedItem: state.selectedItem,
                getRandomItems,
                addToCart,
                addToWishList,
                setSelectedItem,
                setLoading
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
