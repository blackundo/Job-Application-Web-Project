import { useCallback, useEffect, useState } from "react";
import { IoBusinessSharp } from "react-icons/io5";
import img from "../../../Assets/savedJobCD.svg";
import axiosPrivate from "../../../api/axios";
import { RiCalendarCloseFill } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CiBookmarkRemove } from "react-icons/ci";

const SavedTab = () => {
  const [item, setItem] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const getAllJobSaved = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem("Token")).access_token;
    await axiosPrivate
      .get("/api/wish/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const itemsData = res.data;
        const totalItems = itemsData.length;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToShow = itemsData.slice(startIndex, endIndex);
        setItem(itemsToShow);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, itemsPerPage]);

  const unwish = async (id) => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: true,
    });
    await swal({
      title: "Are you sure?",
      text: "You Want apply this job?",
      icon: "warning",
      buttons: {
        Yes: "Yes",
        Cancel: true,
      },
      dangerMode: true,
    }).then((confirm) => {
      if (confirm === "Yes") {
        axiosPrivate
          .delete(`/api/wish/${id}`)
          .then(() => {
            toast.dismiss(loadingToastId);
            getAllJobSaved();
            swal("Unwish success", {
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            swal("Unwish Error, Please Click Again", {
              icon: "error",
            });
          });
      } else {
        toast.dismiss(loadingToastId);
        swal("Cancel", {
          icon: "error",
        });
      }
    });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    getAllJobSaved();
  }, [getAllJobSaved]);

  const handleApplyJob = async (id) => {
    const tokenAccess = JSON.parse(localStorage.getItem("Token")).access_token;
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
            .post(
              "/api/apply/",
              { hiringID: id, status: "Apply" },
              {
                headers: {
                  Authorization: "Bearer " + tokenAccess,
                },
              }
            )
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
          break;

        default:
          toast.dismiss(loadingToastId);
      }
    });
  };

  return (
    <>
      {item.length > 0 ? (
        <>
          {item.map((i, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-start gap-5 w-full"
              >
                <span className="text-3xl">
                  <IoBusinessSharp />
                </span>
                <div className="flex flex-col items-start justify-between w-full">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg font-semibold">
                        {i.hiringID.hiringName}
                      </span>
                      <div>
                        {i.hiringID.status === "Open" ? (
                          <span className="text-green-500">
                            <FaCalendarCheck />
                          </span>
                        ) : (
                          <span className="text-red-500">
                            <RiCalendarCloseFill />
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[0.9rem]">
                      {i.hiringID.fieldName}
                    </span>
                    <small className="text-[0.6rem]">
                      {i.hiringID.companyID.address}
                    </small>
                    <div>
                      <small className="text-[0.6rem]">
                        {i.hiringID.dateSubmit}
                      </small>
                      {" - "}
                      <small className="text-[0.6rem]">
                        {i.hiringID.dateEnd}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <button
                    className="p-2 rounded-lg bg-[#1CB8FF] w-32"
                    onClick={() => handleApplyJob(i.hiringID.id)}
                  >
                    Apply now
                  </button>
                  <span
                    className="text-3xl text-rose-300 hover:cursor-pointer hover:text-red-700"
                    onClick={() => unwish(i.hiringID.id)}
                  >
                    <CiBookmarkRemove />
                  </span>
                </div>
              </div>
            );
          })}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-5 w-full">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-2 p-2 rounded bg-gray-300"
              >
                Prev
              </button>
              <span className="mx-2 text-xl">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="mx-2 p-2 rounded bg-gray-300"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full">
          <img src={img} alt="" />
        </div>
      )}
    </>
  );
};

export default SavedTab;
