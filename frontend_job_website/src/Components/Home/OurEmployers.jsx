import fptLogo from "../../Assets/fptLogo.svg";
import EcomdyLogo from "../../Assets/EcomdyLogo.svg";
import NasaLogo from "../../Assets/NasaLogo.svg";
import ShoppeLogo from "../../Assets/ShoppeLogo.svg";
import googleLogo from "../../Assets/GoogleLogo.svg";

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
];

function OurEmployers() {
  return (
    <div className="py-10">
      <span className="font-semibold text-xl">Our Employers</span>
      <div className="grid grid-cols-5 max-sm:grid-cols-3 gap-6 place-items-center">
        {Employers.map((emp, i) => {
          return (
            <div
              className="flex flex-col w-28 items-center justify-center"
              key={i}
            >
              <img src={emp.logo} alt="" className="w-14 h-14" />
              <span className="items-center justify-center text-center">
                {emp.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurEmployers;
