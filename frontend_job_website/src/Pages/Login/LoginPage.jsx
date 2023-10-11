import React, { useEffect, useState } from "react";
import "./Login.css";
import Form from "../../Layouts/Layout/Layout";
import FormContent from "../../Components/Login/Login";

const Login = () => {
  return (
    <Form>
      <FormContent Title={"Login"} titleBtn={"Login"} />
    </Form>
  );
};

export default Login;
