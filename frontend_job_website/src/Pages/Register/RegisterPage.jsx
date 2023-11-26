import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import RegisterSuccess from "./RegisterSuccess";
<<<<<<< HEAD

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import FormRegisterCandidate from "../../Components/Register/RegisterForCandidate";
import FormRegisterCompany from "../../Components/Register/RegisterForCompany";
=======
import FormContent from "../../Components/Register/Register";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505

const Register = () => {
  const location = useLocation();
  const [isRegistered, setIsRegistered] = useState(false);
  const role = new URLSearchParams(location.search).get("role");

  //console.log(role);

  let content;

  if (isRegistered) {
    content = <RegisterSuccess />;
<<<<<<< HEAD
  } else if (role === "Company") {
    content = (
      <Layout>
        <FormRegisterCompany setIsRegistered={setIsRegistered} />
=======
  } else if (role === "Employer") {
    content = (
      <Layout>
        <FormContent
          Title={"Register for Employer"}
          setIsRegistered={setIsRegistered}
        />
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
      </Layout>
    );
  } else {
    content = (
      <Layout>
<<<<<<< HEAD
        <FormRegisterCandidate setIsRegistered={setIsRegistered} />
=======
        <FormContent
          Title={"Register for Candidate"}
          setIsRegistered={setIsRegistered}
        />
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
      </Layout>
    );
  }

  return <>{content}</>;
};

export default Register;
