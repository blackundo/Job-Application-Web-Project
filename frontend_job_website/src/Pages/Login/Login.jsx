import React, { useState } from "react";
import "./Login.css";
import From from "../../Components/Form/Layout";
import FormContent from "../../Components/Form/FormContent";

const titleInput = [
  { id: 1, placeHolder: "Email Address", type: "email", label: "Email" },
  { id: 2, placeHolder: "Your Password", type: "password", label: "Password" },
];

const Login = () => {
  return (
    <From>
      <FormContent Title={"Login"} titleInput={titleInput} titleBtn={"Login"} />
    </From>
  );
};

export default Login;
