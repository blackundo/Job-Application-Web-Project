import React, { useEffect, useReducer, useState } from "react";
import loginReducer from "../../Stores/loginReducer";

import Social from "../Social/Social";
import { Link } from "react-router-dom";
import axios from "axios";
const initialState = {
  email: "",
  password: "",
  isLoggedin: false,
  errorMessage: "",
};
const FormContent = ({ Title, setIsRegistered }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(function () {
    axios
      .get("http://localhost:9000/Users")
      .then((res) => {
        //console.log(res.data);
        setUsers(res.data);
        //dispatch({ type: "data", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /*  const handleInputChange = (e) => {
    dispatch({
      type: "INPUT_CHANGE",
      fieldName: e.target.name,
      payload: e.target.value,
    });
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }; */
  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setError(false);
      console.log("Login successful");
    } else {
      setError(true);
      console.log("Login failed");
    }
  };

  return (
    <>
      {Title === "Login" ? (
        <span className="absolute top-6 right-14">
          Don’t have an account?
          <Link to={"/Register"} className="text-[#000084] cursor-pointer">
            Register now
          </Link>
        </span>
      ) : (
        <span className="absolute top-6 right-14">
          Have already account?
          <Link to={"/login"} className="text-[#000084] cursor-pointer">
            Login
          </Link>
        </span>
      )}

      <div className="box-login w-[23rem] ">
        <h1 className="text-2xl font-semibold font-serif pb-7">{Title}</h1>
        {error && (
          <p className="text-red-600">
            Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.
          </p>
        )}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
