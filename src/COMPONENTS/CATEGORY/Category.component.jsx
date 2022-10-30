import React, { useState, useContext, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../COMPONENTS/PRODUCT_CARD/ProductCard.component";
import { CategoriesContext } from "../../CONTEXT/Categories.context";
import "./Category.style.scss";
export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setproducts] = useState([]);
  useEffect(() => {
    setproducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map((product, i) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </Fragment>
  );
};
