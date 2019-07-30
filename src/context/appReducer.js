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

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
