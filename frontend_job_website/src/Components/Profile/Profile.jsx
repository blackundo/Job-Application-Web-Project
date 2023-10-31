/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import img from "../../Assets/imgProfile.svg";
import { HiMail } from "react-icons/hi";
import { AiFillPhone, AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { FaLocationDot, FaRegFilePdf } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { RiPhoneFindFill } from "react-icons/ri";
import { TbReplace } from "react-icons/tb";
import { useState } from "react";
import logoFile from "../../Assets/logoFile.svg";
import { Link, NavLink } from "react-router-dom";

function Profile() {
  const pf = JSON.parse(localStorage.getItem("profile"));
  const [option, setOption] = useState(false);
  const [nameFile, setNameFile] = useState("");
  const handleDisplayOption = () => {
    setOption((o) => !o);
  };

  const handleOnchangeFile = (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length === 0) {
      setNameFile("You have not uploaded your CV file yet ");
    } else {
      const realPathArray = e.target.value.split("\\");
      setNameFile(realPathArray[realPathArray.length - 1]);
    }
  };

  if (pf === null && pf === undefined) return;

  return (
    <div className="  flex items-center justify-center max-md:mt-[5.625rem]">
      <div className="max-w-[34.81rem] ">
        <div className="flex items-center justify-center pt-10 w-full">
          <div className="flex items-center justify-evenly w-full">
            <span className="text-3xl font-bold">{pf[0].full_name}</span>
            <div className="h-[6.25rem] ms-w-[6.25rem] flex items-center justify-center border rounded-full">
              <img
                src={pf[0].avatar}
                alt=""
                className="shadow rounded-full max-w-full h-full align-middle border-none"
              />
            </div>
          </div>
        </div>
        <div className="summaryContact border bg-[#f3f2f1] px-4 my-4 shadow-md rounded-lg ">
          <div className="flex items-center  justify-between">
            <ul className="flex flex-col gap-4 items-start justify-center">
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <HiMail />
                Email: <span>{pf[0].email}</span>
              </li>
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <AiFillPhone />
                Number Phone: <span>{pf[0].phone}</span>
              </li>
              <li className="flex items-center justify-start gap-3 text-[#767676]">
                <FaLocationDot />
                Address: <span>{pf[0].address}</span>
              </li>
            </ul>
            <Link to={"editP"}>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div className="flex flex-col  gap-3">
          <span className="text-2xl font-bold">CV</span>
          <div className="border-[1.5px] border-black shadow-md rounded-lg h-[7.81rem] flex items-center justify-between px-3">
            <div className="flex items-center justify-center">
              <input
                type="file"
                name="file-input"
                id="file-input"
                className="hidden"
                onChange={(e) => handleOnchangeFile(e)}
              />
              {/*custom input*/}
              <img src={logoFile} alt="" />
              <div className="flex flex-col items-start justify-center px-3 ">
                <label
                  htmlFor="file-input"
                  className="text-[1.2rem] cursor-pointer"
                >
                  {nameFile}
                </label>
                <span className="flex items-center justify-center gap-3">
                  <AiOutlineEye />
                  Public
                </span>
              </div>
            </div>
            <IoIosArrowForward />
          </div>
          <div className="border-[1.5px] border-black shadow-md rounded-lg h-[7.81rem] flex items-center justify-between px-3 relative transition-all">
            <div className="flex items-center justify-center gap-3">
              <FaRegFilePdf className="text-5xl" />
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg font-bold">
                  CV-DoPhuocDat-Junior.Pdf
                </span>
                <small>Important today</small>
              </div>
            </div>
            <BsThreeDotsVertical
              className="hover:cursor-pointer"
              onClick={handleDisplayOption}
            />
            <div
              className={`border w-[12rem] h-[10.1rem] absolute top-1/2  left-full max-md:left-[60%] bg-slate-300 rounded-lg ${
                option ? "" : "hidden"
              } `}
            >
              <ul className="flex flex-col items-start justify-evenly h-full px-2">
                <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-blue-600">
                  <RiPhoneFindFill className="text-2xl" />
                  See
                </li>
                <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-blue-600">
                  <AiOutlineDownload className="text-2xl" />
                  Download
                </li>
                <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-blue-600">
                  <TbReplace className="text-2xl" />
                  File replacement
                </li>
                <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-red-600 text-red-300">
                  <ImBin className="text-2xl " />
                  Erase
                </li>
              </ul>
            </div>
          </div>
        </div>
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
