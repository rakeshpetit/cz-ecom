import React, { useReducer } from "react";
import Faker from "faker";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_WISH_LIST,
    REMOVE_FROM_WISH_LIST,
    SET_ITEMS,
    GET_CART_ITEMS,
    GET_WISH_LIST_ITEMS,
    CLEAR_WISH_LIST,
    CLEAR_CART,
    SET_LOADING
} from "./types.js";

const AppState = props => {
    const initialState = {
        items: [],
        cart: [],
        wishList: [],
        loading: false
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Add to Cart
    // Add to Wishlist
    // Get Items
    const getRandomItems = () => {
        setLoading();
        let data = [];
        for (let i = 0; i < 10; i++) {
            const item = {
                name: Faker.commerce.productName(),
                price: Faker.commerce.price(),
                product: Faker.commerce.productName(),
                photo: "https://picsum.photos/id/640/200/200"
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
                getRandomItems,
                setLoading
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;