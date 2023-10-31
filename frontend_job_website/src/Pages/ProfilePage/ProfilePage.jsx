import { useState } from "react";
import Navbar from "../../Components/Home/Navbar";
import FooterHome from "../../Components/Home/FooterHome";
import Profile from "../../Components/Profile/Profile";
import Information from "../../Components/Profile/Edit/Information";
import Degree from "../../Components/Profile/Degree/Degree";
import { Outlet } from "react-router-dom";

export const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
        <Navbar />
        <Outlet />
        <FooterHome />
      </div>
    </div>
  );
};
