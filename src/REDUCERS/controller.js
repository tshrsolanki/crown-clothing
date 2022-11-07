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

export const addToCart = (state, itemToAdd) => {
  const findItem = state.cartItems.find((item) => {
    return item.id === itemToAdd.id;
  });
  if (findItem) {
    const addItems = state.cartItems.map((item) => {
      if (item.id === itemToAdd.id)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });

    return {
      cartItems: addItems,
      count: getCount(addItems),
      total: getTotal(addItems),
    };
  }
  const addItems = [...state.cartItems, { ...itemToAdd, quantity: 1 }];
  return {
    cartItems: addItems,
    count: getCount(addItems),
    total: getTotal(addItems),
  };
};
export const incQuantity = (state, itemToInc) => {
  const incItems = state.cartItems.map((item) => {
    if (item.id === itemToInc.id)
      return { ...item, quantity: item.quantity + 1 };
  });
  return {
    cartItems: incItems,
    count: getCount(incItems),
    total: getTotal(incItems),
  };
};

export const decQunatity = (state, itemToDec) => {
  if (itemToDec.quantity === 1) {
    const decItems = state.cartItems.filter((item) => {
      return item.id !== itemToDec.id;
    });

    return {
      cartItems: decItems,
      count: getCount(decItems),
      total: getTotal(decItems),
    };
  }
  const decItems = state.cartItems.map((item) => {
    if (item.id === itemToDec.id)
      return { ...item, quantity: item.quantity - 1 };
  });
  return {
    cartItems: decItems,
    count: getCount(decItems),
    total: getTotal(decItems),
  };
};

export const delItem = (state, itemToDel) => {
  const delCart = state.cartItems.filter((item) => {
    return item.id !== itemToDel.id;
  });
  return {
    cartItems: delCart,
    count: getCount(delCart),
    total: getTotal(delCart),
  };
};
