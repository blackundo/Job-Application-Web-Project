import Navbar from "../../Components/Home/Navbar";
import SlideShow from "../../Components/Home/SlideShow";
import Popular from "../../Components/Home/Popular";
import WorkThroughout from "../../Components/Home/WorkThroughout";
import FooterHome from "../../Components/Home/FooterHome";
import FormContact from "../../Components/Home/FormContact";
import OurEmployers from "../../Components/Home/OurEmployers";
import Introduce from "../../Components/Home/introduce";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosPrivate from "../../api/axios";
import { ToastCustom } from "../../Components/ToastCustom/ToastCustom";
import { informationUser } from "../../Utils/TokenToProfile";
import { useCallback } from "react";
import { useEffect } from "react";
import DialogVerify from "../../Components/DialogCustoms/Dialog";
function Home() {
  const acc = JSON.parse(localStorage.getItem("Profile"));
  const verifyEmail = acc?.user?.status;
  const [title, setTitle] = useState(
    "Please verify your email, easy to use other functions!"
  );
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleActiveEmail = async () => {
    await axiosPrivate
      .get(`/api/auth/verified`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data) {
          console.log(data);
          const access_token = JSON.parse(
            localStorage.getItem("Token")
          ).access_token;
          setOpen(false);
          ToastCustom.success("Verify Success.", { autoClose: 1500 });
          dispatch(informationUser(access_token));
          navigate("/");
        } else {
          setTitle("You have not verified email!");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleCheckStatusEmail = useCallback(() => {
    if (
      !verifyEmail &&
      verifyEmail != null &&
      acc.user.role.roleName === "Candidate"
    ) {
      console.log("Email not verify");
      setOpen(true);
    }
  }, [verifyEmail]);

  useEffect(() => {
    handleCheckStatusEmail();
  }, [handleCheckStatusEmail]);

  return (
    <div className="flex items-center justify-center relative">
      {open && (
        <DialogVerify
          open={open}
          handleActiveEmail={handleActiveEmail}
          title={title}
        />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] max-sm:w-[700px] ">
        <Navbar />
        <SlideShow />
        <Introduce />
        <Popular />
        <WorkThroughout />
        <OurEmployers />
        <FormContact />
        <FooterHome />
      </div>
    </div>
  );
}

export default Home;
