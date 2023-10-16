import logo from "../../Assets/Logo.svg";
function Navbar() {
  return (
    <header>
      <div className=" grid grid-cols-12 items-center max-md:grid-cols-5">
        <div className="logo col-span-3 max-md:col-span-1 max-sm:col-span-2">
          <img src={logo} alt="" />
        </div>
        <div className="flex col-span-7 items-center  max-md:col-span-2 max-sm:col-span-3">
          <div className="flex border border-slate-700 rounded-lg w-1/2 max-md:w-[90%] max-sm:w-5/6">
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
          <div className="flex  items-center justify-evenly w-full font-sans text-[16px] max-md:hidden">
            <span>Find Job </span>
            <span>Find Talent</span>
            <span>Why JobHunter</span>
          </div>
        </div>
        <div className="col-span-2 flex gap-4 max-md:col-span-2 max-sm:hidden ">
          <button className="font-bold w-36 md:text-sm  rounded-lg">
            Login
          </button>
          <button className="font-bold text-white md:text-sm bg-[#1CB8FF] h-12 w-36 rounded-lg">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
