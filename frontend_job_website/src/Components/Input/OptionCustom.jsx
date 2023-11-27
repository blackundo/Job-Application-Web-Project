function OptionCustom({ title }) {
  return (
    <div className=" pt-6 flex flex-col items-start justify-center gap-2">
      <label htmlFor="" className="text-sm font-semibold">
        {title} <span>*</span>
      </label>
      <select
        name=""
        id=""
        className="border w-full h-10 rounded-md px-2 text-lg font-normal"
      >
        <option value="">Internship</option>
        <option value="">Full-Time</option>
        <option value="">Part-Time</option>
        <option value="">All</option>
      </select>
    </div>
  );
}

export default OptionCustom;
