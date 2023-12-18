import { useEffect, useState } from "react";
import { IoBusinessSharp } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
import img from "../../../Assets/savedJobCD.svg";
import axiosPrivate from "../../../api/axios";
const SavedTab = () => {
  const [countItems, setCountItems] = useState(0);

  const getAllJobSaved = async () => {
    const token = JSON.parse(localStorage.getItem("Token")).access_token;
    await axiosPrivate
      .get("/api/wish/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllJobSaved();
  }, []);

  if (countItems === 0) {
    return (
      <div className="flex items-center justify-center w-full">
        <img src={img} alt="" />
      </div>
    );
  }
  return (
    <>
      {[...Array(countItems)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-start gap-5 w-full"
        >
          <span className="text-3xl">
            <IoBusinessSharp />
          </span>
          <div className="flex flex-col items-start justify-between w-full">
            <div className="flex flex-col items-start justify-start">
              <span className="text-lg font-semibold">
                Internship business developer
              </span>
              <span className="text-[0.9rem]">Data Analytics</span>
              <small className="text-[0.6rem]">Da Nang</small>
              <small className="text-[0.6rem]">saved today</small>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="p-2 rounded-lg bg-[#1CB8FF] w-32">
              Apply now
            </button>
            <span className="text-2xl">
              <GoBookmark />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default SavedTab;
