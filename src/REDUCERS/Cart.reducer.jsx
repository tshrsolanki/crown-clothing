import { actions } from "../constant";
import { addToCart, decQunatity, delItem, incQuantity } from "./controller";

const initialCart = {
  cartItems: [],
  count: 0,
  total: 0,
};

export const setCartItems = (state = initialCart, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART: {
      const { cartItems, count, total } = addToCart(state, action.payload);

      return {
        cartItems,
        total,
        count,
      };
    }
    case actions.INC_QTY: {
      const { cartItems, count, total } = incQuantity(state, action.payload);

      return {
        cartItems,
        count,
        total,
      };
    }
    case actions.DEC_QTY: {
      const { cartItems, count, total } = decQunatity(state, action.payload);

      return {
        cartItems,
        count,
        total,
      };
    }
    case actions.DELETE_ITEM: {
      const { cartItems, count, total } = delItem(state, action.payload);

      return {
        cartItems,
        count,
        total,
      };
    }
    default:
      return state;
  }
};
