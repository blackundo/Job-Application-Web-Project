import mapLogo from "../../Assets/vietnam_map.svg";
import React, { useState, useRef } from "react";
import "./workThroughout.css";
function WorkThroughout() {
  const cities = [
    "Ha Noi",
    "Ha Tinh",
    "Hue",
    "Da Nang",
    "Khanh Hoa",
    "Ho Chi Minh",
    "Can Tho",
    "Nha Trang",
    "Hai Phong",
    "Quy Nhon",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

  const nextSlide = () => {
    if (currentIndex < cities.length - 1) {
      setCurrentIndex(currentIndex + 1);
      slideContainerRef.current.scrollLeft +=
        slideContainerRef.current.offsetWidth;
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      slideContainerRef.current.scrollLeft -=
        slideContainerRef.current.offsetWidth;
    }
  };
  return (
    <div className="">
      <span className="text-2xl font-normal">Largest cities</span>
      <div className="flex items-center justify-center ">
        <img
          src={mapLogo}
          alt=""
          className="max-lg:w-[30rem] max-md:w-[20rem] max-sm:w-[250px]"
        />
      </div>
      <span className="underline ">All cites</span>
      <div className="flex items-center justify-center">
        <div className=" flex items-center justify-center py-4 relative lg:w-full max-lg:w-[700px] max-md:w-[500px] max-sm:w-[250px]">
          <div
            className="flex flex-nowrap overflow-x-auto w-[80%] slideshow-c gap-3"
            ref={slideContainerRef}
          >
            {cities.map((c, i) => {
              return (
                <div key={c} className="border rounded-lg border-slate-500">
                  <button className="w-[200px] whitespace-nowrap font-semibold hover:bg-blue-200 rounded-lg">
                    {c}
                  </button>
                </div>
              );
            })}
          </div>
          <button
            className="absolute top-1/2 left-10 -translate-y-1/2 text-2xl font-bold"
            onClick={prevSlide}
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 right-10 -translate-y-1/2 text-2xl font-bold"
            onClick={nextSlide}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkThroughout;
