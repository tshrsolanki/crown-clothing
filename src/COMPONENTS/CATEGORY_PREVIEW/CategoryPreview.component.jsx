import "./CategoryPreview.style.scss";

import React from "react";
import { ProductCard } from "../PRODUCT_CARD/ProductCard.component";
import { Link } from "react-router-dom";

export const CategoryPreview = ({ product, title }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
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
