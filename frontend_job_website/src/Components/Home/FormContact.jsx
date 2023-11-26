import logo from "../../Assets/logoForm.svg";
import Input from "../Input/Input";

const inputEnter = [
  {
    id: 1,
    label: "FullName",
    type: "Text",
    placeholder: "Enter Your name",
  },
  {
    id: 2,
    label: "Email",
    type: "email",
    placeholder: "Email Address",
  },
  {
    id: 3,
    label: "Phone Number",
    type: "Number",
    placeholder: "Enter your phone number",
  },
];

function FormContact() {
  return (
    <div className="grid grid-cols-5 max-md:grid-cols-1 max-sm:place-items-center place-items-center ">
      <div className="col-span-3 max-lg:col-span-2 ">
        <div className=" max-sm:flex max-sm:flex-col items-center justify-center">
          <span className="text-xl font-semibold">
            Talk to our HR experts..
          </span>
          <br />
          <span className="text-lg font-normal text-center w-4/5">
            Please feel free to send us any of your inquiries / questions, we’ll
            get back to you asap
          </span>
        </div>
        <div className=" flex items-center justify-center py-6">
          <img src={logo} alt="" className="w-72" />
        </div>
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-sm:flex items-center justify-center">
        <div className="border w-[400px] p-8 rounded-[2rem] border-slate-600 max-sm:w-[90%] ">
          <div className="px-3">
            {inputEnter.map((input) => {
              return (
                <Input
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                  key={input.id}
                />
              );
            })}
            <div>
              <label htmlFor="">Message</label>
              <textarea
                rows="6"
                className="w-full resize-none p-2 rounded-lg border border-slate-600"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center pt-4">
              <button className="bg-blue-300 p-2 rounded-lg font-bold text-white w-full hover:bg-blue-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContact;
