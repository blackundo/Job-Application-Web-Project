import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import logo2 from "../../Assets/JustLogo.svg";
import { AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [toggleActive, setToggleActive] = useState(false);

  const toggleButtonClick = () => {
    setToggleActive(!toggleActive);
  };
  return (
    <header className=" max-md:backdrop-blur-lg max-md:drop-shadow-2xl ">
      <div className=" grid grid-cols-12 items-center  menu py-4 max-md:grid-cols-8">
        <div className="logo col-span-3 max-xl:col-span-2 flex justify-center items-center">
          <img src={logo} alt="" className="max-md:hidden" />
          <img src={logo2} alt="" className="md:hidden" />
        </div>

        <div className="flex border border-slate-700 rounded-lg col-span-4 max-xl:col-span-4 max-lg:col-span-3 max-md:col-span-4">
          <input
            type="text"
            placeholder="Find a job"
            className="outline-none rounded-l-lg h-9  w-1/2  text-[12px] px-3 border-r  border-slate-500"
          />
          <input
            type="text"
            placeholder="Find a Employee"
            className="outline-none rounded-r-lg h-9 w-1/2  text-[12px] px-3 "
          />
        </div>
        <div
          className={`col-span-5 max-xl:col-span-6 max-lg:col-span-7 max-md:hidden _navbarMenu ${
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
                <Link to={"/findJobs"}>Find Job </Link>
                <span>Find Talent</span>
                <span>Why JobHunter</span>
              </div>
            </div>

            {/* Change component when login success */}
            <div
              className={`flex gap-4  w-2/5 max-md:w-full max-md:flex-col items-start justify-center`}
            >
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
            </div>
          </div>
        </div>
        <div
          className="toggle hidden  max-md:flex  items-center justify-center pr-5 text-3xl font-bold max-md:col-span-2"
          onClick={toggleButtonClick}
        >
          <span className="rounded-full border w-12 h-12 flex items-center justify-center bg-blue-300/60 hover:bg-blue-500/70 hover:text-white">
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
