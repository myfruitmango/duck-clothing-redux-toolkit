import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user/reducer";
import { categoriesReducer } from "./categories/reducer";
import { cartReducer } from "./cart/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
