import "./Shop.style.scss";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../CATEGORIES_PREVIEW/CategoriesPreview.component";
import { Category } from "../../COMPONENTS/CATEGORY/Category.component";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
