function InputCustom({ title, placeholder, type = "text", onChange, value }) {
  return (
    <div className=" pt-6 flex flex-col items-start justify-center gap-2">
      <label htmlFor="" className="text-sm font-semibold">
        {title}
      </label>
      <input
        type={type}
        className="w-full border h-10 rounded-lg px-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputCustom;
