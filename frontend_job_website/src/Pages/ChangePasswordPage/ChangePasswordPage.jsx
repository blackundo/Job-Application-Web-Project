import ChangePassword from "../../Components/ChangePasswod/ChangePassword";
import FooterHome from "../../Components/Home/FooterHome";
import Navbar from "../../Components/Home/Navbar";

function ChangePasswordPage() {
  return (
    <div className="flex items-center justify-center relative">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] max-sm:w-[700px] ">
        <Navbar />
        <ChangePassword />

        <FooterHome />
      </div>
    </div>
  );
}

export default ChangePasswordPage;
