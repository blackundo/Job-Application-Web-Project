/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
// import img from "../../Assets/imgProfile.svg";
import { HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import InputCV from "./InputCV";
<<<<<<< HEAD
import Gravatar from "react-gravatar";
import { BsGenderAmbiguous } from "react-icons/bs";
import { LuSchool } from "react-icons/lu";

function Profile() {
  const info = JSON.parse(localStorage.getItem("Profile"));
  // console.log(info);
  const {
    email,
    fullName,
    age,
    gender,
    universityOrCollege,
    city,
    uploadCv: fileCV,
  } = info.user;

  if (info === null && info === undefined) return;
=======

function Profile() {
  const pf = JSON.parse(localStorage.getItem("profile"));

  // console.log(URL.createObjectURL(file.name));

  if (pf === null && pf === undefined) return;
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505

  return (
    <div className="  flex items-center justify-center max-md:mt-[5.625rem]">
      <div className="max-w-[34.81rem] ">
        <div className="flex items-center justify-center pt-10 w-full">
          <div className="flex items-center justify-evenly w-full">
<<<<<<< HEAD
            <span
              className={`text-3xl font-bold ${
                fullName ? "" : "text-rose-400"
              }`}
            >
              {fullName || "Update Your Profile"}
            </span>
            <div className="h-[6.25rem] ms-w-[6.25rem] flex items-center justify-center border rounded-full">
              {/* <img
                src={avatar}
                alt=""
                className="shadow rounded-full max-w-full h-full align-middle border-none"
              /> */}
              <Gravatar
                email={`${email}`}
                size={100}
                rating="pg"
                default="monsterid"
                className=" rounded-full max-w-full h-full align-middle border-2 shadow-xl border-slate-300"
=======
            <span className="text-3xl font-bold">{pf[0].full_name}</span>
            <div className="h-[6.25rem] ms-w-[6.25rem] flex items-center justify-center border rounded-full">
              <img
                src={pf[0].avatar}
                alt=""
                className="shadow rounded-full max-w-full h-full align-middle border-none"
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="summaryContact border bg-[#f3f2f1] p-4 my-4 shadow-md rounded-lg ">
=======
        <div className="summaryContact border bg-[#f3f2f1] px-4 my-4 shadow-md rounded-lg ">
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
          <div className="flex items-center  justify-between">
            <ul className="flex flex-col gap-4 items-start justify-center">
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <HiMail />
<<<<<<< HEAD
                Email: <span>{email}</span>
              </li>
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <AiFillPhone />
                Age: <span>{age}</span>
              </li>
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <FaLocationDot />
                Address: <span>{city}</span>
              </li>
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <BsGenderAmbiguous />
                Gender: <span>{gender ? "Male" : "Female"}</span>
              </li>
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <LuSchool />
                University or College: <span>{universityOrCollege}</span>
=======
                Email: <span>{pf[0].email}</span>
              </li>
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <AiFillPhone />
                Number Phone: <span>{pf[0].phone}</span>
              </li>
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <FaLocationDot />
                Address: <span>{pf[0].address}</span>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
              </li>
            </ul>
            <Link to={"editP"}>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
<<<<<<< HEAD
        <InputCV initFile={fileCV} />
=======
        <InputCV initFile={pf} />
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505

        <div className="py-4 flex flex-col gap-7">
          <div className="border-b-2 border-slate-500 w-full">
            <span className="font-semibold text-[1.75rem] ">
              Improve your job matching
            </span>
          </div>
          <NavLink
            to={"degree"}
            className="border-b-2 border-slate-500 w-full flex items-center justify-between"
          >
            <div className="flex flex-col justify-center items-start">
              <span className="font-bold">Degree</span>
              <span>Emphasize your skills and experience</span>
            </div>
            <IoIosArrowForward className="text-2xl cursor-pointer" />
          </NavLink>
          <div className="border-b-2 border-slate-500 w-full flex items-center justify-between">
            <div className="flex flex-col justify-center items-start">
              <span className="font-bold">Job favorite</span>
              <span>Save specifics like desired minimum wage and schedule</span>
            </div>
            <IoIosArrowForward className="text-2xl" />
          </div>
          <div className="border-b-2 border-slate-500 w-full flex items-center justify-between">
            <div className="flex flex-col justify-center items-start">
              <span className="font-bold">Ready working</span>
              <span>
                Let the employer know that you are willing to start working as
                soon as possible
              </span>
            </div>
            <IoIosArrowForward className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
