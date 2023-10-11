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
      </div>
    </div>
  );
}

export default Input;
