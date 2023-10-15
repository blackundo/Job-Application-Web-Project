import Layout from "../../Layouts/Layout";

import Social from "../../Components/Social/Social";

function ForgotPassword() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-items-center">
        <div className="logo flex flex-col items-center justify-items-center">
          <h2 className="font-mono text-[30px] tracking-widest">
            Forgot password
          </h2>
        </div>
        <div className="py-2 w-1/3 text-start">
          <span className="">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </span>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="rounded-md pl-3 w-full h-9 mt-6 "
            />
          </div>
          <button className="bg-[#133FA0] w-full h-10 rounded-md text-white my-3 text-[1.2rem] font-normal">
            Reset Password
          </button>
          <div className="flex items-center w-full ">
            <span className="flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"></span>
            <span className="uppercase font-semibold">OR</span>
            <span className="flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"></span>
          </div>
        </div>

        <Social />
      </div>
    </Layout>
  );
}

export default ForgotPassword;
