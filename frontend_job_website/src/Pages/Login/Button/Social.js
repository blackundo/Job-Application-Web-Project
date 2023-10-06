import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Social = () => {
  return (
    <>
      <div className="social flex items-center justify-center w-full gap-10 max-md:flex-col max-md:gap-2 ">
        <button className="btn border border-slate-400 w-32 h-11 rounded-md font-semibold px-3 max-md:w-44">
          <div className="flex gap-3 items-center justify-start justify-items-center">
            <FcGoogle className="text-2xl mr-2" /> Google
          </div>
        </button>
        <button className="btn border border-slate-400 w-32 h-11 rounded-md font-semibold px-3 max-md:w-44">
          <div className="flex gap-3 items-center justify-start justify-items-center">
            <BsFacebook className="text-2xl mr-2" /> Facebook
          </div>
        </button>
        <button className="btn border border-slate-400 w-32 h-11 rounded-md font-semibold px-3 max-md:w-44">
          <div className="flex gap-3 items-center justify-start justify-items-center">
            <FaGithub className="text-2xl mr-2" /> Github
          </div>
        </button>
      </div>
    </>
  );
};

export default Social;
