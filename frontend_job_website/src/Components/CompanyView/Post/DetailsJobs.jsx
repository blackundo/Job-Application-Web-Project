import { FiAlertCircle, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import img from "../../../Assets/jobdetails.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailsJobs() {
  const navigate = useNavigate();
  const location = useLocation();
  const [errollmentStatus, setErrollmentStatus] = useState("");
  const details = location.state?.fDetails || "";

  const [moreDetails, setMoreDetails] = useState({
    ...details,
    hiringName: "",
    maxSalary: "",
    minSalary: "",
    fieldName: "",
    errollmentStatus: "",
  });
  const [errors, setErrors] = useState({
    hiringName: "",
    fieldName: "",
    minSalary: "",
    maxSalary: "",
  });
  const check = {
    hiringName: moreDetails.hiringName,
    maxSalary: moreDetails.maxSalary,
    minSalary: moreDetails.minSalary,
    fieldName: moreDetails.fieldName,
  };

  useEffect(() => {
    const savedDetails = localStorage.getItem("moreDetails");

    if (savedDetails) {
      setMoreDetails(JSON.parse(savedDetails));
    }
  }, []);
  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    // Kiểm tra giới hạn tối đa 50 ký tự
    if (inputValue.length > 30) {
      inputValue = inputValue.slice(0, 30);
    }

    // Kiểm tra và giới hạn số lượng dấu phẩy tối đa là 3
    const commaCount = (inputValue.match(/,/g) || []).length;
    if (commaCount > 3) {
      // Nếu có nhiều hơn 3 dấu phẩy, giữ lại chỉ 3 dấu phẩy đầu tiên
      inputValue = inputValue.replace(/(,[^,]*){3}$/, "");
    }

    const { name } = e.target;
    setMoreDetails({
      ...moreDetails,
      [name]: inputValue,
    });
  };

  const handleEnrollmentStatusChange = (status) => {
    setErrollmentStatus(status);
    setMoreDetails({
      ...moreDetails,
      errollmentStatus: status,
    });
  };
  const handleNextStep = () => {
    let hasInputErrors = false;

    // Kiểm tra giá trị của các trường input và cập nhật errors
    Object.entries(check).forEach(([name, value]) => {
      const trimmedValue = typeof value === "string" ? value.trim() : value;
      if (trimmedValue === "") {
        setErrors((prev) => ({
          ...prev,
          [name]: `${name} is required`,
        }));

        hasInputErrors = true;
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    });
    if (moreDetails.maxSalary && moreDetails.minSalary) {
      const checkMaxSalary = parseFloat(moreDetails.maxSalary);
      const checkMinSalary = parseFloat(moreDetails.minSalary);
      if (checkMaxSalary <= checkMinSalary) {
        setErrors((prev) => ({
          ...prev,
          maxSalary: "Max Salary must be greater than Min Salary",
        }));
        hasInputErrors = true;
      } else {
        setErrors((prev) => ({
          ...prev,
          maxSalary: "",
        }));
      }
    }

    if (errollmentStatus === "") {
      setErrors((prev) => ({
        ...prev,
        errollmentStatus: "Type of employment is required",
      }));

      hasInputErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        errollmentStatus: "",
      }));
    }

    if (hasInputErrors) {
      console.log("Please fix the error");
    } else {
      localStorage.setItem("moreDetails", JSON.stringify(moreDetails));
      navigate("/company/post_jobs/description", {
        state: { detailsStep: moreDetails },
      });
    }
  };
  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== "");
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={img} alt="" />
      </div>
      <div className="pt-14 flex flex-col items-start justify-center">
        <strong className="text-[0.9rem]">
          Type of employment <span className="text-red-600">*</span>
        </strong>
        <div>
          <div className="flex items-start justify-center gap-2 pt-2">
            <button
              className={`${
                errollmentStatus === "FULL_TIME"
                  ? "bg-slate-600 text-white"
                  : "border border-slate-600 text-slate-800"
              } p-2 rounded-2xl w-28 text-sm`}
              onClick={() => handleEnrollmentStatusChange("FULL_TIME")}
            >
              Full-Time
            </button>
            <button
              className={`${
                errollmentStatus === "PART_TIME"
                  ? "bg-slate-600 text-white"
                  : "border border-slate-600 text-slate-800"
              } border border-slate-600 text-slate-800 p-2 rounded-2xl w-28 text-sm`}
              onClick={() => handleEnrollmentStatusChange("PART_TIME")}
            >
              Part-Time
            </button>
            <button
              className={`${
                errollmentStatus === "Internship"
                  ? "bg-slate-600 text-white"
                  : "border border-slate-600 text-slate-800"
              } border border-slate-600 text-slate-800 p-2 rounded-2xl w-28 text-sm`}
              onClick={() => handleEnrollmentStatusChange("Internship")}
            >
              Internship
            </button>
            <button
              className={`${
                errollmentStatus === "All"
                  ? "bg-slate-600 text-white"
                  : "border border-slate-600 text-slate-800"
              } border border-slate-600 text-slate-800 p-2 rounded-2xl w-28 text-sm`}
              onClick={() => handleEnrollmentStatusChange("All")}
            >
              All
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="py-5 flex flex-col items-start justify-center gap-2 border-t">
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="" className="text-sm font-semibold">
              Hiring Name{" "}
              <small className="text-red-400 ">Note: Limit 20 characters</small>
            </label>
          </div>
          <input
            type="text"
            name="hiringName"
            className="w-full border h-10 rounded-lg px-3"
            placeholder="Marketing, Backend-Java, Frontend-React,..."
            value={moreDetails.hiringName}
            onChange={handleInputChange}
          />
          <small>Eg: Backend And Game Developer, Marketing ....</small>
        </div>
        <div className="py-5 flex flex-col items-start justify-center gap-2 border-t">
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="" className="text-sm font-semibold">
              Field Name <span>*</span>
            </label>
          </div>
          <input
            type="text"
            name="fieldName"
            className="w-full border h-10 rounded-lg px-3"
            placeholder="Marketing, Java, React"
            min={0}
            value={moreDetails.fieldName}
            onChange={handleInputChange}
          />
          <small>Eg: Java, React, Marketing, CCNA, MOS,...</small>
        </div>
        <div>
          <span className="text-xl font-semibold">Salary</span>
          <div className="flex items-center justify-around pt-2">
            <div className="flex flex-col items-start justify-center gap-1">
              <span className="px-2 font-bold">Minimum</span>
              <div className="relative">
                <input
                  type="number"
                  placeholder="1000"
                  name="minSalary"
                  min={0}
                  className="h-10 border px-3 rounded-l-lg"
                  value={moreDetails.minSalary}
                  onChange={handleInputChange}
                />
                <button
                  className="h-10 border w-10 absolute top-0 left-full bg-slate-400 rounded-r-lg text-white font-bold"
                  disabled
                >
                  $
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <span className="px-2 font-bold">Maximal</span>
              <div className="relative">
                <input
                  type="number"
                  placeholder="1000"
                  name="maxSalary"
                  min={0}
                  className="h-10 border px-3 rounded-l-lg"
                  value={moreDetails.maxSalary}
                  onChange={handleInputChange}
                />
                <button
                  className="h-10 border w-10 absolute top-0 left-full bg-slate-400 rounded-r-lg text-white font-bold"
                  disabled
                >
                  $
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hasErrors() && (
        <div className="border border-red-400 p-2 m-0 mt-4 rounded-lg">
          <div className="flex items-center justify-start gap-3">
            <FiAlertCircle className="fill-red-600 text-white text-2xl" />
            <span className="text-[0.875rem] font-semibold">
              You need to pay attention to the items above to continue
            </span>
          </div>
          <ul className="list-disc pl-16 text-sm font-light ">
            {Object.entries(errors).map(([field, error]) => {
              if (error) {
                return (
                  <li key={field}>
                    <span className="text-red-600">{error}</span>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      )}
      <div className="pt-16 flex items-center justify-between">
        <button
          className="h-12 p-3  text-[#1CB8FF] border font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft className="text-xl " />
          Back
        </button>
        {/* <button onClick={handleNextPage}>test</button> */}
        <button
          className="h-12 p-3 bg-[#1CB8FF] text-white font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
          onClick={handleNextStep}
        >
          Continue
          <FiArrowRight className="text-xl " />
        </button>
      </div>
    </>
  );
}

export default DetailsJobs;
