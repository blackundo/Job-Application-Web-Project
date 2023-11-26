<<<<<<< HEAD
import { GoArrowLeft } from "react-icons/go";
import styles from "./Information.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import { ToastContainer } from "react-toastify";
function Information() {
  const [resettle, setResettle] = useState(false);

=======
/* eslint-disable react/prop-types */
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./information.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Information({ back }) {
  const [resettle, setResettle] = useState(false);
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
  const navigate = useNavigate();
  const handleDisplayResettle = () => {
    setResettle((r) => !r);
  };
<<<<<<< HEAD
  const handleUpdateProfile = () => {
    ToastCustom.success("Update Success!", { autoClose: 2500 });
    //ToastCustom.error("Update Error, Please check filed!", { autoClose: 2500 });
  };

  return (
    <div className="flex items-center justify-center max-md:mt-[5.625rem] ">
      <ToastContainer
        position="bottom-right"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="w-[34.81rem] max-md:w-[25rem] max-sm:w-[20rem] flex items-center justify-center">
        <div className="w-full pt-3">
          <span className="text-2xl font-bold cursor-pointer">
            <GoArrowLeft onClick={() => navigate(-1)} />
          </span>
          <span className="font-bold text-[1.75rem]">Contact information</span>
          <div className={`flex flex-col w-full gap-3 ${styles.form}`}>
            <label htmlFor="lastName" className="">
              FullName
            </label>
            <input type="text" placeholder="Do Phuoc Dat" />
            <label htmlFor="firstName">Your Birthday</label>
            <input type="date" />
            <label htmlFor="headings">Address</label>
            <input type="text" placeholder="Phuoc" />
            <label htmlFor="numPhone">Phone Number</label>
            <input type="text" placeholder="+325235258" />
            <label htmlFor="numPhone">Gender</label>
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={"male"}
                  className="w-4"
                />{" "}
                male
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={"female"}
                  className="w-4"
                />{" "}
                Female
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={"xxx"}
                  className="w-4"
                />{" "}
                xxx
              </div>
            </div>
=======
  return (
    <div className="flex items-center justify-center  ">
      <div className="w-[34.81rem]  flex items-center justify-center">
        <div className="w-full pt-3">
          <AiOutlineArrowLeft
            className="text-xl font-bold cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span className="font-bold text-[1.75rem]">Contact information</span>
          <div className="flex flex-col form w-full gap-3">
            <label htmlFor="lastName" className="">
              Last Name
              <input type="text" placeholder="Dat" />
            </label>
            <label htmlFor="firstName">
              First Name
              <input type="text" placeholder="Do" />
            </label>
            <label htmlFor="headings">
              Headings
              <input type="text" placeholder="Phuoc" />
            </label>
            <label htmlFor="numPhone">
              Phone Number
              <input type="text" placeholder="+325235258" />
            </label>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
            <div className="flex flex-col items-start justify-center gap-1 ">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-[1.56rem] h-[1.56rem] " />
                <label htmlFor="publicNumberPhone">
                  Show my number on JobHunter
                </label>
              </div>
              <small className="text-[0.624rem] text-[#858585] ">
                By submitting the form with this box checked, you confirm that
                you are the primary user and registrant of the entered phone
                number and that you agree to receive calls (including using
                artificial voice or pre-recording), text messages and WhatsApp
                messages from Indeed, and employers using Indeed at the phone
                number provided at above.
              </small>
            </div>
          </div>
          <div className="flex flex-col  gap-4">
<<<<<<< HEAD
            <div className="flex flex-col items-start justify-center pt-5  gap-2  pb-2">
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="dat@gmail.com"
                className={`w-full h-[2.75rem] px-3 outline-none border border-black rounded-md `}
              />
=======
            <div className="flex flex-col items-start justify-center pt-5  gap-2 border-b border-black pb-2">
              <label htmlFor="Email" className="text-lg font-bold">
                Email
              </label>
              <div className="flex items-center justify-between w-full">
                <input type="email" disabled placeholder="Dat@gmail.com" />
                <span className="flex items-center justify-center text-blue-400 gap-3 cursor-pointer font-bold">
                  Correct <AiOutlineArrowRight />
                </span>
              </div>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="font-bold text-lg">Work location</span>
              <span>This helps connect you to nearby jobs</span>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="font-bold text-lg">Country</span>
              <div className="flex items-start justify-between w-full">
                <span>Vietnam</span>
                <span className="text-blue-400 text-lg font-semibold cursor-pointer">
                  Change
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg font-normal">Street address</span>
                <span className="text-slate-400">Show only to you</span>
              </div>
              <input
                type="text"
                placeholder="Nguyen Van Linh"
                className="border outline-none border-black w-full rounded-lg h-[2.75rem] px-3"
              />
            </div>
            <div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg font-normal">City, State</span>
              </div>
              <input
                type="text"
                placeholder="Da Nang"
                className="border outline-none border-black w-full rounded-lg h-[2.75rem] px-3"
              />
            </div>
            <div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg font-normal">Postal Code</span>
              </div>
              <input
                type="text"
                placeholder="50000"
                className="border outline-none border-black w-full rounded-lg h-[2.75rem] px-3"
              />
            </div>
            <div className="flex flex-col gap-3 resettle">
              <span>Resettlement</span>
              <div className="flex items-center justify-start gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 "
                  onClick={handleDisplayResettle}
                />
                <span>Yes, I am willing to resettle</span>
              </div>
              {resettle && (
                <div className="flex flex-col items-start justify-center pl-10 gap-2 subResettle">
                  <label
                    htmlFor=""
                    className="flex gap-2 items-center justify-center"
                  >
                    <input
                      type="radio"
                      name="resettle"
                      id=""
                      className="w-5 h-5"
                    />
                    Any where
                  </label>
                  <label
                    htmlFor=""
                    className="flex gap-2 items-center justify-center"
                  >
                    <input
                      type="radio"
                      name="resettle"
                      id=""
                      className="w-5 h-5"
                    />
                    Just close...
                  </label>
                </div>
              )}
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex items-center justify-center pt-8">
            <button
              className="border p-1 w-28 bg-slate-400 text-xl font-bold text-white rounded-lg hover:bg-sky-400"
              onClick={handleUpdateProfile}
            >
              save
            </button>
          </div>
=======
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
        </div>
      </div>
    </div>
  );
}

export default Information;
