/* eslint-disable react/prop-types */
import { RiProfileLine } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Degree() {
  const navigate = useNavigate();
  return (
    <div className="  flex items-center justify-center max-md:mt-[5.625rem]">
      <div className="max-w-[34.81rem] ">
        <div>
          <span className="cursor-pointer">
            <AiOutlineArrowLeft onClick={() => navigate(-1)} />
          </span>
          <div className="pt-5 pb-10">
            <span className="font-bold text-2xl ">Degree</span>
            <br />
            <small className="text-slate-300">
              We use these insights to show you jobs that match your unique
              skills and experience
            </small>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full">
              <div className="flex items-center justify-center gap-2">
                <RiProfileLine className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  Add recent work experience
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <PiCertificateFill className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  More Education
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <LiaCertificateSolid className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  More Skills
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <LiaCertificateSolid className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  Add licenses
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <LiaCertificateSolid className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  Add a certificate
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <FaGlobeAmericas className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  Add a language
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Degree;
