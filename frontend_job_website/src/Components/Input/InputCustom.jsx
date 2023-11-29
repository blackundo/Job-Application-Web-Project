function InputCustom({
  title,
  placeholder,
  type = "text",
  handleOnChange,
  value,
}) {
  // console.log(value);
  const handleChange = (e) => {
    handleOnChange(e.target.value);
  };
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
        onChange={handleChange}
      />
    </div>
  );
}

export default InputCustom;
