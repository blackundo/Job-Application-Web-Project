import { useState } from "react";

import Social from "../Social/Social";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

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
    await axios({
      method: "POST",
      url: "http://localhost:80/api/auth/authenticate",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: formData,
    })
      .then((res) => {
        toast.dismiss(loadingToastId);
        toast("🦄 Register Success!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(res.data);
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        navigate("/");
      })
      .catch((err) => {
        toast.dismiss(loadingToastId);
        toast.error("🦄 Registration failed. Please try again.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
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
        limit={1}
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
