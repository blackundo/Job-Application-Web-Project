import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Social from "../Social/Social";
import { toast } from "react-toastify";
import { ToastCustom } from "../ToastCustom/ToastCustom";
import axiosPrivate from "../../api/axios";

const FormRegisterCompany = ({ setIsRegistered }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role");
  // console.log(role);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    await axiosPrivate
      .post(`/api/auth/register?role=${role}`, formData)
      .then((res) => {
        toast.dismiss(loadingToastId);
        ToastCustom.success("🦄 Register Success!", { autoClose: 1500 });
        setTimeout(() => {
          setIsRegistered(true);
        }, 2000);
        console.log(res.data);
      })
      .catch((err) => {
        toast.dismiss(loadingToastId);
        ToastCustom.error("🦄 Registration failed. Please try again.", {
          autoClose: 1500,
        });

        console.log(err);
      });
  };

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
        <h1 className="text-2xl font-semibold font-serif pb-7">Company</h1>
        <div className="form-login w-full ">
          <div className="flex flex-col py-2">
            <label htmlFor="" className="font-normal text-x">
              Company Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="companyName"
                placeholder="DPD"
                className="pl-3 w-full h-[40px] rounded-md"
                value={formData.companyName}
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
          {/* <div className="flex flex-col py-2">
            <label htmlFor="" className="font-normal text-x">
              Re-enter Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="rePassword"
                placeholder="Re-enter password"
                className="pl-3 w-full h-[40px] rounded-md"
              />
            </div>
          </div> */}
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

export default FormRegisterCompany;
