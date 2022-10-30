import { combineReducers } from "redux";
import { setCartItems } from "./Cart.reducer";

export const rootReducer = combineReducers({
  cartDetails: setCartItems,
});
