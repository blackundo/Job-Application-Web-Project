import { useState } from "react";
import axiosPrivate from "../../../api/axios";
import { useDispatch } from "react-redux";
import { informationUser } from "../../../Utils/TokenToProfile";
import swal from "sweetalert";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import { toast } from "react-toastify";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";

function UpdateMainField() {
  const [errors, setErrors] = useState({});
  const [maxMainFields] = useState(5);
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("Profile")).user
  );
  const [mainFields, setMainFields] = useState([
    {
      id: 1,
      fieldName: "",
      activeTime: "",
      infoField: "",
      achievement: "",
    },
  ]);

  const dispatch = useDispatch();

  const handleInputChange = (index, field, value) => {
    const newMainFields = [...mainFields];
    newMainFields[index][field] = value;
    setMainFields(newMainFields);
  };

  const addMainField = () => {
    if (mainFields.length < maxMainFields) {
      const newMainFields = [...mainFields, { id: Date.now() }];
      setMainFields(newMainFields);
    } else {
      console.log("Max Main fields");
    }
  };

  const removeMainField = (id) => {
    const newMainFields = mainFields.filter((field) => field.id !== id);
    setMainFields(newMainFields);
  };

  const validateFields = () => {
    const newErrors = {};
    let isValid = true;

    mainFields.forEach((mainField, index) => {
      Object.entries(mainField).forEach(([field, value]) => {
        const stringValue = String(value);
        if (!stringValue.trim()) {
          newErrors[`${field}-${index}`] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`;
          isValid = false;
        }
      });
    });

    setErrors(newErrors);
    return isValid;
  };

  const updateMainFields = async () => {
    if (!validateFields()) {
      console.log("Form is not valid");
      return;
    }

    const updateProfile = {
      mainFields: mainFields.map((field) => ({
        fieldName: field.fieldName,
        activeTime: field.activeTime,
        infoField: field.infoField,
        achievement: field.achievement,
      })),
    };
    console.log(updateProfile);

    // try {
    //   const response = await axiosPrivate.put(
    //     "api/profile/company/update",
    //     updateProfile
    //   );
    //   const access_token = JSON.parse(
    //     localStorage.getItem("Token")
    //   ).access_token;
    //   dispatch(informationUser(access_token));
    //   console.log("response", response);

    //   ToastCustom.success("Update Success", {
    //     autoClose: 2500,
    //   });
    // } catch (error) {
    //   ToastCustom.error("Update Error!, You can update again", {
    //     autoClose: 2500,
    //   });
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="flex items-center justify-center ">
      {!profile ? (
        <LoadingComponent />
      ) : (
        <div className="w-[80%] ">
          <h1>Update Main Field</h1>
          <hr />
          <div>
            {mainFields.map((field, index) => (
              <div key={field.id} className="my-4">
                <div className="flex items-center justify-between pb-4">
                  <h3 className="text-slate-500 font-normal text-lg border-black border-b shadow-sm">
                    Main Field #{index + 1}
                  </h3>
                  <button
                    className="bg-red-500 p-1 rounded text-white font-bold text-xl"
                    onClick={() => removeMainField(field.id)}
                  >
                    X
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center max-lg:col-span-2">
                    <div className="flex items-center justify-start w-full gap-2">
                      <label
                        htmlFor={`fieldName-${index}`}
                        className="whitespace-nowrap w-32"
                      >
                        Field Name:
                      </label>
                      <input
                        type="text"
                        id={`fieldName-${index}`}
                        value={field.fieldName}
                        className="border rounded-lg outline-none h-9 w-1/2 max-lg:w-full border-black px-3"
                        onChange={(e) =>
                          handleInputChange(index, "fieldName", e.target.value)
                        }
                      />
                    </div>
                    {errors[`fieldName-${index}`] && (
                      <span className="text-red-500">
                        {errors[`fieldName-${index}`]}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center max-lg:col-span-2">
                    <div className="flex items-center justify-start w-full gap-2">
                      <label
                        htmlFor={`activeTime-${index}`}
                        className="whitespace-nowrap w-32"
                      >
                        Active Time:
                      </label>
                      <input
                        type="text"
                        id={`activeTime-${index}`}
                        value={field.activeTime}
                        className="border rounded-lg outline-none h-9 w-1/2 max-lg:w-full  border-black px-3"
                        onChange={(e) =>
                          handleInputChange(index, "activeTime", e.target.value)
                        }
                      />
                    </div>
                    {errors[`activeTime-${index}`] && (
                      <span className="text-red-500">
                        {errors[`activeTime-${index}`]}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center max-lg:col-span-2">
                    <div className="flex items-center justify-start w-full gap-2">
                      <label
                        htmlFor={`infoField-${index}`}
                        className="whitespace-nowrap w-32"
                      >
                        Info Field:
                      </label>
                      <textarea
                        id={`infoField-${index}`}
                        value={field.infoField}
                        maxLength={200} // Added maximum length
                        cols={40}
                        className="border rounded-lg outline-none resize-none w-1/2 max-lg:w-full border-black px-3"
                        onChange={(e) =>
                          handleInputChange(index, "infoField", e.target.value)
                        }
                      />
                    </div>
                    {errors[`infoField-${index}`] && (
                      <span className="text-red-500">
                        {errors[`infoField-${index}`]}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center max-lg:col-span-2">
                    <div className="flex items-center justify-start w-full gap-2">
                      <label
                        htmlFor={`achievement-${index}`}
                        className="whitespace-nowrap w-32"
                      >
                        Achievement:
                      </label>
                      <textarea
                        id={`achievement-${index}`}
                        value={field.achievement}
                        cols={40}
                        maxLength={200} // Added maximum length
                        className="border rounded-lg outline-none resize-none w-1/2 max-lg:w-full border-black px-3"
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "achievement",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    {errors[`achievement-${index}`] && (
                      <span className="text-red-500">
                        {errors[`achievement-${index}`]}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="my-4">
              <button
                className="bg-green-500 p-2 rounded text-white"
                onClick={addMainField}
              >
                Add Main Field
              </button>
            </div>
          </div>

          <div className="py-5 flex items-center justify-evenly">
            <button
              className="bg-blue-500 p-2 w-fit rounded-lg font-bold text-white"
              onClick={updateMainFields}
            >
              Update main field
            </button>

            <button className="bg-slate-500 p-2 w-16 rounded-lg text-white font-bold">
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateMainField;
