import logo from "../../Assets/Logo.svg";
import logoBs from "../../Assets/ChooseBusiness.svg";
import logoCl from "../../Assets/ChooseClients.svg";
import "./Role.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function RolePage() {
  const [selected, setSelected] = useState(null);

  const handleChooseRole = (e) => {
    setSelected(e);
  };

  return (
    <>
      <div className="logo p-10 h-[10%] max-md:mb-16 pb-20">
        <img src={logo} alt="Logo" />
      </div>
      <div className="BoxOption grid place-content-center  w-full max-md:flex items-center justify-center">
        <div className=" w-[700px] max-md:w-[90%]  border-2 max-md:mb-20 border-[#CECED0]  rounded-lg mt-4">
          <span className="flex items-center justify-center w-full pt-10 text-xl font-semibold max-md:pt-2 text-center ">
            Join as a Business or Applicant
          </span>
          <div className="flex gap-5 items-center justify-center  px-10 max-md:flex-col max-md:w-full py-10">
            <div
              className={`border basis-1/2 max-md:basis-0 max-md:w-full h-52 flex flex-col rounded-md border-[#CECED0] px-4 ${
                selected === "Company" ? "border border-blue-500" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <img src={logoBs} alt="Logo" className="w-28 h-28" />
                <span
                  className={`border rounded-full w-7 h-7 m-2 border-[#CECED0] cursor-pointer ${
                    selected === "Company" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleChooseRole("Company")}
                ></span>
              </div>
              <span>I’m a client, hiring for a project</span>
            </div>
            <div
              className={`border basis-1/2 max-md:basis-0 max-md:w-full h-52 flex flex-col rounded-md border-[#CECED0] px-4 ${
                selected === "Candidate" ? "border border-blue-500" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <img src={logoCl} alt="Logo" className="w-28 h-28" />
                <span
                  className={`border rounded-full w-7 h-7 m-2 border-[#CECED0] cursor-pointer ${
                    selected === "Candidate" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleChooseRole("Candidate")}
                ></span>
              </div>
              <span>
                I’m a freelancer, looking for work Apply as a Freelancer
              </span>
            </div>
          </div>
          <div className="">
            <div className="w-full flex items-center justify-center">
              <Link
                to={{
                  pathname: "/Register",
                  search: `?role=${selected}`,
                }}
                className={`w-[257px] border rounded-lg h-9 bg-[#E9E9EC] text-white font-semibold  flex items-center justify-center ${
                  selected != null ? "bg-blue-400" : "cursor-not-allowed"
                } `}
                disabled={selected === null}
                onClick={(e) => {
                  if (!selected) {
                    e.preventDefault();
                    return;
                  }
                }}
              >
                Create Account
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1 py-1">
              <span>Have already account? </span>
              <Link to={"/login"}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RolePage;
