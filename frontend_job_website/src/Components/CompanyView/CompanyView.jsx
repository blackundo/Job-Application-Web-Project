import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";
import MenuItem from "./MenuItem";
import { Outlet } from "react-router-dom";
import logo from "../../Assets/Logo.svg";
import { IoBusinessSharp } from "react-icons/io5";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";
import { AiFillBell, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import {
  MdEmail,
  MdOutlineKeyboardArrowDown,
  MdPayments,
} from "react-icons/md";
import Gravatar from "react-gravatar";
import { RiPagesFill } from "react-icons/ri";
import { BiMessageAltDetail, BiSolidUser } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";

function CompanyView() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleDashboard = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleMenu = () => {
    setIsOpenMenu((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className="flex h-screen">
      <div
        className={` bg-slate-700 flex flex-col items-center justify-start `}
      >
        <div
          className="flex items-center justify-end w-full px-3 text-3xl cursor-pointer"
          onClick={toggleDashboard}
        >
          {isOpen ? (
            <BsLayoutSidebarInsetReverse className="text-white" />
          ) : (
            <BsLayoutSidebarInset className="text-white" />
          )}
        </div>
        <div>
          <MenuItem open={isOpen} />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 1, width: 0 }}
              animate={{ height: "auto", opacity: 1, width: "250px" }}
              exit={{ height: 0, opacity: 0, width: 0 }}
              transition={{ duration: 0.6 }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full ">
        <div className=" flex items-center justify-between border-b pb-2 border-slate-200 shadow-lg px-7 relative">
          <div className="w-1/3">
            <img src={logo} alt="" className="w-52" />
          </div>
          <div className="w-2/3 flex items-center justify-evenly">
            <div className="flex items-center justify-center gap-2  pr-5   w-full">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">
                  <TbHelpSquareRoundedFilled />
                </span>
                <span>Help?</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">
                  <AiFillBell />
                </span>
                <span> Announcement</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">
                  <MdEmail />
                </span>
                <span>Message</span>
              </div>
            </div>
            <div className="flex items-center justify-start w-full px-5 border-x gap-3 border-slate-400">
              <span>
                <IoBusinessSharp />
              </span>
              <div className="flex flex-col">
                <span>Name</span>
                <span className="text-sm font-normal text-slate-600 ">
                  datdo775@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start w-full px-5 gap-2 relative h-[3.5rem]">
              <Gravatar
                email={`datdo775@gmail.com`}
                size={40}
                rating="pg"
                default="monsterid"
                className="border-x-2 rounded-full border-separate border-x-sky-500"
              />
              {/* <RxAvatar className="text-5xl" /> */}
              <span>datdo775@gmail.com</span>
              <span className={`text-3xl`} onClick={toggleMenu}>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
          </div>
          <div
            className={`top-[4.5rem] right-3  w-auto border-2 border-black shadow-lg rounded-md p-3 ${
              isOpenMenu ? "hidden" : "absolute"
            }`}
          >
            <ul className="flex flex-col items-start justify-center gap-6">
              <li className="flex items-center justify-start gap-2">
                <span className="text-xl">
                  <AiFillSetting />
                </span>
                <span>Employer setting</span>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-xl">
                  <RiPagesFill />
                </span>
                <span>Company pages</span>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-xl">
                  <BiSolidUser />
                </span>
                <span>User</span>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-xl">
                  <MdPayments />
                </span>
                <span>Payment and invoicing</span>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-xl">
                  <BiMessageAltDetail />
                </span>
                <span>Contact</span>
              </li>
              <span className="w-full">
                <hr />
              </span>
              <li>datdo775@gmail.com</li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-xl">
                  <AiFillSetting />
                </span>
                <span>Account settings</span>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-xl">
                  <AiOutlineSearch />
                </span>
                <span>Visit Hunterjob for Seekers</span>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-xl">
                  <LuLogOut />
                </span>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CompanyView;
