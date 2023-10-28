import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Social from "../Social/Social";

const FormContent = ({ Title, setIsRegistered }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role");
  console.log(role);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    role: {
      roleName: "User",
    },
  });
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [uniqueId, setUniqueId] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/Users").then((res) => {
      let newId;
      do {
        newId = generateUniqueId();
      } while (res.data.includes());
      setUniqueId(newId);
    });
  }, []);

  const handleRegister = async () => {
    setLoad(true);
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: {
        role_id: uniqueId,
        roleName: "User",
      },
    };
    await axios
      .post("http://localhost:9000/Users", dataToSend)
      .then((res) => {
        setLoad(false);
        console.log("success", res.data);
        setIsRegistered(true);
      })
      .catch((err) => {
        setLoad(true);
        console.log(err);
      });
  };
  function generateUniqueId() {
    return "id_" + Math.random().toString(36).substr(2, 9);
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <span className="absolute top-6 right-14">
        Have already account?
        <Link to={"/login"} className="text-[#000084] cursor-pointer">
          Login
        </Link>
      </span>

      <div className="box-login w-[23rem] ">
        <h1 className="text-2xl font-semibold font-serif pb-7">{Title}</h1>
        {error && (
          <p className="text-red-600">
            Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.
          </p>
        )}
        {load && <span>Loader</span>}
        <div className="form-login w-full ">
          <div className="flex flex-col py-2">
            <label htmlFor="" className="font-normal text-x">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="pl-3 w-full h-[40px] rounded-md"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="" className="font-normal text-x">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="pl-3 w-full h-[40px] rounded-md"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="" className="font-normal text-x">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="pl-3 w-full h-[40px] rounded-md"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="" className="font-normal text-x">
              Re-enter Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="rePassword"
                placeholder="Re-enter password"
                className="pl-3 w-full h-[40px] rounded-md"
                value={formData.rePassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            className="bg-[#133FA0] w-full h-12 rounded-md text-white my-3 text-[1.2rem] font-normal"
            onClick={handleRegister}
          >
            Register
          </button>
          <div className="flex items-center w-full ">
            <span className="flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"></span>
            <span className="uppercase font-semibold">OR</span>
            <span className="flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"></span>
          </div>
        </div>
        <Social />
      </div>
    </>
  );
};

export default FormContent;
