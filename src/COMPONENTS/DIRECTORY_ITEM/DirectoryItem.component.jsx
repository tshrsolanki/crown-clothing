import React from "react";
import { useNavigate } from "react-router-dom";
import "./DirectoryItem.style.scss";

export const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const routeHandler = () => {
    navigate(category.route);
  };
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="body" onClick={routeHandler}>
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
