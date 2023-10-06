/* import { motion } from "framer-motion";
import { useState } from "react"; */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import LoginSuccess from "./Pages/Register/RegisterSuccess";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="loginSuccess" element={<LoginSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </>
  );
}

export default App;
