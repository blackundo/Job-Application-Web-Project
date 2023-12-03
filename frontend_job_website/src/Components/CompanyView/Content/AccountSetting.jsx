import { useState } from "react";
import axiosPrivate from "../../../api/axios";
import { useDispatch } from "react-redux";
import { informationUser } from "../../../Utils/TokenToProfile";
import swal from "sweetalert";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import { toast } from "react-toastify";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import SettingFiled from "./SettingFiled";

function AccountSetting() {
  const [avatarImage, setAvatarImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("Profile")).user
  );
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phoneNumber) => /^\d{10,11}$/.test(phoneNumber);
  const validateFounding = (years) => /^\d{4}$/.test(years);
  const validations = [
    { field: "companyName", message: "Company name is required" },
    { field: "address", message: "Address is required" },
    { field: "orgn", message: "Organizational is required" },
    { field: "introduction", message: "Introduction is required" },
    {
      field: "founding",
      message: "founding field is required and format YYYY",
      validator: validateFounding,
    },
    {
      field: "businessEmail",
      message: "Invalid email address",
      validator: validateEmail,
    },
    {
      field: "phone",
      message: "Invalid phone number",
      validator: validatePhoneNumber,
    },
  ];
  const validata = () => {
    let newErrors = {};
    validations.forEach(({ field, message, validator }) => {
      const value = profile[field];
      if (!value || (validator && !validator(value))) {
        console.log(field);
        newErrors[field] = message;
      }
    });

    setErrors((prevErrors) => {
      return { ...prevErrors, ...newErrors };
    });

    return Object.keys(newErrors).length === 0;
  };

  const updateProfileInfo = async () => {
    if (!validata()) {
      ToastCustom.error("Input required!", {
        autoClose: 2500,
      });
      return;
    }
    const updateProfile = {
      address: profile.address,
      businessEmail: profile.businessEmail,
      companyName: profile.companyName,
      fouding: profile.founding,
      introduction: profile.introduction,
      organizational: profile.orgn,
      phoneNumber: profile.phone,
      // //Main field
      // fieldName: profile.mainField,
      // activeTime: "",
      // infoField: "",
      // achievement: "",
    };

    await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (yes) => {
      if (yes) {
        const loadingToastId = toast.loading("Please wait...", {
          autoClose: false,
        });

        await axiosPrivate
          .put("api/profile/company/update", updateProfile)
          .then(() => {
            const access_token = JSON.parse(
              localStorage.getItem("Token")
            ).access_token;
            dispatch(informationUser(access_token));
            toast.dismiss(loadingToastId);
            ToastCustom.success("Update success!", {
              autoClose: 2500,
            });
            setErrors({});
          })
          .catch((err) => {
            toast.dismiss(loadingToastId);
            ToastCustom.error("Update Error!, You can update again", {
              autoClose: 2500,
            });
            console.error("Error:", err);
          });
      } else {
        swal("Canceled");
      }
    });
  };

  const updateAvatarCoverImage = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    const access_token = JSON.parse(localStorage.getItem("Token")).access_token;

    const data = new FormData();
    data.append("avatar", avatarImage);
    data.append("cover", coverImage);
    console.log([...data.entries()]);
    await axiosPrivate
      .patch("/api/profile/company/update", data, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        toast.dismiss(loadingToastId);
        console.log(res.data);

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
  return (
    <div className="flex items-center justify-center ">

      {!profile ? (
        <LoadingComponent />
      ) : (
        <SettingFiled
          profile={profile}
          avatarImage={avatarImage}
          coverImage={coverImage}
          errors={errors}
          handleInputChange={handleInputChange}
          setAvatarImage={setAvatarImage}
          setCoverImage={setCoverImage}
          updateAvatarCoverImage={updateAvatarCoverImage}
          updateProfileInfo={updateProfileInfo}
        />
      )}

    </div>
  );
}

export default AccountSetting;
