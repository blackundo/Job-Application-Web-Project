import { useState } from "react";
import DrawImage from "./DrawImage";
import axiosPrivate from "../../../api/axios";
import { useDispatch } from "react-redux";
import { informationUser } from "../../../Utils/TokenToProfile";
import swal from "sweetalert";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import { toast } from "react-toastify";

function AccountSetting() {
  const [avatarImage, setAvatarImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [updateProfile, setUpdateProfile] = useState({
    address: "",
    businessEmail: "",
    companyName: "",
    fouding: "",
    introduction: "",
    organizational: "",
    phoneNumber: "",
    fieldName: "",
    activeTime: "",
    infoField: "",
    achievement: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateProfile({
      ...updateProfile,
      [name]: value,
    });
  };
  const user = JSON.parse(localStorage.getItem("Profile"))?.user;
  const updateProfileInfo = async () => {
    try {
      const response = await axiosPrivate.put(
        "api/profile/company/update",
        updateProfile
      );
      const access_token = JSON.parse(
        localStorage.getItem("Token")
      ).access_token;
      dispatch(informationUser(access_token));
      console.log("response", response);
    } catch (error) {
      ToastCustom.error("Update Error!, You can update again", {
        autoClose: 2500,
      });
      console.error("Error:", error);
    }
  };

  const updateAvatarCoverImage = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    const data = new FormData();
    data.append("avatar", avatarImage);
    data.append("cover", coverImage);
    const access_token = JSON.parse(localStorage.getItem("Token")).access_token;
    axiosPrivate
      .patch("api/profile/company/update", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        toast.dismiss(loadingToastId);
        console.log(res);
        ToastCustom.success("Update Success", {
          autoClose: 2500,
        });
      })
      .catch((error) => {
        toast.dismiss(loadingToastId);
        ToastCustom.error("Update Error!, You can update again", {
          autoClose: 2500,
        });
        console.log(error);
      });
  };

  const handleSave = async () => {
    const validations = [
      { field: "companyName", message: "Company name is required" },
      { field: "address", message: "Address is required" },
      { field: "organizational", message: "Organizational is required" },
      { field: "introduction", message: "Introduction is required" },
      { field: "fieldName", message: "Field name is required" },
      { field: "infoField", message: "Info field is required" },
      { field: "fouding", message: "founding field is required" },
      {
        field: "businessEmail",
        message: "Invalid email address",
        validator: validateEmail,
      },
      {
        field: "phoneNumber",
        message: "Invalid phone number",
        validator: validatePhoneNumber,
      },
    ];
    const newErrors = {};
    validations.forEach(({ field, message, validator }) => {
      const value = updateProfile[field]?.trim();
      if (!value || (validator && !validator(value))) {
        newErrors[field] = message;
      }
    });
    if (Object.keys(newErrors).length === 0) {
      await showConfirmationDialog();
    }
    setErrors(newErrors);
  };
  const showConfirmationDialog = async () => {
    await swal({
      title: "Are you sure?",
      text: "Are you sure to update all?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await updateProfileInfo();
        await updateAvatarCoverImage();
      } else {
        swal("Cancelled");
      }
    });
  };
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);
  const updateJustImage = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure just to update image ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        updateAvatarCoverImage();
      } else {
        swal("Cancelled");
      }
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-[80%] ">
        <h1>Account Setting</h1>
        <hr />
        <DrawImage
          avatarImage={avatarImage}
          setAvatarImage={setAvatarImage}
          coverImage={coverImage}
          setCoverImage={setCoverImage}
        />
        <div className="pt-10 flex flex-col items-center justify-center gap-7">
          <div
            className={`w-full flex flex-col items-start justify-center gap-4 ${
              errors.companyName && "mb-[1rem]"
            }`}
          >
            <label htmlFor="" className="">
              Name Company:
            </label>
            <input
              type="text"
              className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
                errors.companyName && "border-red-500"
              }`}
              placeholder={`${user.companyName}`}
              name="companyName"
              value={updateProfile.companyName}
              onChange={handleInputChange}
            />
            {errors.companyName && (
              <span className="text-red-500">{errors.companyName}</span>
            )}
          </div>
          <div
            className={`w-full flex flex-col items-start justify-center gap-4 ${
              errors.businessEmail && "mb-[1rem]"
            }`}
          >
            <label htmlFor="" className="">
              businessEmail:
            </label>
            <input
              type="email"
              placeholder={`${user.businessEmail}`}
              className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
                errors.businessEmail && "border-red-500"
              }`}
              value={updateProfile.businessEmail}
              name="businessEmail"
              onChange={handleInputChange}
            />
            {errors.businessEmail && (
              <span className="text-red-500">{errors.businessEmail}</span>
            )}
          </div>
          <div
            className={`w-full flex flex-col items-start justify-center gap-4 ${
              errors.phoneNumber && "mb-[1rem]"
            }`}
          >
            <label htmlFor="" className="">
              Phone:
            </label>
            <input
              type="number"
              placeholder={`${user.phone || 0}`}
              className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
                errors.phoneNumber && "border-red-500"
              }`}
              value={updateProfile.phoneNumber}
              name="phoneNumber"
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber}</span>
            )}
          </div>
          <div
            className={`w-full flex flex-col items-start justify-center gap-4 ${
              errors.address && "mb-[1rem]"
            }`}
          >
            <label htmlFor="" className="">
              Address:
            </label>
            <input
              type="text"
              placeholder={`${user.address}`}
              className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
                errors.address && "border-red-500"
              }`}
              value={updateProfile.address}
              name="address"
              onChange={handleInputChange}
            />
            {errors.address && (
              <span className="text-red-500">{errors.address}</span>
            )}
          </div>
          <div
            className={`w-full flex flex-col items-start justify-center gap-4 ${
              errors.organizational && "mb-[1rem]"
            }`}
          >
            <label htmlFor="" className="">
              Organizational:
            </label>
            <input
              type="number"
              className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
                errors.organizational && "border-red-500"
              }`}
              value={updateProfile.organizational}
              placeholder={`${user.orgn || 0}`}
              name="organizational"
              onChange={handleInputChange}
            />
            {errors.organizational && (
              <span className="text-red-500">{errors.organizational}</span>
            )}
          </div>
          <div
            className={`w-full flex flex-col items-start justify-center gap-4 ${
              errors.introduction && "mb-[1rem]"
            }`}
          >
            <label htmlFor="" className="">
              Introduction:
            </label>
            <textarea
              value={updateProfile.introduction}
              name="introduction"
              rows={5}
              className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
                errors.introduction && "border-red-500"
              }`}
              placeholder={`${
                user.introduction || "You can update your introduction"
              }`}
              onChange={handleInputChange}
            />
            {errors.introduction && (
              <span className="text-red-500">{errors.introduction}</span>
            )}
          </div>
          <div
            className={`w-full flex flex-col items-start justify-center gap-4 ${
              errors.fieldName && "mb-[1rem]"
            }`}
          >
            <div className="w-full">
              <label htmlFor="" className="">
                Main Filed:
              </label>
              <input
                type="text"
                className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
                  errors.fieldName && "border-red-500"
                }`}
                placeholder={`${user.fi || "...."}`}
                value={updateProfile.fieldName}
                name="fieldName"
                onChange={handleInputChange}
              />
              {errors.address && (
                <span className="text-red-500">{errors.fieldName}</span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="">
                Founding:
              </label>
              <div
                className={`flex items-center justify-start gap-5 ${
                  errors.fouding && "mb-[1rem]"
                }`}
              >
                <input
                  type="number"
                  value={updateProfile.fouding}
                  name="fouding"
                  onChange={handleInputChange}
                  className={`border-b outline-none rounded-lg border-slate-400 ${
                    errors.fouding && "border-red-500"
                  }`}
                />
                <span>Years</span>
              </div>
              {errors.organizational && (
                <span className="text-red-500">{errors.fouding}</span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <label htmlFor="" className="">
              information field:
            </label>
            <textarea
              value={updateProfile.infoField}
              name="infoField"
              rows={5}
              className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3  transition-[border]"
              placeholder={`${
                user.infoField || "You can update your introduction field"
              }`}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="py-5 flex items-center justify-evenly">
          <button
            className="bg-blue-500 p-2 w-fit rounded-lg font-bold text-white"
            onClick={handleSave}
          >
            Save All
          </button>
          {/* <button
            className="bg-violet-500 p-2 w-fit rounded-lg font-bold text-white"
            onClick={handleSave}
          >
            Save Just Avatar
          </button> */}
          <button
            className="bg-yellow-500 p-2 w-fit rounded-lg font-bold text-white"
            onClick={updateJustImage}
          >
            Save Just Image
          </button>
          <button className="bg-slate-500 p-2 w-16 rounded-lg text-white font-bold">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountSetting;
