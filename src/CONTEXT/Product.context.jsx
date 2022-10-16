import { createContext, useState } from "react";
import PRODUCTS from "../shopdata.json";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
