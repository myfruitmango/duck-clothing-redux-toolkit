// ** React Imports
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// ** Utils Imports
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

// ** Store Imports
import { setCategories } from "../../store/categories/reducer";

// ** Route Imports
import Category from "../category";
import CategoriesPreview from "../categories-preview";

// ** Styles SCSS Imports
import "./styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  // ! effect
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
