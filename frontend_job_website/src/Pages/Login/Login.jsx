import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
const Login = () => {
  const [openPass, setOpenPass] = useState(false);
  const handleOpenPass = () => {
    setOpenPass((open) => !open);
  };
  return (
    <div>
      <div className="flex ">
        <div className="right w-1/3 h-screen bg-blue-500"></div>
        <div className="left w-2/3 bg-slate-300 grid place-content-center">
          <div className="box-login w-[23rem] h-full ">
            <h1 className="text-2xl font-semibold font-serif pb-7">Login</h1>
            <div className="form-login w-full ">
              <div className="flex flex-col ">
                <label htmlFor="" className="font-normal text-x">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="pl-3  w-full h-8"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className="font-normal text-x">
                  Password:
                </label>
                <div className="relative ">
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="pl-3 w-full h-8"
                  />
                  <button
                    className="absolute top-1/2 right-0 text-2xl -translate-x-1/2 -translate-y-1/2"
                    onClick={handleOpenPass}
                  >
                    {openPass ? <FaEyeSlash /> : <IoEyeSharp />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
