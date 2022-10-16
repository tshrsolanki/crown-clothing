import { useState, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });
  if (existingCartItem) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  addingQuantity: () => {},
  decQuantity: () => {},
  removeItem: () => {},
  count: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  // const [count, setcount] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const addingQuantity = (item) => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id)
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        return cartItem;
      })
    );
  };
  const decQuantity = (item) => {
    if (item.quantity === 1) {
      return setCartItems(
        cartItems.filter((cartItem) => {
          return cartItem.id !== item.id;
        })
      );
    }
    return setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
    );
  };
  const removeItem = (item) => {
    setCartItems(
      cartItems.filter((cartItem) => {
        return cartItem.id !== item.id;
      })
    );
  };

  const count = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const total = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    count,
    addingQuantity,
    decQuantity,
    removeItem,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
