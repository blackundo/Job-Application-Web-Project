import Logo from "../../Assets/Logo.svg";
function Layout() {
  return (
    <div>
      <div className="flex max-md:h-screen ">
        <div className="right w-2/3 bg-slate-300 grid place-content-center relative max-md:w-full">
          Hello
        </div>
        <div className="left w-1/3 h-screen bg-blue-500 object-cover drop-shadow-2xl max-md:hidden">
          <div className="logo w-full flex items-center justify-center py-10">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
