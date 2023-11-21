import { RiPagesFill } from "react-icons/ri";
import { BiMessageAltDetail, BiSolidUser } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import styles from "./HeaderPageCompany.module.css";
import { AiFillSetting, AiOutlineSearch } from "react-icons/ai";
// import { MdPayments } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function FiexdMenu({ isOpenMenu }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  return (
    <div
      className={`top-[4.5rem] right-3  w-auto border-2 border-slate-500 shadow-lg rounded-md p-3 bg-gray-600 z-[999] ${
        isOpenMenu ? "absolute" : "hidden"
      }`}
    >
      <ul
        className={`flex flex-col items-center justify-center gap-1 ${styles.menu} text-white`}
      >
        <li className="flex items-center justify-start gap-2">
          <span className="text-xl">
            <AiFillSetting />
          </span>
          <Link to={"account_setting"}>Employer setting</Link>
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
        {/*  <li className="flex items-center justify-start gap-2">
          <span className="text-xl">
            <MdPayments />
          </span>
          <span>Payment and invoicing</span>
        </li> */}
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
        {/*  <li className="flex items-center justify-start gap-2">
          <span className="text-xl">
            <AiFillSetting />
          </span>
          <span>Account settings</span>
        </li> */}
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
          <span onClick={handleLogOut}>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default FiexdMenu;
