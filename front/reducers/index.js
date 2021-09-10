import { combineReducers } from "redux"
import modalReducer from "./modalReducer"
import userReducer from "./userReducer"
import productsReducer from "./productsReducer"
import cartReducer from "./cartReducer"

export default combineReducers({
  usuario:userReducer,
  modals: modalReducer,
  products: productsReducer,
  cart: cartReducer
})