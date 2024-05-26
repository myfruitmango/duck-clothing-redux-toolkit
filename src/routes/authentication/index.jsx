import SignUpForm from "../../components/sign-up-form";
import SignInForm from "../../components/sign-in-form";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authenticataion-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;