import Navbar from "../../Components/Home/Navbar";
import SlideShow from "../../Components/Home/SlideShow";
import Popular from "../../Components/Home/Popular";
import WorkThroughout from "../../Components/Home/WorkThroughout";
import FooterHome from "../../Components/Home/FooterHome";
import FormContact from "../../Components/Home/FormContact";
import OurEmployers from "../../Components/Home/OurEmployers";
import Introduce from "../../Components/Home/introduce";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
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
