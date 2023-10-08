import React from "react";
import Input from "../InputForm/Input";
import Social from "../../Pages/Login/Button/Social";
import { Link } from "react-router-dom";

const FormContent = ({ Title, titleInput, titleBtn, setIsRegistered }) => {
  const handleRegister = () => {
    if (Title === "Register") {
      // Thực hiện đăng ký ở đây và sau khi thành công:
      // Đặt trạng thái isRegistered thành true để hiển thị thành phần RegisterSuccess
      setIsRegistered(true);

      // Sau 3 giây, chuyển đến trang khác
      setTimeout(() => {
        // Thực hiện chuyển trang ở đây
        window.location.href = "/login"; // Thay đổi đường dẫn đích
      }, 3000);
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
        <div className="form-login w-full ">
          {titleInput.map((item, i) => {
            return (
              <Input
                key={item.id}
                label={item.label}
                placeholder={item.placeHolder}
                type={item.type}
              />
            );
          })}
          <button
            className="bg-[#133FA0] w-full h-12 rounded-md text-white my-3 text-[1.2rem] font-normal"
            onClick={() => handleRegister()}
          >
            {titleBtn}
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
