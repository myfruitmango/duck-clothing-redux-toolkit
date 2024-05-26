import { CATEGORIESS_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIESS_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
