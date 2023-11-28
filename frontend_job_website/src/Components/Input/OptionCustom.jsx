function OptionCustom({ title, value, onChange }) {
  const options = {
    INTERNSHIP: "Internship",
    FULL_TIME: "FULL_TIME",
    PART_TIME: "PART_TIME",
  };
  const isValid = options[value];
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className=" pt-6 flex flex-col items-start justify-center gap-2">
      <label htmlFor="" className="text-sm font-semibold">
        {title} <span>*</span>
      </label>
      <select
        name=""
        id=""
        value={value}
        onChange={handleChange}
        className="border w-full h-10 rounded-md px-2 text-lg font-normal"
      >
        {!isValid && <option value={value}>{value}</option>}

        <option value={options.INTERNSHIP}>Internship</option>

        <option value={options.FULL_TIME}>Full Time</option>

        <option value={options.PART_TIME}>Part Time</option>
      </select>
    </div>
  );
}

export default OptionCustom;
