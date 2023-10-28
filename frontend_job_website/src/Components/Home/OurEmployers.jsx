import fptLogo from "../../Assets/fptLogo.svg";
import EcomdyLogo from "../../Assets/EcomdyLogo.svg";
import NasaLogo from "../../Assets/NasaLogo.svg";
import ShoppeLogo from "../../Assets/ShoppeLogo.svg";
import googleLogo from "../../Assets/GoogleLogo.svg";
import { useRef, useState } from "react";
import styles from "./OurEmployers.module.css";

const Employers = [
  {
    logo: fptLogo,
    name: "FPT Software IT",
  },
  {
    logo: EcomdyLogo,
    name: "Ecomdy Marking",
  },
  {
    logo: NasaLogo,
    name: "NASA IT",
  },
  {
    logo: ShoppeLogo,
    name: "Shoppe Marketing",
  },
  {
    logo: googleLogo,
    name: "Google IT",
  },
  {
    logo: googleLogo,
    name: "Google IT",
  },
  {
    logo: googleLogo,
    name: "Google IT",
  },
  {
    logo: googleLogo,
    name: "Google IT",
  },
  {
    logo: googleLogo,
    name: "Google IT",
  },
  {
    logo: googleLogo,
    name: "Google IT",
  },
  {
    logo: googleLogo,
    name: "Google IT",
  },
];

function OurEmployers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

  const nextSlide = () => {
    if (currentIndex < Employers.length - 1) {
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
    <div className="py-10 max-sm:px-5">
      <span className="font-semibold text-2xl max-sm:text-xl">
        Our Employers
      </span>
      <div className="flex items-center justify-center  w-full">
        <div className="flex items-center justify-center py-4 relative lg:w-full max-lg:w-[700px] max-md:w-[500px] max-sm:w-[250px]">
          <div
            className={`flex overflow-x-auto w-[80%] max-md:w-[90%] ${styles.slide}`}
            ref={slideContainerRef}
          >
            {Employers.map((emp, i) => {
              return (
                <div className="" key={i}>
                  <div className="w-[200px] flex flex-col items-center justify-center">
                    <img
                      src={emp.logo}
                      alt=""
                      className="w-14 h-14 border-2 border-black rounded-full"
                    />
                    <span className="items-center justify-center text-center">
                      {emp.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="absolute top-1/2 -left-1  max-md:-left-16 max-sm:-left-14 -translate-y-1/2 text-3xl font-semibold"
            onClick={prevSlide}
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 -right-1 max-md:-right-16 max-sm:-right-14 -translate-y-1/2 text-3xl font-semibold"
            onClick={nextSlide}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurEmployers;
