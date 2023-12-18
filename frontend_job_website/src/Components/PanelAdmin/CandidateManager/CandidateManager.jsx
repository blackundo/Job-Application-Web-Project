import { SlArrowDown } from "react-icons/sl";
import LayoutAdminManager from "../../../Layouts/LayoutAdminManager";
import { rows } from "./rows";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import TableCandidateCustom from "../../TableCustom/TableCandidateCustom";
import { useState } from "react";
import { useEffect } from "react";
import axiosPrivate from "../../../api/axios";

function CandidateManager() {
  const [detailSummary, setDetailSummary] = useState(null);
  useEffect(() => {
    console.log(detailSummary);
  }, [detailSummary]);
  const [listCandidatePending, setListCandidatePending] = useState(null);
  const candidatePending = async () => {
    await axiosPrivate
      .get("/api/admin/candidate/pending")
      .then((res) => {
        console.log(res.data);
        setListCandidatePending(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    candidatePending();
  }, []);
  return (
    <>
      <LayoutAdminManager>
        <div className=" flex items-center justify-between pb-5">
          <h2 className="text-[#000084] font-semibold text-xl">
            Candidate Management
          </h2>
          <button className="bg-[#274EA3] text-white font-semibold  p-3 rounded-lg">
            Add new
          </button>
        </div>
        <div className="flex items-center justify-center w-full gap-3 px-6 pb-7">
          <div className="flex items-center justify-center grow-0 gap-2">
            <span className="text-[0.875rem] pl-3">Candidate ID</span>
            <SlArrowDown />
          </div>
          <div className="grow relative h-8">
            <input
              type="text"
              placeholder="ID Company"
              className="w-full border absolute h-8 px-3"
            />
            <AiOutlineCloseCircle className="absolute top-1/2 right-5 -translate-y-1/2" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <BsFilter className="text-xl" />
            <FaExchangeAlt className="text-xl rotate-90" />
          </div>
        </div>
        <div className="px-6">
          <TableCandidateCustom
            rows={rows}
            setDetailSummary={setDetailSummary}
          />
        </div>
      </LayoutAdminManager>
      {detailSummary && (
        <div className="w-full flex items-center justify-center py-11">
          <div className="w-11/12 bg-white shadow-lg px-5 rounded-lg  border-t-2">
            <h2 className="text-[#000084] font-semibold text-xl p-5">
              Profile
            </h2>
            <div className="flex flex-col items-start justify-center w-full gap-5 py-6">
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Create at</span>
                <span>16/06/2023, 12:02:07</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Role</span>
                <span>Candidate</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">FullName</span>
                <span>{detailSummary.fullName}</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">University Or College</span>
                <span>{detailSummary.universityOrCollege}</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Birthday</span>
                <span>12/05/2003</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Gender</span>
                <span>Male</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Email</span>
                <span>datdo77@gmail.com</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Phone number</span>
                <span>+84789444093</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Country</span>
                <span>{detailSummary.country}</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">City</span>
                <span>Da Nang</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Status</span>
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CandidateManager;
