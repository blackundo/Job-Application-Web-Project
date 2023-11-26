import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import logo2 from "../../Assets/JustLogo.svg";
import { AiOutlineClose } from "react-icons/ai";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageDetail, BiSolidUser } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import Gravatar from "react-gravatar";
import axiosPrivate from "../../api/axios";

function Navbar() {
  const [toggleActive, setToggleActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const acc = JSON.parse(localStorage.getItem("Profile"));
  const role = acc?.user?.role?.roleName ?? null;
  console.log(acc?.user?.email);
=======
import { useDispatch, useSelector } from "react-redux";
import { IoIosNotifications } from "react-icons/io";
import { BiSearchAlt, BiSolidMessageDetail, BiSolidUser } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

function Navbar() {
  const [toggleActive, setToggleActive] = useState(false);
  const pf = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
  const toggleButtonClick = () => {
    setToggleActive(!toggleActive);
  };

  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

<<<<<<< HEAD
  const informationUser = () => {
    const accessToken = JSON.parse(localStorage.getItem("Token"))?.access_token;
    axiosPrivate
      .get(
        "/api/candidate/test",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header className=" max-md:backdrop-blur-lg max-md:drop-shadow-2xl ">
      <div className=" grid grid-cols-12 items-center  menu py-4 max-md:grid-cols-8 ">
        <div className="logo max-lg:col-start-2 col-span-3  flex justify-center items-center max-md:col-span-4">
=======
  return (
    <header className=" max-md:backdrop-blur-lg max-md:drop-shadow-2xl ">
      <div className=" grid grid-cols-12 items-center  menu py-4 max-md:grid-cols-8">
        <div className="logo col-span-3 max-xl:col-span-2 flex justify-center items-center">
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
          <Link to={"/"}>
            <img src={logo} alt="" className="max-md:hidden" />
            <img src={logo2} alt="" className="md:hidden" />
          </Link>
        </div>

<<<<<<< HEAD
        <div
          className={`col-span-9  max-lg:col-span-7 max-md:hidden _navbarMenu ${
=======
        <div className="flex border border-slate-700 rounded-lg col-span-4 max-xl:col-span-4 max-lg:col-span-3 max-md:col-span-4">
          <div
            className="mx-4 rounded-lg   border-black relative w-full h-10 text-center 
            
          "
          >
            {/* <input
              type="text"
              placeholder="Search by Vacancies"
              className="rounded-lg outline-none absolute w-full h-9 text-sm px-3"
            />
            <BiSearchAlt className="absolute top-1/2 right-0 -translate-y-1/2 " /> */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-rose-500 to-sky-500 bg-clip-text text-transparent tracking-[0.2em]">
              Group Hunter
            </h1>
          </div>
        </div>
        <div
          className={`col-span-5 max-xl:col-span-6 max-lg:col-span-7 max-md:hidden _navbarMenu ${
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
            toggleActive ? "active" : ""
          }  `}
        >
          <div
            className={`flex col-span-10 items-center  justify-between optionMenu`}
          >
            <span
              className="close text-3xl hidden max-md:block"
              onClick={() => setToggleActive(false)}
            >
              <AiOutlineClose />
            </span>
            <div className="flex w-3/5  max-md:w-full ">
              <div
                className={`flex items-center justify-evenly w-full font-sans  text-[16px] flex-nowrap `}
              >
<<<<<<< HEAD
                <Link
                  to={"/findJobs"}
                  className="hover:border-b-2 hover:border-t-2 border-sky-400 transition-all cursor-pointer"
                >
                  Find Job
                </Link>
                <span className="hover:border-b-2 hover:border-t-2 border-sky-400 transition-all cursor-pointer">
                  Find Talent
                </span>
                <span className="hover:border-b-2 hover:border-t-2 border-sky-400 transition-all cursor-pointer">
                  Why JobHunter
                </span>
=======
                <Link to={"/findJobs"}>Find Job </Link>
                <span>Find Talent</span>
                <span>Why JobHunter</span>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
              </div>
            </div>

            <div
              className={`flex gap-4  w-2/5 max-md:w-full max-md:flex-col items-start justify-center`}
            >
<<<<<<< HEAD
              {role === null && (
=======
              {user === null ? (
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
                <>
                  <Link
                    to={"/login"}
                    className="font-bold w-36 md:text-sm h-12  rounded-2xl hover:bg-[#1CB8FF]/20 flex items-center justify-center"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/chooseRole"}
                    className="font-bold text-white md:text-sm bg-[#1CB8FF] h-12 w-36 rounded-2xl flex justify-center items-center"
                  >
                    Sign up
                  </Link>
                </>
<<<<<<< HEAD
              )}
              {role === "Candidate" && (
=======
              ) : (
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
                <ul className="flex items-center justify-center gap-3">
                  <NavLink to={"/Message/3423"}>
                    <BiSolidMessageDetail className="text-2xl" />
                  </NavLink>
                  <li>
                    <IoIosNotifications className="text-2xl" />
                  </li>
                  <li>
                    <BiSolidUser className="text-2xl" />
                  </li>
                  <li className="relative avatarMenu">
<<<<<<< HEAD
                    <Gravatar
                      email={`${acc?.user?.email}`}
                      size={48}
                      rating="pg"
                      default="monsterid"
                      className="border-x-2 rounded-full border-separate border-x-sky-500"
                    />
                    {/*   {acc.user && acc ? (
                      <Gravatar
                        email={`${acc.user.email}`}
                        size={48}
                        rating="pg"
                        default="monsterid"
                        className="border-x-2 rounded-full border-separate border-x-sky-500"
                      />
                    ) : (
                      <RxAvatar className="text-5xl" />
                    )} */}
                    <ul className="absolute z-30 border-2 border-collapse p-2 w-52  right-1/4 max-md:left-full max-md:top-3 bg-white/50  rounded-lg backdrop-blur-md  grid-cols-1 place-items-center place-content-start gap-3 pt-2 hidden">
                      <Link
                        to={"/user"}
                        className="text-start w-full hover:bg-sky-200 h-12 flex items-center justify-center rounded-lg border-b-2 hover:border-t-2 border-sky-500 cursor-pointer transition-all"
                        onClick={informationUser}
                      >
                        Profile
                      </Link>
                      <Link
                        to={"job_applied"}
                        className="text-start w-full hover:bg-sky-200 h-12 flex items-center justify-center rounded-lg border-b-2 hover:border-t-2 border-sky-500 cursor-pointer transition-all"
                      >
                        Job Applied
                      </Link>
=======
                    {pf && pf != undefined ? (
                      <img
                        src={`${pf[0].avatar}`}
                        alt=""
                        className="text-5xl rounded-full border drop-shadow-xl"
                      />
                    ) : (
                      <RxAvatar className="text-5xl" />
                    )}

                    <ul className="absolute z-30 border-2 border-collapse p-2 w-52  right-1/4 max-md:left-full max-md:top-3 bg-white/50  rounded-lg backdrop-blur-md  grid-cols-1 place-items-center place-content-start gap-3 pt-2 hidden">
                      <Link
                        to={"/profileU"}
                        className="text-start w-full hover:bg-sky-200 h-12 flex items-center justify-center rounded-lg border-b-2 hover:border-t-2 border-sky-500 cursor-pointer transition-all"
                      >
                        Profile
                      </Link>
                      <li className="text-start w-full hover:bg-sky-200 h-12 flex items-center justify-center rounded-lg border-b-2 hover:border-t-2 border-sky-500 cursor-pointer transition-all">
                        Job Applied
                      </li>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
                      <li className="text-start w-full hover:bg-sky-200 h-12 flex items-center justify-center rounded-lg border-b-2 hover:border-t-2 border-sky-500 cursor-pointer transition-all">
                        Find Jobs
                      </li>
                      <Link
                        to={"/"}
                        onClick={handleLogOut}
                        className="font-bold text-white md:text-sm bg-[#1CB8FF] h-12 w-full rounded-2xl flex justify-center items-center
                        "
                      >
                        Logout
                      </Link>
                    </ul>
                  </li>
                </ul>
              )}
<<<<<<< HEAD
              {role === "Company" && (
                <ul className="flex items-center justify-center gap-3">
                  <NavLink to={"/Message/3423"}>
                    <BiSolidMessageDetail className="text-2xl" />
                  </NavLink>
                  <li>
                    <IoIosNotifications className="text-2xl" />
                  </li>
                  <li>
                    <BiSolidUser className="text-2xl" />
                  </li>
                  <li className="relative avatarMenu">
                    <Gravatar
                      email={`${acc?.user?.email}`}
                      size={48}
                      rating="pg"
                      default="monsterid"
                      className="border-x-2 rounded-full border-separate border-x-sky-500"
                    />
                    {/* {acc.profile && acc ? (
                      <Gravatar
                        email={`${acc?.user?.email}`}
                        size={48}
                        rating="pg"
                        default="monsterid"
                        className="border-x-2 rounded-full border-separate border-x-sky-500"
                      />
                    ) : (
                      <RxAvatar className="text-5xl" />
                    )} */}
                    <ul className="absolute z-30 border-2 border-collapse p-2 w-52  right-1/4 max-md:left-full max-md:top-3 bg-white/50  rounded-lg backdrop-blur-md  grid-cols-1 place-items-center place-content-start gap-3 pt-2 hidden">
                      <Link
                        to={"/company"}
                        className="text-start w-full hover:bg-sky-200 h-12 flex items-center justify-center rounded-lg border-b-2 hover:border-t-2 border-sky-500 cursor-pointer transition-all"
                      >
                        Page Comapany
                      </Link>
                      <Link
                        to={"/"}
                        onClick={handleLogOut}
                        className="font-bold text-white md:text-sm bg-[#1CB8FF] h-12 w-full rounded-2xl flex justify-center items-center
                        "
                      >
                        Logout
                      </Link>
                    </ul>
                  </li>
                </ul>
              )}
=======
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
            </div>
          </div>
        </div>
        <div
<<<<<<< HEAD
          className="toggle hidden  max-md:flex  items-center justify-center pr-5 text-3xl font-bold max-md:col-span-4 relative "
          onClick={toggleButtonClick}
        >
          {/* <MenuCustoms /> */}
=======
          className="toggle hidden  max-md:flex  items-center justify-center pr-5 text-3xl font-bold max-md:col-span-2"
          onClick={toggleButtonClick}
        >
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
          <span className="rounded-full border w-12 h-12 flex items-center justify-center bg-blue-300/60 hover:bg-blue-500/70 hover:text-white">
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
