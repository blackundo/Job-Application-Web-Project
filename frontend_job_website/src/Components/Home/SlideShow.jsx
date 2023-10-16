import slideImg from "../../Assets/slideShowImage1.svg";
import { BiSearchAlt } from "react-icons/bi";
function SlideShow() {
  return (
    <>
      <div className=" grid grid-cols-6 mt-10 gap-3">
        <div className=" col-span-3 flex flex-col items-start  justify-center max-md:col-span-6 max-md:items-center">
          <div className="py-4">
            <div className="font-semibold text-3xl py-3">
              <p>Where IT</p> <p>Dreams Become</p>
              <p>Professional Realities.</p>
            </div>
            <span>Find your dream job today !</span>
          </div>
          <div className="mx-4 rounded-lg border  border-black relative w-[250px] h-10">
            <input
              type="text"
              placeholder="Search by Vacancies"
              className="rounded-lg outline-none absolute w-full h-9 text-sm px-3"
            />
            <BiSearchAlt className="absolute top-1/2 right-2 -translate-y-1/2" />
          </div>
        </div>
        <div className="col-span-3  items-center pl-10 flex max-md:hidden">
          <img src={slideImg} alt="" className="w-80" />
        </div>
      </div>
    </>
  );
}

export default SlideShow;
