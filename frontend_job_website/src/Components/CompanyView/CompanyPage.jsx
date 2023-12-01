import img from "../../Assets/imageCP.svg";
import logo from "../../Assets/EcomdyLogo.svg";
import { useState } from "react";
import IntroductionPage from "./IntroductionPage";
function CompanyPage() {
  const [showMoreMainFields, setShowMoreMainFields] = useState(false);

  return (
    <>
      <div className="h-full">
        <div className="w-full relative z-0">
          <img src={img} alt="" className="w-full rounded-b-xl  z-0" />
          <div className=" absolute -bottom-12 left-3  max-md:-bottom-3 rounded-full z-0">
            <div className="flex items-end gap-3">
              <img
                src={logo}
                alt=""
                className="  rounded-full w-24 h-24 shadow-2xl max-md:w-10 max-md:h-10 bg-white"
              />
              <div className="flex flex-col">
                <span className="font-bold text-4xl text-emerald-400">
                  Ecomdy
                </span>
                <small>dat@ecom.com</small>
                <small>Da Nang</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t shadow-xl rounded-xl border-slate-400 mt-14 px-20">
        <IntroductionPage
          showMoreMainFields={showMoreMainFields}
          setShowMoreMainFields={setShowMoreMainFields}
        />
      </div>
      <div className=" border-t-2  border-slate-400 mt-2 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          {Array.from({ length: 5 }, (_, i) => {
            return (
              <div key={i}>
                <div className="box-hiring flex flex-col border px-20 mt-3 rounded-lg py-2 shadow-xl hover:cursor-pointer hover:bg-sky-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl">Hiring Summer</span>
                    <div className="flex gap-2">
                      <span className="text-blue-400 font-bold">Views</span>
                      <span>/</span>
                      <span className="text-yellow-400 font-bold">Edit</span>
                    </div>
                  </div>
                  <span className="font-bold">
                    Backend Java and Frontend Reactjs
                  </span>
                  <div className="flex gap-3">
                    <span>Date start: 2023-12-2</span>
                    <span>Date End: 2023-12-10</span>
                  </div>
                  <div className="flex gap-3">
                    <span>Max Salary: 1000 $</span>
                    <span>Min Salary: 2000 $</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold">Content:</span>
                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod eligendi nulla maxime laborum assumenda et beatae
                      expedita nostrum quia itaque aperiam qui repellat,
                      praesentium ut explicabo exercitationem soluta eum
                      ducimus? Minima ducimus, rem unde quidem cumque non sed
                      ipsam iusto, aliquid numquam nobis maiores a mollitia ex
                      quasi veniam eum eius nostrum ad! A, aut quae quasi
                      repudiandae doloremque odio?
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CompanyPage;
