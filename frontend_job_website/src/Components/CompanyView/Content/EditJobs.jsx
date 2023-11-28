import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputCustom from "../../Input/InputCustom";
import OptionCustom from "../../Input/OptionCustom";
import BasicDatePicker from "../../PickDateCustoms/BasicDatePicker";
import SuneditorCustom from "../../Suneditor/SuneditorCustom";
import axiosPrivate from "../../../api/axios";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import swal from "sweetalert";

function EditJobs() {
  const { id } = useParams();
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [jobData, setJobData] = useState(null);
  const [content, setContent] = useState("");
  const [titlePost, setTitlePost] = useState("");
  const [next, setNext] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate= useNavigate();
  const handleDateChange = (date) => {
    const formattedDate = date ? date.format("YYYY-MM-DD") : null;
    setJobData((prev) => ({
      ...prev,
      dateEnd: formattedDate,
    }));

    //kiem tra xem date da duoc chọn hay chua
    setIsDateSelected(!!formattedDate);
  };
  useEffect(() => {
    // call API get job detail
    const fetchData = async () => {
      try {
        const res = await axiosPrivate.get(`/api/hiring/${id}`);
        setJobData(res.data);
        setTitlePost(res.data?.hiringContentID.title);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);
  const validate = () => {
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async () => {
    if (!validate()) return;

    const updatedJob = {
      hiringName: jobData.hiringName,
      applicationLimit: jobData.applicationLimit,
      dateEnd: jobData.dateEnd,
      contentPost: content,
      status: "Open",
      titlePost: titlePost,
      fieldName: jobData.fieldName,
      minSalary: jobData.minSalary,
      maxSalary: jobData.maxSalary,
      errollmentStatus: jobData.errollmentStatus,
    };

    await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((yes) => {
      if (yes) {
        axiosPrivate
          .post(`/api/hiring/${id}`, updatedJob)
          .then((res) => {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            navigate("/company")
            
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        swal("Cancelled");
      }
    });

    console.log("updatedJob", jobData);
    // redirect to jobs page
  };

  const handleInputChange = (field, value) => {
    console.log("Field:", field);
    console.log("Value:", value);
    setJobData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div>
      <div className="flex items-center justify-center text-3xl font-semibold ">
        <span>Update</span>
      </div>
      {jobData ? (
        <>
          <div className="border-t border-black w-full">
            <InputCustom
              title={"Hiring Name"}
              placeholder={"Hiring Name"}
              value={jobData.hiringName}
              handleOnChange={(value) => handleInputChange("hiringName", value)}
            />
            <div className=" pt-6 flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="text-sm font-semibold">
                Title
              </label>
              <input
                type="text"
                className="w-full border h-10 rounded-lg px-2"
                placeholder="Title"
                value={titlePost}
                onChange={(e) => {
                  console.log(e);
                  setTitlePost(e.target.value);
                }}
              />
            </div>
            {/* <InputCustom
              title={"Title"}
              placeholder={"Title Name"}
              value={jobData.hiringContentID.title || ""}
              onChange={(e) => {
                console.log("e.target.value:", e);
                // setTitlePost(e.target.value);
              }}
            /> */}
            <InputCustom
              title={"Field Name"}
              placeholder={"Field Name"}
              value={jobData.fieldName}
              handleOnChange={(value) => handleInputChange("fieldName", value)}
            />

            <InputCustom
              title={"Application limit"}
              placeholder={"10"}
              type="number"
              value={jobData.applicationLimit}
              handleOnChange={(value) =>
                handleInputChange("applicationLimit", value)
              }
            />
            <OptionCustom
              title={"Enrollment Status"}
              value={jobData.errollmentStatus}
              onChange={(value) => handleInputChange("errollmentStatus", value)}
            />
            <div className="flex items-center justify-start gap-3 pb-3">
              <InputCustom
                title={"Min Salary"}
                placeholder={"1000"}
                type="number"
                value={jobData.minSalary}
                handleOnChange={(value) =>
                  handleInputChange("minSalary", value)
                }
              />
              <InputCustom
                title={"Max Salary"}
                placeholder={"2000"}
                type="number"
                value={jobData.maxSalary}
                handleOnChange={(value) =>
                  handleInputChange("maxSalary", value)
                }
              />
            </div>
            <div className="pb-3">
              <label htmlFor="" className="text-sm font-semibold">
                End of recruitment
              </label>
              <BasicDatePicker
                handleDateChange={handleDateChange}
                label={"End of recruitment"}
              />
            </div>
            <SuneditorCustom
              content={jobData.hiringContentID.content}
              setContent={setContent}
              setNext={setNext}
            />
          </div>
          <div className="flex items-center justify-end w-full">
            <button
              className={`h-12 p-3 ${"bg-blue-600 text-white"}  font-bold rounded-lg max-md:w-1/2  `}
              onClick={() => handleSubmit()}
            >
              Update
            </button>
          </div>
        </>
      ) : (
        Array.from({ length: 5 }, (_, i) => {
          return <LoadingComponent key={i} />;
        })
      )}
    </div>
  );
}

export default EditJobs;
