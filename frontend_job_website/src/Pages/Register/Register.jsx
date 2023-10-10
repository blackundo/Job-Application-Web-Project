import React, { useState, useEffect } from "react";
// import Layout from "../../Components/Form/Layout";
import FormContent from "../../Components/Form/FormContent";
import Axios from "axios";
import From from "../../Components/Form/Layout";

// Axios.defaults.withCredentials = true



const titleInput = [
  { id: 1, placeHolder: "FullName", type: "text", label: "Fullname", name: "fullname" },
  { id: 2, placeHolder: "Email Address", type: "email", label: "Email", name: "email" },
  { id: 3, placeHolder: "Your Password", type: "password", label: "Password", name: "password" },
  // {
  //   id: 4,
  //   placeHolder: "Re-enter password",
  //   type: "password",
  //   label: "Re-enter Password",
  // },
];





const Register = () => {
  const [inputValues, setInputValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (inputName, newValue) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: newValue,
    }));
  };

  const handleRegister = () => {
    Axios.post("http://localhost:8080/api/auth/register", {
      fullname: inputValues.fullname,
      email: inputValues.fullname,
      password: inputValues.fullname,
    }).then((response) => {
      console.log('Registration successful', response);
    })
      .catch((error) => {
        console.error('Registration failed', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
    console.log(inputValues);
  };

  return (
    <From>
      <FormContent
        Title={"Register"}
        titleInput={titleInput}
        titleBtn={"Sign up"}
        inputValues={inputValues}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </From>
  );
};

export default Register;
