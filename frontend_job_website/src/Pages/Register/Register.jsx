import React, { useState } from "react";
import Layout from "../../Components/Form/Layout";
import FormContent from "../../Components/Form/FormContent";
import RegisterSuccess from "./RegisterSuccess";

const titleInput = [
  { id: 1, placeHolder: "Email Address", type: "email", label: "Email" },
  { id: 2, placeHolder: "Your Password", type: "password", label: "Password" },
  {
    id: 3,
    placeHolder: "Re-enter password",
    type: "password",
    label: "Re-enter Password",
  },
];

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      {!isRegistered ? (
        <Layout>
          <FormContent
            Title={"Register"}
            titleInput={titleInput}
            titleBtn={"Sign up"}
            setIsRegistered={setIsRegistered}
          />
        </Layout>
      ) : (
        <RegisterSuccess />
      )}
    </>
  );
};

export default Register;
