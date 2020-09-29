import React from "react";
import "./login.scss";
import { Form } from "formik";
import InputComponent from "../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponent";

interface IloginProps {
  email: String;
  password: String;
  handleSubmit: () => void;
}
const LoginForm = (props: IloginProps) => {
  const { handleSubmit } = props;
  return (
    <div className="logCard">
      <Form className="loginForm">
        <InputComponent
          name="email"
          placeholder="Email"
          className="emailInput"
        />
        <InputComponent
          name="password"
          placeholder="Password"
          className="passwordInput"
        />

        <ButtonComponent
          type="primary"
          label="Login"
          onClick={() => handleSubmit()}
          className="login-btn"
        />
      </Form>
    </div>
  );
};
export default LoginForm;
