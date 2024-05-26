// ** React Imports
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

// ** Store Imports
import { selectCategoriesMap } from "../../store/categories/selector";

// ** Components Imports
import CategoryPreview from "../../components/category-perview";

const CategoriesPreview = () => {
  // ! selector
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
