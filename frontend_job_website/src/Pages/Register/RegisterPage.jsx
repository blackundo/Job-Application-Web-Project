import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import RegisterSuccess from "./RegisterSuccess";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import FormRegisterCandidate from "../../Components/Register/RegisterForCandidate";
import FormRegisterCompany from "../../Components/Register/RegisterForCompany";

const Register = () => {
  const location = useLocation();
  const [isRegistered, setIsRegistered] = useState(false);
  const role = new URLSearchParams(location.search).get("role");

  //console.log(role);

  let content;

  if (isRegistered) {
    content = <RegisterSuccess />;
  } else if (role === "Company") {
    content = (
      <Layout>
        <FormRegisterCompany setIsRegistered={setIsRegistered} />
      </Layout>
    );
  } else {
    content = (
      <Layout>
        <FormRegisterCandidate setIsRegistered={setIsRegistered} />
      </Layout>
    );
  }

  return <>{content}</>;
};

export default Register;
