import React from "react";
import { Link, Outlet } from "react-router-dom";
import Buttons from "../../Components/Buttons/Buttons";
import { Navbar } from "../../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <div className="bg-blue-500 w-full h-screen">
        <Navbar></Navbar>
        {/* 
        <Outlet /> */}
      </div>
    </>
  );
};

export default Layout;
