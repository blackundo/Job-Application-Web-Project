import { useEffect } from "react";
import Layout from "../../Layouts/Layout";

import Logo from "../../Assets/JustLogo.svg";
const LoginSuccess = () => {
  const steps = [
    "Please confirm your new account bt clicking on the link submitted",
    "Go to Login enter new already account.",
  ];
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  });
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-items-center">
          <div className="logo flex flex-col items-center justify-items-center">
            <img src={Logo} alt="" className="w-24 h-24" />
            <h2 className="font-mono text-[30px] tracking-widest">
              Thanks for Register
            </h2>
          </div>
          <div className="py-2 w-2/3 text-center">
            <span className="font-thin tracking-widest">
              Welcome to JobHunter! Your personal link activation has been sent
              to your Email address
            </span>
          </div>
        </div>
        <div className="grid place-content-center">
          <h1 className="py-4 pl-4 font-normal text-xl">What is next ?</h1>
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 items-start flex-col w-[450px] max-sm:w-[300px]">
              {steps?.map((stepContent, i) => {
                return (
                  <div key={i} className="flex items-center gap-2 ">
                    <span className="w-[20px] h-[20px] mx-4 p-4 text-white rounded-full bg-[#000084] grid place-content-center">
                      {i + 1}
                    </span>
                    <span className="font-normal leading-relaxed ">
                      {stepContent}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginSuccess;
