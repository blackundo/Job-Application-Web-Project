import { FaBan } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import imageDefault from "../../../Assets/defaultCover.jpg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TabDetails from "../DetailsJobTab/TabDetails";
import TabSummary from "../DetailsJobTab/TabSummary";
import axiosPrivate from "../../../api/axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// const acc = JSON.parse(localStorage.getItem("Profile"));
function Details({ job, role }) {
  const [selectTab, setSelectTab] = useState("details");
  const [imageCoverError, setImageCoverError] = useState(false);
  const [wishListed, setWishListed] = useState(false);
  // const [imageAvatarError, setImageAvatarError] = useState(false);
  const navigate = useNavigate();
  const handleOnChangeTab = (tabs) => {
    setSelectTab(tabs);
  };
  const { address, companyName, businessEmail } =
    role === "Company" || role === null ? job.companyID : job.hiring.companyID;
  const handleWishList = async () => {
    const tokenAccess = JSON.parse(localStorage.getItem("Token")).access_token;
    await axiosPrivate
      .post(
        "/api/wish/add",
        {
          hiring_id: job.hiring.id,
        },
        {
          headers: {
            Authorization: `Bearer ${tokenAccess}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setWishListed(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleApplyJob = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    await swal({
      title: "Are you sure?",
      text: "You Want apply this job?",
      icon: "warning",
      buttons: {
        Apply: "Apply",
        ChangeCV: {
          text: "Change CV",
        },
        Cancel: true,
      },
      dangerMode: true,
    }).then((confirm) => {
      switch (confirm) {
        case "Apply":
          axiosPrivate
            .post("/api/apply/", { hiringID: job.hiring.id, status: "Apply" })
            .then((res) => {
              if (res.status === 200) {
                swal("Apply success!", {
                  icon: "success",
                });
                toast.dismiss(loadingToastId);
              }
              if (res.status === 204) {
                swal("You Applied!", {
                  icon: "error",
                });
                toast.dismiss(loadingToastId);
              }
            })
            .catch(() => {
              swal("Apply Fails!", {
                icon: "error",
              });
              toast.dismiss(loadingToastId);
            });
          break;

        case "ChangeCV":
          navigate("/user");
          toast.dismiss(loadingToastId);
          break;

        default:
          toast.dismiss(loadingToastId);
      }
    });
  };
  const handleChangeApply = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    await swal({
      title: "Do you want to change ",
      text: "You Want apply this job?",
      icon: "warning",
      buttons: {
        UnApply: "UnApply",
        Cancel: true,
      },
      dangerMode: true,
    }).then((confirm) => {
      switch (confirm) {
        case "UnApply":
          axiosPrivate
            .delete(`/api/apply/${job.hiring.id}`)
            .then((res) => {
              if (res.status === 204) {
                swal("Apply success!", {
                  icon: "success",
                });
                toast.dismiss(loadingToastId);
              }
              /*  if (res.status === 204) {
                swal("You Applied!", {
                  icon: "error",
                });
                toast.dismiss(loadingToastId);
              } */
            })
            .catch(() => {
              swal("Apply Fails!", {
                icon: "error",
              });
              toast.dismiss(loadingToastId);
            });
          break;
      }
    });
  };
  return (
    <>
      <div className="p-1">
        <div className="relative h-60">
          <img
            src={
              imageCoverError
                ? imageDefault
                : `http://api.modundo.com/api/profile/company-cover/${
                    role === "Company" || role === null
                      ? job.companyID.id
                      : job.hiring.companyID.id
                  }`
            }
            onError={() => setImageCoverError(true)}
            className="w-full object-cover h-3/4 absolute z-10 rounded-lg"
          />

          <div className="flex flex-col items-start justify-center gap-2 absolute z-50 top-[55%] backdrop-blur-sm w-full px-5 h-[6.7rem] ">
            <div className="flex flex-col">
              <span className="font-bold text-[1.5rem] text-sky-400">
                {companyName}
              </span>
            </div>
            <p>
              <strong>Location</strong>:{" "}
              <span className="uppercase">{address}</span>
            </p>
            <span>
              <strong>Email Business</strong>: {businessEmail}
            </span>
          </div>
        </div>

        <div>
          {role === "Candidate" && (
            <div className="flex items-center justify-start gap-3">
              {job?.status === "Close" && (
                <button
                  className="w-[19rem] h-[3.125rem]  bg-slate-400 rounded-lg text-[1.31rem] text-white font-bold cursor-not-allowed"
                  disabled
                >
                  Job Closed
                </button>
              )}
              {job?.applied && (
                <button
                  className="w-[19rem] h-[3.125rem] bg-yellow-300 rounded-lg text-[1.31rem] text-white font-bold cursor-not-allowed"
                  //disabled
                  onClick={handleChangeApply}
                >
                  Applied
                </button>
              )}
              {!job.applied && job.status != "Close" && (
                <button
                  className="w-[19rem] h-[3.125rem] bg-[#1CB8FF] rounded-lg text-[1.31rem] text-white font-bold"
                  onClick={handleApplyJob}
                >
                  Apply on company site
                </button>
              )}

              <span
                className={`text-3xl h-[3.25rem] w-[3.25rem] bg-[#E4E2E0] flex items-center
                 justify-center rounded-xl hover:text-rose-500 cursor-pointer ${
                   job.wishlisted || wishListed ? "text-rose-500" : ""
                 }`}
                onClick={handleWishList}
              >
                <AiFillHeart />
              </span>
              <span
                className="text-3xl h-[3.25rem] w-[3.25rem] bg-[#E4E2E0] flex items-center
                 justify-center rounded-xl hover:text-red-500 cursor-pointer"
              >
                <FaBan />
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-around ">
        <span
          className={`${
            selectTab === "details" ? "border-b-2 border-black font-bold " : ""
          }  hover:cursor-pointer`}
          onClick={() => handleOnChangeTab("details")}
        >
          Detail Jobs
        </span>
        <span
          className={`${
            selectTab === "summary" ? "border-b-2 border-black font-bold " : ""
          } hover:cursor-pointer`}
          onClick={() => handleOnChangeTab("summary")}
        >
          Summary Company
        </span>
      </div>
      <AnimatePresence>
        <div className="h-[28rem]">
          {selectTab === "details" ? (
            <TabDetails job={job} role={role} />
          ) : (
            <TabSummary
              summaryCompany={
                role === "Company" || role === null
                  ? job?.companyID
                  : job?.hiring.companyID
              }
            />
          )}
        </div>
      </AnimatePresence>
    </>
  );
}

export default Details;
