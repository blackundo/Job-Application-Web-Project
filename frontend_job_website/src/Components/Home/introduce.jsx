import img1 from "../../Assets/liImg.svg";
import img2 from "../../Assets/liImg2.svg";
import img3 from "../../Assets/liImg3.svg";
function introduce() {
  return (
    <>
      <div className="py-10 max-sm:px-5">
        <span className=" font-semibold text-2xl max-sm:text-[16px]">
          Your Can Trust Us
        </span>
        <div className="lg:w-3/4 py-5 max-sm:w-5/6">
          <div className="flex gap-4 py-4">
            <img src={img1} alt="" className="max-md:w-10 max-sm:w-8" />
            <div className="flex flex-col gap-3">
              <span className="font-bold text-lg max-sm:text-sm">
                We carefully screen all employee
              </span>
              <p className="font-normal max-sm:text-[12px]">
                On our platform, you will not find dubious vacacies from
                marriage angencices or call centers. Only conscientious
                employers.
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <img src={img2} alt="" className="max-md:w-10 max-sm:w-8" />
            <div className="flex flex-col gap-3">
              <span className="font-bold text-lg max-sm:text-sm">
                We carefully screen all employee
              </span>
              <p className="font-normal max-sm:text-[12px]">
                On our platform, you will not find dubious vacacies from
                marriage angencices or call centers. Only conscientious
                employers.More than 2500 people found the job they dreamed of,
                according to a survey conducted in 2022
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <img src={img3} alt="" className="max-md:w-10 max-sm:w-8" />
            <div className="flex flex-col gap-3">
              <span className="font-bold text-lg max-sm:text-sm">
                We carefully screen all employee
              </span>
              <p className="font-normal max-sm:text-[12px]">
                Every day, about 150 vacancies are published on our platform - a
                huge selection is provided
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default introduce;
