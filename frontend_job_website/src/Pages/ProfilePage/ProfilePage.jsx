import { useState } from "react";
import Navbar from "../../Components/Home/Navbar";
import FooterHome from "../../Components/Home/FooterHome";
import Profile from "../../Components/Profile/Profile";
import Information from "../../Components/Profile/Edit/Information";
import Degree from "../../Components/Profile/Degree/Degree";

export const ProfilePage = () => {
  const [editInfo, setEditInfo] = useState(false);
  const [openDegree, setOpenDegree] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
        <Navbar />
        {!editInfo ? (
          openDegree ? (
            <Degree setOpenDegree={setOpenDegree} />
          ) : (
            <Profile setEditInfo={setEditInfo} setOpenDegree={setOpenDegree} />
          )
        ) : (
          <Information back={setEditInfo} />
        )}

        <FooterHome />
      </div>
    </div>
  );
};
