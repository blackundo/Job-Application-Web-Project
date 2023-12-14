import { useNavigate } from "react-router-dom";
import img from "../../../Assets/imgPostJobs.png";
import { FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import BasicDatePicker from "../../PickDateCustoms/BasicDatePicker";
import dayjs from "dayjs";

function InformationJob() {
  const [details, setDetails] = useState({
    titlePost: "",
    applicationLimit: "",
    dateEnd: "",
  });
  const [errors, setErrors] = useState({
    titlePost: "",
    applicationLimit: "",
    dateEnd: "",
  });
  const navigate = useNavigate();
  const [isDateSelected, setIsDateSelected] = useState(false);

  useEffect(() => {
    const storedDetails = localStorage.getItem("jobDetails");

    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    /*    const formattedDate = date ? date.format("YYYY-MM-DD") : null;

    setDetails((prevDetails) => ({
      ...prevDetails,
      dateEnd: formattedDate,
    }));
    //kiem tra xem date da duoc chọn hay chua
    setIsDateSelected(!!formattedDate); */
    const currentDate = dayjs();
    const formattedDate = date ? dayjs(date.format("YYYY-MM-DD")) : null;

    if (formattedDate && formattedDate.isBefore(currentDate, "day")) {
      console.log("beforedate");
      setErrors((prev) => ({
        ...prev,
        dateEnd: "Choose a future date",
      }));
      setIsDateSelected(false);
    } else {
      setErrors((prev) => ({
        ...prev,
        dateEnd: "",
      }));
      setDetails((prevDetails) => ({
        ...prevDetails,
        dateEnd: formattedDate ? formattedDate.format("YYYY-MM-DD") : null,
      }));
      setIsDateSelected(true);
    }
  };
  const handleNextStep = () => {
    let hasInputErrors = false;

    // Kiểm tra giá trị của các trường input và cập nhật errors
    Object.entries(details).forEach(([name, value]) => {
      if (value.trim() === "") {
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

    if (!isDateSelected) {
      setErrors((prev) => ({
        ...prev,
        dateEnd: "Choose active hiring is required",
      }));

      hasInputErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        dateEnd: "",
      }));
    }

    if (hasInputErrors) {
      console.log("Please fix the error");
    } else {
      localStorage.setItem("jobDetails", JSON.stringify(details));
      navigate("details", { state: { fDetails: details } });
    }
  };
  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <img src={img} alt="" className="" />
        </div>
        <span>
          Job postings in <strong>VietNamese</strong> in
        </span>
        <strong>vietnam</strong>
      </div>

      <div className="border-t mt-3">
        <div className="pb-3 pt-6 flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-sm font-semibold">
            Title Job <span>*</span>
          </label>
          <input
            type="text"
            name="titlePost"
            className="w-full border h-10 rounded-lg px-2"
            placeholder="Title Job"
            value={details.titlePost}
            onChange={(e) => handleInputChange(e)}
          />
          <small>Eg: Hiring Summer, ....</small>
        </div>

        <div className="py-5 flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-sm font-semibold">
            Candidate limit <span>*</span>
          </label>
          <input
            type="number"
            name="applicationLimit"
            value={details.applicationLimit}
            className="w-full border h-10 rounded-lg px-2"
            placeholder="The number of people"
            onChange={(e) => handleInputChange(e)}
          />
          <small className="text-red-400">Note: limit {`>`} 0</small>
        </div>

        <div>
          <span className="text-sm font-semibold">Choose active hiring</span>
          <BasicDatePicker
            label={"Choose active hiring"}
            handleDateChange={handleDateChange}
          />
          <small className="text-red-400">
            Note: Please choose after the current date
          </small>
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

      <div className="pt-16 flex items-center justify-end">
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

export default InformationJob;
