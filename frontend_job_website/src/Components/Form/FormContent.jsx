import React from "react";
import Input from "../InputForm/Input";
import Social from "../../Pages/Login/Button/Social";

const FormContent = ({ Title, titleInput, titleBtn, inputValues, onInputChange, onSubmit }) => {

  return (
    <>
      <span className="absolute top-6 right-14">
        Have already account?
        <span className="text-[#000084] cursor-pointer">Login</span>
      </span>
      <div className="box-login w-[23rem] ">
        <h1 className="text-2xl font-semibold font-serif pb-7">{Title}</h1>
        <div className="form-login w-full ">
          {titleInput.map((item, i) => {
            return (
              <Input
                key={item.id}
                label={item.label}
                placeholder={item.placeHolder}
                type={item.type}
                name={item.name}
                value={inputValues[item.name] || ''}
                onChange={(event) => {
                  const newValue = event.target.value;
                  onInputChange(item.name, newValue); // Gọi hàm handleInputChange của thành phần cha
                }}
              />
            );
          })}
          <button className="bg-[#133FA0] w-full h-12 rounded-md text-white my-3 text-[1.2rem] font-normal" onClick={onSubmit}>
            {titleBtn}
          </button>
          <div className="flex items-center w-full ">
            <span className="flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"></span>
            <span className="uppercase font-semibold">OR</span>
            <span className="flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"></span>
          </div>
        </div>
        <Social />
      </div>
    </>
  );
};

export default FormContent;
