import React, { useContext } from "react";
import SHOP_DATA from "../shopdata.json";
import { ProductContext } from "../CONTEXT/Product.context";

import { ProductCard } from "../COMPONENTS/PRODUCT_CARD/ProductCard.components";

import "./Shop.style.scss";
export const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product, i) => {
        return <ProductCard key={i} product={product} />;
      })}
    </div>
  );
};
