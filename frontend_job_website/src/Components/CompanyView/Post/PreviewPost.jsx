import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PreviewPost.module.css";
import img from "../../../Assets/imgPreview.png";
import { FiArrowLeft } from "react-icons/fi";
import axiosPrivate from "../../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import { ToastCustom } from "../../ToastCustom/ToastCustom";

function PreviewPost() {
  const location = useLocation();
  const navigate = useNavigate();
  const previewContent = location.state?.previewContent || "";
  const detailsStep = location.state?.detailsStep || "";
  console.log(detailsStep);
  const access_token = JSON.parse(localStorage.getItem("Token"))?.access_token;

  const handlePostJob = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    let config = {
      method: "post",
      url: "/api/hiring/create",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        ...detailsStep,
        status: "open",
      },
    };

    try {
      const res = await axiosPrivate(config);
      console.log(res.data);

      toast.dismiss(loadingToastId);
      ToastCustom.success("Post success!", { autoClose: 2500 });
      localStorage.setItem("postedDetails", JSON.stringify(detailsStep));
      localStorage.removeItem("jobDetails");
      localStorage.removeItem("moreDetails");
      localStorage.removeItem("jobContent");
      navigate("/company/post_jobs/posted");
    } catch (err) {
      console.log(err);
      toast.dismiss(loadingToastId);
      ToastCustom.error("Post Error!, You can post again", {
        autoClose: 2500,
      });
    }
  };

  return (
    <div className="flex items-center justify-center flex-col ">
      <ToastContainer
        position="bottom-right"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className=" w-[46.98rem] ">
        <div className="pb-6">
          <img src={img} alt="" />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: previewContent }}
          className={`w-full border ${styles.wrapper} ql-editor  overflow-y-auto prose prose-lg px-10`}
        />
        <div className="pt-2 flex items-center justify-between">
          <button
            className="h-12 p-3  text-[#1CB8FF] border font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft className="text-xl " />
            Back
          </button>
          <button
            onClick={handlePostJob}
            className="bg-blue-400 p-1 h-12 rounded-lg w-20 text-center font-semibold text-white hover:scale-110 flex items-center justify-center"
          >
            POST
            {/* <FiArrowRight className="text-xl " /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewPost;
