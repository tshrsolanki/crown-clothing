import { ADD_TO_CART, INC_QTY, DEC_QTY, DELETE_ITEM } from "../constant";

const initialCart = {
  cartItems: [],
  count: 0,
  total: 0,
};

function getCount(arr) {
  const count = arr.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return count;
}
function getTotal(arr) {
  const total = arr.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return total;
}

export const setCartItems = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const findItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      if (findItem) {
        const addItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id)
            return { ...item, quantity: item.quantity + 1 };
          return item;
        });

        return {
          cartItems: addItems,
          count: getCount(addItems),
          total: getTotal(addItems),
        };
      }
      const newCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
      return {
        cartItems: newCart,
        count: getCount(newCart),
        total: getTotal(newCart),
      };

    case INC_QTY:
      const incItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity + 1 };
      });
      return {
        cartItems: incItems,
        count: getCount(incItems),
        total: getTotal(incItems),
      };
    case DEC_QTY:
      if (action.payload.quantity === 1) {
        const decItems = state.cartItems.filter((item) => {
          return item.id !== action.payload.id;
        });

        return {
          cartItems: decItems,
          count: getCount(decItems),
          total: getTotal(decItems),
        };
      }
      const decCart = state.cartItems.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity - 1 };
      });
      return {
        cartItems: decCart,
        count: getCount(decCart),
        total: getTotal(decCart),
      };

    case DELETE_ITEM:
      const delCart = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });

      return {
        cartItems: delCart,
        count: getCount(delCart),
        total: getTotal(delCart),
      };
    default:
      return state;
  }
};
