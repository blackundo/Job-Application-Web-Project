import React, { useState } from "react";
import "./Login.css";
import Form from "../../Components/Form/Layout";
import FormContent from "../../Components/Form/FormContent";

const titleInput = [
  { id: 1, placeHolder: "Email Address", type: "email", label: "Email" },
  { id: 2, placeHolder: "Your Password", type: "password", label: "Password" },
];

const Login = () => {
  return (
    <Form>
      <FormContent Title={"Login"} titleInput={titleInput} titleBtn={"Login"} />
    </Form>
  );
};

export default Login;
