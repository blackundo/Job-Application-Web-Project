import Logo from "../Assets/Logo.svg";
import styles from "./Layout.module.css";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex max-md:min-h-screen ">
        <div
          className={`${styles.left} w-1/3 h-screen  object-cover drop-shadow-2xl max-md:hidden`}
        >
          <div className="logo w-full flex items-center justify-center py-10">
            <img src={Logo} alt="" className="z-50" />
          </div>
        </div>
        <div className="right w-2/3 bg-slate-300 grid place-content-center relative max-md:w-full ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
