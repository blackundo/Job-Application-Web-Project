import React, { useEffect, useState } from "react";
import "./Login.css";
import Form from "./Form/Layout";
import FormContent from "./Form/FormContent";

const Login = () => {
  return (
    <Form>
      <FormContent Title={"Login"} titleBtn={"Login"} />
    </Form>
  );
};

export default Login;
