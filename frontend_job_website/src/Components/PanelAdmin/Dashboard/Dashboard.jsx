import logo from "../../../Assets/JustLogo.svg";

import {
  BsLayoutSidebarInset,
  BsReverseLayoutSidebarReverse,
} from "react-icons/bs";

function Dashboard({ handleCloseDashboard, open, children }) {
  return (
    <div
      className={` sticky top-0 h-[1px] max-sm:col-span-1 ${
        !open ? "col-span-1" : "col-span-3 "
      } `}
    >
      <div className="flex items-center justify-end pr-3">
        <div className="flex items-center justify-between w-4/5">
          <div className="h-20 flex justify-center items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className={`w-[2.625rem] h-[2.625rem] max-lg:w-[4rem] max-lg:h-[4rem]  ${
                !open ? "hidden" : ""
              }
      `}
            />
            <div
              className={`text-[#00AFFF] text-2xl flex flex-col leading-6 max-lg:hidden max-xl:text-lg  ${
                !open ? "hidden" : ""
              }`}
            >
              <strong>JobHunter</strong>
              <strong>Admin</strong>
            </div>
          </div>
          <div
            className="text-2xl max-sm:hidden"
            onClick={handleCloseDashboard}
          >
            {open ? (
              <BsReverseLayoutSidebarReverse />
            ) : (
              <BsLayoutSidebarInset />
            )}
          </div>
        </div>
      </div>

      {/* Dashboard */}
      {children}
    </div>
  );
}

export default Dashboard;
