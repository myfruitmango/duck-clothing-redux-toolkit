// ** React Imports
import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// ** Store Imports
import { selectCategoriesMap } from "../../store/categories/selector";

// ** Components Imports
import ProductCard from "../../components/product-card";

// ** Styles SCSS Imports
import "./styles.scss";

const Category = () => {
  // ! params
  const { category } = useParams();

  // ! selector
  const categoriesMap = useSelector(selectCategoriesMap);

  // ! state
  const [products, setProducts] = useState(categoriesMap[category]);

  // ! effect
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
