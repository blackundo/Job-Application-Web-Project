import { GrStatusGoodSmall } from "react-icons/gr";
import { ImBin } from "react-icons/im";
import { useParams } from "react-router-dom";
function DetailsCompany() {
  let { id } = useParams();
  return (
    <div className="w-full flex items-center justify-center pt-11">
      <div className="w-11/12 ">
        <div className="pb-4">
          <div className="text-sm">
            <span>
              <a href="/admin/companyManager">Company Manager</a> /{" "}
            </span>
            <span className="text-blue-800 font-semibold">Ecomdy</span>
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
              <span>{id}</span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2 border w-fit p-1">
            <ImBin />
            <span>Block Company</span>
          </div>
        </div>
        <div className="border p-3 rounded-md shadow-md mt-6">
          <span className="text-xl font-semibold text-[#000084]">Profile</span>
          <div className="grid grid-cols-12 gap-7 py-3">
            <label className="col-span-2 text-slate-400 ">Create at</label>
            <span className="col-span-10">16/06/2021, 12:02:07</span>
            <label className="col-span-2 text-slate-400 ">Company name</label>
            <span className="col-span-10">Ecomdy</span>
            <div className="col-span-12 grid grid-cols-12">
              <label className="col-span-2 text-slate-400 ">Phone number</label>
              <span className="col-span-8">+84-2123-45456</span>
              <span className="col-span-2">
                <a href="#ChangePhone">Change Phone</a>
              </span>
            </div>

            <div className="col-span-12 grid grid-cols-12">
              <label className="col-span-2 text-slate-400 ">Country</label>
              <span className="col-span-8">Da Nang</span>
              <span className="col-span-2">
                <a href="#ChangePhone">Change Country</a>
              </span>
            </div>
            <div className="col-span-12 grid grid-cols-12">
              <label className="col-span-2 text-slate-400 ">
                Street address
              </label>
              <span className="col-span-8">55 Le Quang Hoa</span>
              <span className="col-span-2">
                <a href="#ChangePhone">Change street address</a>
              </span>
            </div>

            <label className="col-span-2 text-slate-400 ">Tier</label>
            <span className="col-span-10">Tier 0</span>
            <label className="col-span-2 text-slate-400 ">Quality</label>
            <span className="col-span-10">96</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCompany;
