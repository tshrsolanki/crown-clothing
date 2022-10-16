import React from "react";
import "./CategoryItem.style.scss";

export const CategoryItem = (props) => {
  return (
    <div className="categories-container">
      {props.category.map((category) => {
        return (
          <div key={category.id} className="category-container">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${category.imageUrl})` }}
            />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
