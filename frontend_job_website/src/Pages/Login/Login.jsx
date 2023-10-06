import React, { useState } from "react";
import Input from "../../Components/InputForm/Input";
import Social from "./Button/Social";
import "./Login.css";
import Logo from "../../Assets/Logo.svg";

const Login = () => {
  return (
    <div className="flex max-md:h-screen ">
      <div className="left w-1/3 h-screen bg-blue-500 object-cover drop-shadow-2xl max-md:hidden">
        <div className="logo w-full flex items-center justify-center py-10">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="right w-2/3 bg-slate-300 grid place-content-center relative max-md:w-full">
        <span className="absolute top-6 right-14">
          Have already account?
          <span className="text-[#000084] cursor-pointer">Login</span>
        </span>
        <div className="box-login w-[23rem] ">
          <h1 className="text-2xl font-semibold font-serif pb-7">Login</h1>
          <div className="form-login w-full ">
            <Input label="Email" type="email" placeholder="Email Address" />
            <Input
              label="Password"
              type="password"
              placeholder="Your Password"
            />
            <button className="bg-[#133FA0] w-full h-12 rounded-md text-white my-3 text-[1.2rem] font-normal">
              Sign in
            </button>
            <div className="flex items-center w-full ">
              <span className="flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"></span>
              <span className="uppercase font-semibold">OR</span>
              <span className="flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"></span>
            </div>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Login;
