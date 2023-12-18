import { useEffect, useState } from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { ImBin } from "react-icons/im";
import { Link, useLocation, useParams } from "react-router-dom";
import axiosPrivate from "../../../../api/axios";
import imageDefault from "../../../../Assets/defaultCover.jpg";

function DetailsCompany() {
  const [imageCoverError, setImageCoverError] = useState(false);
  const location = useLocation();
  const info = location.state?.information || {};

  let { id } = useParams();
  const detailsCompany = async () => {
    axiosPrivate
      .get("/api/profile/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {}, []);
  return (
    <div className="w-full flex items-center justify-center pt-11">
      <div className="w-11/12 ">
        <div className="pb-4">
          <div className="text-sm">
            <span>
              <Link to={"/admin/companyManager"}>Company Manager</Link> /{" "}
            </span>
            <span className="text-blue-800 font-semibold">
              {info.companyName}
            </span>
          </div>
          <h1 className="text-[1.3125rem] text-[#000084] font-semibold">
            User detail
          </h1>
        </div>
        <div className="border p-3 rounded-md shadow-md">
          <div className="flex items-center justify-start w-full gap-3 pb-3">
            <img
              src={
                imageCoverError
                  ? imageDefault
                  : `http://api.modundo.com/api/profile/company-avatar/${id}`
              }
              onError={() => setImageCoverError(true)}
              alt=""
              className="border rounded-full w-20 h-20 overflow-hidden"
            />

            <span className="font-semibold"> {info.companyName}</span>
            {/*  <div className="flex items-center justify-center gap-3  border p-1 rounded-md border-green-500">
              <GrStatusGoodSmall className="fill-green-500" />
              <button>Active</button>
            </div> */}
            {info.account.status ? (
              <div className="flex items-center justify-center gap-3 border p-1 border-green-400 rounded-md">
                <GrStatusGoodSmall className="fill-green-400" />
                <button>Active</button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3  border p-1 rounded-md">
                <GrStatusGoodSmall />
                <button>Not Activated</button>
              </div>
            )}
            <div className="flex items-center justify-center bg-slate-200 p-1 rounded-md">
              <span>Company ID: </span>
              <span>{id}</span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2 border w-fit p-1 hover:bg-rose-700 hover:text-white hover:cursor-pointer">
            <ImBin />
            <span>Block Company</span>
          </div>
          <label className="col-span-2 text-slate-700 text-xl font-bold">
            Summary:
          </label>
          <p className="col-span-10">{info.introduction}</p>
        </div>
        <div className="border p-3 rounded-md shadow-md mt-6">
          <span className="text-xl font-semibold text-[#000084]">Profile</span>
          <div className="grid grid-cols-12 gap-7 py-3">
            <label className="col-span-2 text-slate-400 ">Create at</label>
            <span className="col-span-10 text-rose-500">Unknown</span>
            <label className="col-span-2 text-slate-400 ">Company name</label>
            <span className="col-span-10">{info.companyName}</span>
            <label className="col-span-2 text-slate-400 ">Business Email</label>
            <span className="col-span-10">{info.businessEmail}</span>
            <label className="col-span-2 text-slate-400 ">Email HR</label>
            <span className="col-span-10">{info.account.email}</span>
            <div className="col-span-12 grid grid-cols-12">
              <label className="col-span-2 text-slate-400 ">Phone number</label>
              <span className="col-span-8">{info.phoneNumber}</span>
              <span className="col-span-2">
                <a href="#ChangePhone">Change Phone</a>
              </span>
            </div>

            <div className="col-span-12 grid grid-cols-12">
              <label className="col-span-2 text-slate-400 ">Country</label>
              <span className="col-span-8">{info.address}</span>
              <span className="col-span-2">
                <a href="#ChangePhone">Change Country</a>
              </span>
            </div>
            {/*    <div className="col-span-12 grid grid-cols-12">
              <label className="col-span-2 text-slate-400 ">
                Street address
              </label>
              <span className="col-span-8">55 Le Quang Hoa</span>
              <span className="col-span-2">
                <a href="#ChangePhone">Change street address</a>
              </span>
            </div> */}

            <label className="col-span-2 text-slate-400 ">Founding</label>
            <span className="col-span-10">In {info.fouding}</span>
            <label className="col-span-2 text-slate-400 ">Organizational</label>
            <span className="col-span-10">{info.organizational} Employee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCompany;
