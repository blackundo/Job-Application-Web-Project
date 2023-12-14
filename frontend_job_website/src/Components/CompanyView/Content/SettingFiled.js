import InputSettingCompany from "../../Input/inputSettingCompany";
import DrawImage from "./DrawImage";

function SettingFiled({
  avatarImage,
  setAvatarImage,
  coverImage,
  setCoverImage,
  errors,
  profile,
  handleInputChange,
  updateProfileInfo,
  updateAvatarCoverImage,
}) {
  return (
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
        <InputSettingCompany
          errorsField={errors.companyName}
          value={profile.companyName}
          handleInputChange={handleInputChange}
          title={"companyName"}
          label={"Company Name"}
        />

        <InputSettingCompany
          errorsField={errors.businessEmail}
          value={profile.businessEmail}
          handleInputChange={handleInputChange}
          title={"businessEmail"}
          label={"Business Email"}
        />
        <InputSettingCompany
          errorsField={errors.phone}
          value={profile.phone}
          handleInputChange={handleInputChange}
          title={"phone"}
          label={"Phone Number"}
          type="number"
        />

        <InputSettingCompany
          errorsField={errors.address}
          value={profile.address}
          handleInputChange={handleInputChange}
          title={"address"}
          label={"Address"}
        />

        <InputSettingCompany
          errorsField={errors.orgn}
          value={profile.orgn}
          handleInputChange={handleInputChange}
          title={"orgn"}
          label={"Organizational"}
          type="number"
        />
        <div
          className={`w-full flex flex-col items-start justify-center gap-4 ${
            errors.introduction && "mb-[1rem]"
          }`}
        >
          <label htmlFor="" className="">
            Introduction:
          </label>
          <textarea
            value={profile.introduction}
            name="introduction"
            rows={5}
            maxLength={500}
            className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
              errors.introduction && "border-red-500"
            }`}
            placeholder={`${
              profile.introduction || "You can update your introduction"
            }`}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 500) {
                handleInputChange("introduction", e.target.value);
              }
            }}
          />
          {errors.introduction && (
            <span className="text-red-500">{errors.introduction}</span>
          )}
        </div>
        <div className="flex items-center justify-around w-full">
          <div className="flex items-center justify-center w-full">
            <div
              className={`w-full flex flex-col items-start justify-center gap-4 ${
                errors.founding && "mb-[1rem]"
              }`}
            >
              <label htmlFor="" className="">
                Founding
              </label>
              <input
                type="number"
                className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
                  errors.founding && "border-red-500"
                }`}
                min="1900"
                max="2099"
                step="1"
                required
                placeholder={profile.founding || "none"}
                name="founding"
                value={profile.founding}
                onChange={(e) => {
                  handleInputChange("founding", e.target.value);
                }}
              />

              {errors.founding && (
                <span className="text-red-500">{errors.founding}</span>
              )}
            </div>
            <span className="font-bold text-lg">Years</span>
          </div>
        </div>
      </div>
      <div className="py-5 flex items-center justify-evenly">
        <button
          className="bg-blue-500 p-2 w-fit rounded-lg font-bold text-white"
          onClick={updateProfileInfo}
        >
          Update Information
        </button>

        <button
          className="bg-yellow-500 p-2 w-fit rounded-lg font-bold text-white"
          onClick={updateAvatarCoverImage}
        >
          Update Image
        </button>
        <button className="bg-slate-500 p-2 w-16 rounded-lg text-white font-bold">
          Clear
        </button>
      </div>
    </div>
  );
}

export default SettingFiled;
