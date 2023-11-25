import { useState } from "react";

function AccountSetting() {
  const [updateProfile, setUpdateProfile] = useState({
    address: "",
    businessEmail: "",
    companyName: "",
    email: "",
    founding: "",
    introduction: "",
    orgn: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateProfile({
      ...updateProfile,
      [name]: value,
    });
  };
  const user = JSON.parse(localStorage.getItem("Profile"))?.user;
  console.log(user);
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[80%] ">
        <h1>Account Setting</h1>
        <hr />
        <div className="pt-10 flex flex-col items-center justify-center gap-7">
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <label htmlFor="" className="">
              Name Company:
            </label>
            <input
              type="text"
              className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border]"
              placeholder={`${user.companyName}`}
              name="companyName"
              value={updateProfile.companyName}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <label htmlFor="" className="">
              Email:
            </label>
            <input
              type="email"
              className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border]"
              placeholder={`${user.email}`}
              name="email"
              value={updateProfile.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <label htmlFor="" className="">
              businessEmail:
            </label>
            <input
              type="email"
              className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border]"
              value={updateProfile.businessEmail}
              name="businessEmail"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <label htmlFor="" className="">
              Phone:
            </label>
            <input
              type="number"
              className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border]"
              value={updateProfile.phone}
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <label htmlFor="" className="">
              Address:
            </label>
            <input
              type="text"
              className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border]"
              value={updateProfile.address}
              name="address"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <label htmlFor="" className="">
              Organizational:
            </label>
            <input
              type="number"
              className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border]"
              value={updateProfile.orgn}
              name="orgn"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <label htmlFor="" className="">
              Introduction:
            </label>
            <textarea
              value={updateProfile.introduction}
              name="introduction"
              rows={5}
              className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3  transition-[border]"
              placeholder={`${
                user.introduction || "You can update your introduction"
              }`}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex items-start justify-center gap-4">
            <div className="w-full">
              <label htmlFor="" className="">
                Main Filed:
              </label>
              <input
                type="text"
                className="outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] "
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="">
                Founding:
              </label>
              <input
                type="date"
                value={updateProfile.founding}
                name="founding"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="py-5 flex items-center justify-evenly">
          <button className="bg-blue-500 p-2 w-16 rounded-lg font-bold text-white">
            Save
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
