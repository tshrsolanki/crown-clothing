import "./Shop.style.scss";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../CATEGORIES_PREVIEW/CategoriesPreview.component";
import { Category } from "../CATEGORY/Category.component";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
