import React from "react";
import { Form } from "formik";
import "./signup.scss";
import InputComponent from "../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponent";

interface IsignupProps {
  firstName: String;
  lastName: String;
  address: String;
  email: String;
  password: String;
  handleSubmit: () => void;
}
const SignUpForm = (props: IsignupProps) => {
  const { handleSubmit } = props;
  return (
    <div className="signCard">
      <Form className="signupForm">
        <InputComponent
          name="firstName"
          placeholder="FirstName"
          className="firstName"
        />
        <InputComponent
          name="lastName"
          placeholder="LastName"
          className="lastName"
        />
        <InputComponent
          name="address"
          placeholder="Address"
          className="address"
        />
        <InputComponent name="email" placeholder="Email" className="email" />
        <InputComponent
          name="password"
          placeholder="Password"
          className="password"
        />
        <InputComponent
          name="confirmPassword"
          placeholder="Confirm Password"
          className="confPass"
        />
        <ButtonComponent
          type="primary"
          label="SignUp"
          onClick={() => handleSubmit()}
          className="signup-btn"
        />
      </Form>
    </div>
  );
};
export default SignUpForm;
