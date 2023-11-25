import img from "../../../Assets/descriptinjobs.png";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SuneditorCustom from "../../Suneditor/SuneditorCustom";

function WriteJobs() {
  const [content, setContent] = useState("");
  const [next, setNext] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const details = location.state?.detailsStep || "";
  useEffect(() => {
    const storedContent = localStorage.getItem("jobContent");
    if (storedContent) {
      setContent(storedContent);
    }
  }, []);
  const handleNextStep = () => {
    localStorage.setItem("jobContent", content);
  };

  useEffect(() => {
    console.log(details);
  }, [details]);
  return (
    <div className="flex items-center justify-center">
      <div className=" w-[46.98rem] ">
        <div className="flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <div className="pt-5">
          <span className="text-red-400 font-bold text-[0.875rem] py-2">
            Job description *
          </span>

          <SuneditorCustom
            content={content}
            setContent={setContent}
            setNext={setNext}
          />

          <div className="pt-2 flex items-center justify-between">
            <button
              className="h-12 p-3  text-[#1CB8FF] border font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
              onClick={() => navigate(-1)}
            >
              <FiArrowLeft className="text-xl " />
              Back
            </button>
            {next && (
              <Link
                to={"/company/post_jobs/preview"}
                state={{
                  previewContent: content,
                  detailsStep: {
                    hiringName: details.hiringName,
                    applicationLimit: details.applicationLimit,
                    dateEnd: details.dateEnd,
                    titlePost: details.titlePost,
                    contentPost: content,
                    fieldName: details.fieldName,
                    maxSalary: details.maxSalary,
                    minSalary: details.minSalary,
                    errollmentStatus: details.errollmentStatus,
                  },
                }}
                onClick={handleNextStep}
                className="bg-blue-400 p-1 h-12 rounded-lg w-fit text-center font-semibold text-white hover:scale-110 flex items-center justify-center"
              >
                Next Page Preview
                <FiArrowRight className="text-xl " />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteJobs;
