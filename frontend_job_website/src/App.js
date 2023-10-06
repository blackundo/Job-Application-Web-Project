/* import { motion } from "framer-motion";
import { useState } from "react"; */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Layout from "./Layouts/Layout/Layout";
function App() {
  return (
    /*  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter> */
    <Login />
  );
}

export default App;
