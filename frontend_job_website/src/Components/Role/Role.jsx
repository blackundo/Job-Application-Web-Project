import logo from "../../Assets/Logo.svg";
import logoBs from "../../Assets/ChooseBusiness.svg";
import logoCl from "../../Assets/ChooseClients.svg";
import "./Role.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function RolePage() {
  const [selected, setSelected] = useState(null);

  const handleChooseRole = (e) => {
    setSelected(e);
  };

  useEffect(() => {
    //navigate(`?role=${selected}`);

    console.log(selected);
  }, [selected]);

  return (
    <>
      <div className="logo p-10 h-[10%]">
        <img src={logo} alt="Logo" />
      </div>
      <div className="BoxOption grid place-content-center  w-full">
        <div className=" w-[700px] h-[400px] border-2  border-[#CECED0]  rounded-lg">
          <span className="flex items-center justify-center w-full pt-10 text-xl font-semibold">
            Join as a Business or Applicant
          </span>
          <div className="flex gap-5 items-center justify-center h-[65%] px-10">
            <div
              className={`border basis-1/2 h-52 flex flex-col rounded-md border-[#CECED0] px-4 ${
                selected === "Employer" ? "border border-blue-500" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <img src={logoBs} alt="Logo" className="w-28 h-28" />
                <span
                  className={`border rounded-full w-7 h-7 m-2 border-[#CECED0] cursor-pointer ${
                    selected === "Employer" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleChooseRole("Employer")}
                ></span>
              </div>
              <span>I’m a client, hiring for a project</span>
            </div>
            <div
              className={`border basis-1/2 h-52 flex flex-col rounded-md border-[#CECED0] px-4 ${
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
    </>
  );
}

export default RolePage;
