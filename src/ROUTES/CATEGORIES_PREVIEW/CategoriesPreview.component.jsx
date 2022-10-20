import React, { useContext, Fragment } from "react";
import { CategoriesContext } from "../../CONTEXT/Categories.context";
import { CategoryPreview } from "../../COMPONENTS/CATEGORY_PREVIEW/CategoryPreview.component";
export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, i) => {
        const product = categoriesMap[title];

        return <CategoryPreview key={i} title={title} product={product} />;
      })}
    </Fragment>
  );
};
