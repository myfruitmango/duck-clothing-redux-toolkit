// ** React Imports
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// ** Utils Imports
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";

// ** Store Imports
import { setCurrentUser } from "./store/user/reducer";

// ** Components Imports
import Navigation from "./routes/navigation";

// ** Routes Imports
import Home from "./routes/home";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";
import Authentication from "./routes/authentication";

const App = () => {
  const dispatch = useDispatch();

  // ! effect
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user)
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubcribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
