import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
function Input({ label, type, placeholder }) {
  return (
    <div className="flex flex-col py-2">
      <label htmlFor="" className="font-normal text-x">
        {label}:
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="pl-3 w-full h-[40px] rounded-md"
        />
        <button className="absolute top-1/2 right-0 text-2xl -translate-x-1/2 -translate-y-1/2"></button>
      </div>
    </div>
  );
}

export default Input;
