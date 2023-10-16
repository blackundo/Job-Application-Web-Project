import FooterHome from "../../Components/Home/FooterHome";
import FormContact from "../../Components/Home/FormContact";
import Navbar from "../../Components/Home/Navbar";
import OurEmployers from "../../Components/Home/OurEmployers";
import Popular from "../../Components/Home/Popular";
import SlideShow from "../../Components/Home/SlideShow";
import WorkThroughout from "../../Components/Home/WorkThroughout";

import Introduce from "../../Components/Home/introduce";

function Home() {
  return (
    <div className="flex items-center justify-center py-4 ">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[800px] sm:w-[700px] ">
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
