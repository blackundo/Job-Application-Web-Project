import axiosPrivate from "../../../api/axios";
import swal from "sweetalert";

import Details from "./details";
function DetailsJob({ job, loadDetails }) {

  const acc = JSON.parse(localStorage.getItem("Profile"));
  const role = acc?.user?.role?.roleName ?? null;
  const handleApplyJob = async () => {
    const tokenAccess = JSON.parse(localStorage.getItem("Token")).access_token;
    console.log(tokenAccess);
    await swal({
      title: "Are you sure?",
      text: "You Want apply this job?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((yes) => {
      if (yes) {
        swal("Apply success!", {
          icon: "success",
        });
        if (acc.user)
          axiosPrivate
            .post(
              "/api/apply/",
              { hiringID: job.id, status: "Apply" },
              {
                headers: {
                  Authorization: "Bearer " + tokenAccess,
                },
              }
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
      } else {
        swal("Cancel!");
      }
    });
  };

  return (
    <div className="col-span-7 border-2 border-slate-600 w-full h-[46rem] pt-2 rounded-2xl  sticky top-4 max-md:hidden overflow-y-hidden ">

      {loadDetails && (
        <div className="flex items-center justify-center h-full w-full">
          <button
            type="button"
            className=" flex items-center justify-center "
            disabled
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-10 w-10 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </button>

        </div>
      )}
      {job === null && (
        <div className="flex items-center justify-center h-1/2 text-2xl">
          <div className="flex items-center justify-center gap-3">
            <span>Please choose the job you want to see</span>
            <button
              type="button"
              className=" flex items-center justify-center "
              disabled
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      {job != null && !loadDetails && (
        <Details job={job} handleApplyJob={handleApplyJob} role={role} />
      )}
    </div>
  );
}

export default DetailsJob;
