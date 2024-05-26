// ** React Imports
import React from "react";

// ** Components Imports
import SignUpForm from "../../components/sign-up-form";
import SignInForm from "../../components/sign-in-form";

// ** Styles SCSS Imports
import "./styles.scss";

const Authentication = () => {
  return (
    <div className="authenticataion-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
