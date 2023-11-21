import logo from "../../Assets/Logo.svg";
import { IoBusinessSharp } from "react-icons/io5";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";
import Gravatar from "react-gravatar";
import { AiFillBell } from "react-icons/ai";
import { MdEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("Profile"))?.profile;

function HeaderPageCompany({ toggleMenu }) {
  return (
    <div className=" flex items-center justify-between border-b pb-2 border-slate-200 shadow-lg px-7  h-16  sticky top-0  backdrop-blur-lg">
      <Link to={"/company"} className="w-1/3 max-md:w-2/3 ">
        <img src={logo} alt="" className="w-52" />
      </Link>
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
              {user.email}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pl-5 gap-2 relative h-[3.5rem]  ">
          <Gravatar
            email={`${user.email}`}
            size={40}
            rating="pg"
            default="monsterid"
            className="border-x-2 rounded-full border-separate border-x-sky-500"
          />
          {/* <RxAvatar className="text-5xl" /> */}
          <span className="max-md:hidden">{user.email}</span>
          <span className={`text-3xl`} onClick={toggleMenu}>
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderPageCompany;
