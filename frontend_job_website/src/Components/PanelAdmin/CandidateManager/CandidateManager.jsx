import { SlArrowDown } from "react-icons/sl";
import LayoutAdminManager from "../../../Layouts/LayoutAdminManager";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import TableCandidateCustom from "../../TableCustom/TableCandidateCustom";
import { useState } from "react";
import { useEffect } from "react";
import axiosPrivate from "../../../api/axios";
import { toast } from "react-toastify";
import swal from "sweetalert";

function CandidateManager() {
  const [detailSummary, setDetailSummary] = useState(null);
  useEffect(() => {
    console.log(detailSummary);
  }, [detailSummary]);
  const [listCandidatePending, setListCandidatePending] = useState(null);
  const candidatePending = async () => {
    await axiosPrivate
      .get("/api/admin/candidate")
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
  const handleAcceptAccount = async (id) => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    await swal({
      title: "Are you sure?",
      text: "Do you want to accept this account",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosPrivate
          .patch(`/api/admin/candidates/${id}/accept`)
          .then(() => {
            toast.dismiss(loadingToastId);
            candidatePending();
            swal("Active Success", {
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            toast.dismiss(loadingToastId);
            ToastCustom.error(
              "Opps, Active fails, Maybe account Accepted then please reload page ",
              {
                autoClose: 2500,
              }
            );
          });
      } else {
        toast.dismiss(loadingToastId);
        swal("Cancelled");
      }
    });
  };
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
          {listCandidatePending != null && listCandidatePending && (
            <TableCandidateCustom
              rows={listCandidatePending}
              setDetailSummary={setDetailSummary}
              handleAcceptAccount={handleAcceptAccount}
            />
          )}
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
                <span>Unknown</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Role</span>
                <span>Candidate</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">FullName</span>
                <span
                  className={`${detailSummary.fullname || "text-sky-600"} `}
                >
                  {detailSummary.fullname || "Not Yet Update!"}
                </span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">University Or College</span>
                <span
                  className={`${
                    detailSummary.universityOrCollege || "text-sky-600"
                  } `}
                >
                  {detailSummary.universityOrCollege || "Not Yet Update!"}
                </span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Age</span>
                <span className="text-sky-600">
                  {detailSummary.age || "Not Yet Update!"}
                </span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Gender</span>
                <span>{detailSummary.gender ? "Male" : "Famale"}</span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Email</span>
                <span className={`${detailSummary.email || "text-sky-600"} `}>
                  {detailSummary.email || "Not Yet Update!"}
                </span>
              </div>

              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">City</span>
                <span className={`${detailSummary.city || "text-sky-600"} `}>
                  {detailSummary.city || "Not Yet Update!"}
                </span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Status</span>
                <span className="border px-10 py-2 rounded-lg border-black">
                  {detailSummary.account.status ? "Active" : "Offline"}
                </span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Experience</span>
                <span className={`${detailSummary.exp || "text-sky-600"} `}>
                  {detailSummary.exp || "Not Yet Update!"}
                </span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Field Name</span>
                <span
                  className={`${detailSummary.fieldName || "text-sky-600"} `}
                >
                  {detailSummary.fieldName || "Not Yet Update!"}
                </span>
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="w-1/5">Skills</span>
                <span className={`${detailSummary.skills || "text-sky-600"} `}>
                  {detailSummary.skills || "Not Yet Update!"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CandidateManager;
