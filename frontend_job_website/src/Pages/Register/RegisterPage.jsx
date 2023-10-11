import React, { useState } from "react";
import Layout from "../../Layouts/Layout/Layout";
import RegisterSuccess from "./RegisterSuccess";
import FormContent from "../../Components/Register/Register";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      {!isRegistered ? (
        <Layout>
          <FormContent Title={"Register"} setIsRegistered={setIsRegistered} />
        </Layout>
      ) : (
        <RegisterSuccess />
      )}
    </>
  );
};

export default Register;