import "./CategoryPreview.style.scss";

import React from "react";
import { ProductCard } from "../PRODUCT_CARD/ProductCard.components";

export const CategoryPreview = ({ product, title }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview ">
        {product
          .filter((_, idx) => {
            return idx < 4;
          })
          .map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
      </div>
    </div>
  );
};
