import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import logo2 from "../../Assets/JustLogo.svg";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageDetail, BiSolidUser } from "react-icons/bi";
import Gravatar from "react-gravatar";
import axiosPrivate from "../../api/axios";

function Navbar() {
  const [toggleActive, setToggleActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const acc = JSON.parse(localStorage.getItem("Profile"));
  const role = acc?.user?.role?.roleName ?? null;
  // console.log(acc?.user?.email);
  const toggleButtonClick = () => {
    setToggleActive(!toggleActive);
  };

  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

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
          <Link to={"/"}>
            <img src={logo} alt="" className="max-md:hidden" />
            <img src={logo2} alt="" className="md:hidden" />
          </Link>
        </div>

        <div
          className={`col-span-9  max-lg:col-span-7 max-md:hidden _navbarMenu ${
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
              </div>
            </div>

            <div
              className={`flex gap-4  w-2/5 max-md:w-full max-md:flex-col items-start justify-center`}
            >
              {role === null && (
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
              )}
              {role === "Candidate" && (
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
                        to={"/user/job_applied"}
                        className="text-start w-full hover:bg-sky-200 h-12 flex items-center justify-center rounded-lg border-b-2 hover:border-t-2 border-sky-500 cursor-pointer transition-all"
                      >
                        Job Applied
                      </Link>
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
            </div>
          </div>
        </div>
        <div
          className="toggle hidden  max-md:flex  items-center justify-center pr-5 text-3xl font-bold max-md:col-span-4 relative "
          onClick={toggleButtonClick}
        >
          {/* <MenuCustoms /> */}
          <span className="rounded-full border w-12 h-12 flex items-center justify-center bg-blue-300/60 hover:bg-blue-500/70 hover:text-white">
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
