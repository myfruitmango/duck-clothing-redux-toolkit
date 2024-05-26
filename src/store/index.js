// ** @reduxjs/toolkit Imports
import { configureStore } from "@reduxjs/toolkit";

// ** Redux Logger Imports
import logger from 'redux-logger';

// ** Root Reducer Imports
import { rootReducer } from './reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares), // { serializableCheck: false }
});
