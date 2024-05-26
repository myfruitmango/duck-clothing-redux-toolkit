// ** React Imports
import React from "react";
import { Outlet } from "react-router";

import Directory from "../../components/directory";
// ** Components Imports

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
