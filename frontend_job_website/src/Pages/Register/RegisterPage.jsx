import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import RegisterSuccess from "./RegisterSuccess";
import FormContent from "../../Components/Register/Register";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const [isRegistered, setIsRegistered] = useState(false);
  const role = new URLSearchParams(location.search).get("role");

  //console.log(role);

  let content;

  if (isRegistered) {
    content = <RegisterSuccess />;
  } else if (role === "Employer") {
    content = (
      <Layout>
        <FormContent
          Title={"Register for Employer"}
          setIsRegistered={setIsRegistered}
        />
      </Layout>
    );
  } else {
    content = (
      <Layout>
        <FormContent
          Title={"Register for Candidate"}
          setIsRegistered={setIsRegistered}
        />
      </Layout>
    );
  }

  return <>{content}</>;
};

export default Register;
