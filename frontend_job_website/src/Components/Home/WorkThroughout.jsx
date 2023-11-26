import mapLogo from "../../Assets/vietnam_map.svg";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./workThroughout.css";
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

function WorkThroughout() {
  const transition = {
    type: "spring",
    duration: 0.8,
  };

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
    //console.log(slideContainerRef.current.offsetWidth);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      slideContainerRef.current.scrollLeft -=
        slideContainerRef.current.offsetWidth;
    }
  };
  return (
    <div className="max-sm:px-5">
      <span className="font-semibold text-2xl max-sm:text-xl">
        Largest cities
      </span>
      <div className="flex items-center justify-center ">
        <motion.img
          src={mapLogo}
          alt=""
          className="max-lg:w-[30rem] max-md:w-[20rem] max-sm:w-[250px]"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, duration: 1.5 }}
        />
      </div>
      <span className="underline font-semibold text-2xl max-sm:text-xl">
        All cites
      </span>
      <div className="flex items-center justify-center w-full">
        <div className=" flex items-center justify-center py-4 relative lg:w-full max-lg:w-[700px] max-md:w-[500px] max-sm:w-[250px]">
          <div
            className="flex flex-nowrap overflow-x-auto w-[80%] max-md:w-[90%] slideshow-c gap-3"
            ref={slideContainerRef}
          >
            {cities.map((c) => {
              return (
                <div key={c} className="border rounded-lg border-slate-500">
                  <button className="w-[210px] max-sm:w-[213px] whitespace-nowrap font-semibold hover:bg-blue-200 rounded-lg">
                    {c}
                  </button>
                </div>
              );
            })}
          </div>
          <button
            className="absolute top-1/2 left-10  max-md:-left-16 max-sm:-left-14 -translate-y-1/2 text-3xl font-semibold"
            onClick={prevSlide}
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 right-10 max-md:-right-16 max-sm:-right-14 -translate-y-1/2 text-3xl font-semibold"
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
