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
    ActionType
} from "./types.js";

export default (state: StateType, action: ActionType) => {
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
        case SET_SELECTED_ITEM:
            {
              const selectedItem = state.items.find(item => item.id === action.payload)
              const cart = state.cart
              const isItemInCart = cart.find(cartItem => cartItem.id === selectedItem.id)
              const wishList = state.wishList
              const isItemInWishList = wishList.find(wishListItem => wishListItem.id === selectedItem.id)
              selectedItem.isItemInCart = isItemInCart ? true : false
              selectedItem.isItemInWishList = isItemInWishList ? true : false
              return {
                ...state,
                selectedItem
            };
          }
          case ADD_TO_CART:
              {
                const item = action.payload
                const cart = state.cart
                const isItemInCart = cart.find(cartItem => cartItem.id === item.id)
                if(!isItemInCart)
                  cart.push(item)
                return {
                  ...state,
                  cart
              };
            }
            case ADD_TO_WISH_LIST:
                {
                  const item = action.payload
                  const wishList = state.wishList
                  const isItemInWishList = wishList.find(wishListItem => wishListItem.id === item.id)
                  if(!isItemInWishList)
                    wishList.push(item)
                  return {
                    ...state,
                    wishList
                };
              }
        default:
            return state;
    }
};
