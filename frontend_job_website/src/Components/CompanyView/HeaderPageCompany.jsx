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

function HeaderPageCompany({ toggleMenu, isOpenMenu }) {
  return (
    <div className=" flex items-center justify-between border-b pb-2 border-slate-200 shadow-lg px-7 relative h-16">
      <div className="w-1/3 max-md:w-2/3 ">
        <img src={logo} alt="" className="w-52" />
      </div>
      <div className="w-2/3  max-md:w-1/3 flex items-center justify-evenly">
        <div className="flex items-center justify-evenly gap-2 pr-5 w-full max-md:border-r">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl max-md:text-2xl">
              <TbHelpSquareRoundedFilled />
            </span>
            <span className="max-xl:hidden">Help?</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl max-md:text-2xl">
              <AiFillBell />
            </span>
            <span className="max-xl:hidden"> Announcement</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl max-md:text-2xl">
              <MdEmail />
            </span>
            <span className="max-xl:hidden">Message</span>
          </div>
        </div>
        <div className="flex items-center justify-start w-full px-5 border-x gap-3 border-slate-400 max-lg:hidden">
          <span>
            <IoBusinessSharp />
          </span>
          <div className="flex flex-col ">
            <span>Name</span>
            <span className="text-sm font-normal text-slate-600 ">
              datdo775@gmail.com
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pl-5 gap-2 relative h-[3.5rem]  ">
          <Gravatar
            email={`datdo775@gmail.com`}
            size={40}
            rating="pg"
            default="monsterid"
            className="border-x-2 rounded-full border-separate border-x-sky-500"
          />
          {/* <RxAvatar className="text-5xl" /> */}
          <span className="max-md:hidden">datdo775@gmail.com</span>
          <span className={`text-3xl`} onClick={toggleMenu}>
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
      <div
        className={`top-[4.5rem] right-3  w-auto border-2 border-black shadow-lg rounded-md p-3 ${
          isOpenMenu ? "absolute" : "hidden"
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
  );
}

export default HeaderPageCompany;
