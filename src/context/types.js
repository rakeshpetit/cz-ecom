export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST'
export const REMOVE_FROM_WISH_LIST = 'REMOVE_FROM_WISH_LIST'
export const SET_ITEMS = 'SET_ITEMS'
export const GET_CART_ITEMS = 'GET_CART_ITEMS'
export const GET_WISH_LIST_ITEMS = 'GET_WISH_LIST_ITEMS'
export const CLEAR_WISH_LIST = 'CLEAR_WISH_LIST'
export const CLEAR_CART = 'CLEAR_CART'
export const SET_LOADING = 'SET_LOADING'

export type StateType = {
  items: Array<any>,
  cart: Array<any>
  wishList: Array<any>
  loading: boolean,
  getRandomItems: function,
  setLoading: function,
}

export type ItemType = {
  id: Number,
  name: String,
  price: String,
  photo: String
}
