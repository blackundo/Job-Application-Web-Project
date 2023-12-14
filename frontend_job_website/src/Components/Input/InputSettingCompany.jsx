function InputSettingCompany({
  errorsField,
  value,
  handleInputChange,
  title,
  label,
  type = "text",
}) {
  return (
    <div
      className={`w-full flex flex-col items-start justify-center gap-4 ${
        errorsField && "mb-[1rem]"
      }`}
    >
      <label htmlFor="" className="">
        {label}
      </label>
      <input
        type={type}
        className={`outline-none border-b border-slate-500 w-full focus:border-b-2 focus:border-black rounded-lg px-3 transition-[border] ${
          errorsField && "border-red-500"
        }`}
        placeholder={value || "none"}
        name="companyName"
        value={value}
        onChange={(value) => {
          handleInputChange(title, value.target.value);
        }}
      />
      {errorsField && <span className="text-red-500">{errorsField}</span>}
    </div>
  );
}

export default InputSettingCompany;
