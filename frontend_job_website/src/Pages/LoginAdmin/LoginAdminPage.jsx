import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginAdminPage.module.css";
import { useState } from "react";
import bgLeft from "../../Assets/bgLoginAdmin.svg";
import axiosPrivate from "../../api/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ToastCustom } from "../../Components/ToastCustom/ToastCustom";
import { informationUser } from "../../Utils/TokenToProfile";
const LoginAdminPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [error, setError] = useState(false);
  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);
  const handleLogin = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    await axiosPrivate
      .post("api/auth/authenticate", formData)
      .then((res) => {
        toast.dismiss(loadingToastId);
        const token = res.data;
        console.log(token);
        dispatch({
          type: "LOGIN",
          payload: token,
        });
        toast.dismiss(loadingToastId);
        ToastCustom.success("Welcome to back!", { autoClose: 2500 });
        // dispatch(informationUser(token?.access_token));
        navigate("/admin");
      })
      .catch((err) => {
        toast.dismiss(loadingToastId);
        ToastCustom.error("🫨Login failed. Please try again.");
        console.log(err);
      });
  };
  return (
    <div className="flex max-md:h-screen ">
      <div className=" h-screen w-[506px]  object-cover drop-shadow-2xl max-md:hidden">
        <div className="logo w-full flex items-center justify-center py-10  bg-[#010a0f] ">
          <img src={bgLeft} alt="" />
          {/* <img
              src={subBgLeft}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            /> */}
        </div>
      </div>
      <div
        className={` grid place-content-center relative max-md:w-full ${styles.right}`}
      >
        <div className="box-login w-[23rem] ">
          <h1 className="text-2xl font-semibold font-serif pb-7 tracking-widest">
            Login
          </h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdminPage;
