import { useState } from "react";
import { useParams } from "react-router-dom";
import InputCustom from "../../Input/InputCustom";
import OptionCustom from "../../Input/OptionCustom";
import BasicDatePicker from "../../PickDateCustoms/BasicDatePicker";
import SuneditorCustom from "../../Suneditor/SuneditorCustom";
import { useEffect } from "react";
import axiosPrivate from "../../../api/axios";

function EditJobs() {
  const { id } = useParams();
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [jobData, setJobData] = useState(null);
  const [content, setContent] = useState("");
  const [next, setNext] = useState(true);
  const [errors, setErrors] = useState({});

  const handleDateChange = (date) => {
    const formattedDate = date ? date.format("YYYY-MM-DD") : null;
    setIsDateSelected(!!formattedDate);
  };
  useEffect(() => {
    // call API get job detail
    const fetchData = async () => {
      try {
        const res = await axiosPrivate.get(`/api/hiring/${id}`);
        setJobData(res.data);
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
      title: jobData.hiringName,
      hiringName: jobData.hiringName,
      // ... other fields
    };

    try {
      await axiosPrivate.put(`/api/jobs/${id}`, updatedJob);
      // redirect to jobs page
    } catch (err) {
      console.log(err);
    }
  };
  const handleInputChange = (field, e) => {
    setJobData((prevData) => ({ ...prevData, [field]: e.target.value }));
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
              onChange={(e) => handleInputChange(e)}
            />
            <InputCustom
              title={"Title"}
              placeholder={"Title Name"}
              value={jobData.hiringContentID.title}
              onChange={(e) => handleInputChange(e)}
            />
            <InputCustom
              title={"Field Name"}
              placeholder={"Field Name"}
              value={jobData.fieldName}
              onChange={(e) => handleInputChange(e)}
            />

            <InputCustom
              title={"Application limit"}
              placeholder={"10"}
              type="number"
              value={jobData.applicationLimit}
              onChange={(e) => handleInputChange(e)}
            />
            <OptionCustom title={"Enrollment Status"} />
            <div className="flex items-center justify-start gap-3 pb-3">
              <InputCustom
                title={"Min Salary"}
                placeholder={"1000"}
                type="number"
                value={jobData.minSalary}
                onChange={(e) => handleInputChange(e)}
              />
              <InputCustom
                title={"Max Salary"}
                placeholder={"2000"}
                type="number"
                value={jobData.maxSalary}
                onChange={(e) => handleInputChange(e)}
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
            >
              Update
            </button>
          </div>
        </>
      ) : (
        Array.from({ length: 5 }, (_, i) => {
          return (
            <div
              className="border border-blue-300 shadow rounded-md p-4 max-w-full w-full mx-auto mb-2"
              key={i}
            >
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default EditJobs;
