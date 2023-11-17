import { useState } from "react";

import Social from "../Social/Social";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { informationUser } from "../../Utils/TokenToProfile";
import { ToastCustom } from "../ToastCustom/ToastCustom";
import axios from "axios";
import axiosPrivate from "../../api/axios";

const FormContent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    await axiosPrivate({
      method: "POST",
      maxBodyLength: Infinity,
      url: "http://localhost:80/api/authenticate",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then((res) => {
        toast.dismiss(loadingToastId);
        const token = res.data;
        // console.log(token.access_token);
        dispatch({
          type: "LOGIN",
          payload: token,
        });
        toast.dismiss(loadingToastId);
        ToastCustom.success("Welcome to back!", { autoClose: 2500 });
        // console.log(res.data);
        // console.log(token?.access_token);
        dispatch(informationUser(token?.access_token));
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((err) => {
        toast.dismiss(loadingToastId);
        ToastCustom.error("🙅‍♂️Registration failed. Please try again.");
        console.log(err);
      });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <span className="absolute top-6 right-14">
        Don’t have an account?
        <Link to={"/chooseRole"} className="text-[#000084] cursor-pointer">
          Register now
        </Link>
      </span>

      <div className="box-login w-[23rem] pt-20 max-md:w-[19rem]">
        <h1 className="text-2xl font-semibold font-serif pb-7">Login</h1>
        {/* {error && (
          <p className="text-red-600">
            Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.
          </p>
        )} */}
        <div className="form-login w-full ">
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
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <Link
            to={"/forgotPass"}
            className="text-blue-600 text-sm font-normal"
          >
            Forgot Password?
          </Link>
          <button
            className="bg-[#133FA0] w-full h-12 rounded-md text-white my-3 text-[1.2rem] font-normal"
            onClick={handleLogin}
          >
            Login
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
