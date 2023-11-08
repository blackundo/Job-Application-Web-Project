import { GrStatusGoodSmall } from "react-icons/gr";
import { ImBin } from "react-icons/im";

function DetailsCompany() {
  return (
    <div className="w-full flex items-center justify-center pt-11">
      <div className="w-11/12 ">
        <div className="pb-4">
          <div className="text-sm">
            <span>Company Manager / </span>
            <span className="text-blue-800 font-semibold">Company Name</span>
          </div>
          <h1 className="text-[1.3125rem] text-[#000084] font-semibold">
            User detail
          </h1>
        </div>
        <div className="border p-3 rounded-md shadow-md">
          <div className="flex items-center justify-start w-full gap-3 pb-3">
            <img
              src=""
              alt="Image"
              className="border rounded-full w-12 h-12 overflow-hidden"
            />
            <span className="font-semibold">Ecomdy</span>
            <div className="flex items-center justify-center gap-3  border p-1 rounded-md border-green-500">
              <GrStatusGoodSmall className="fill-green-500" />
              <button>Active</button>
            </div>
            <div className="flex items-center justify-center bg-slate-200 p-1 rounded-md">
              <span>Company ID: </span>
              <span>13824</span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2 border w-fit p-1">
            <ImBin />
            <span>Block Company</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCompany;
