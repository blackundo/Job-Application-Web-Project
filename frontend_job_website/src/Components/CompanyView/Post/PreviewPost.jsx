import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./PreviewPost.module.css";
import img from "../../../Assets/imgPreview.png";
import { FiArrowLeft } from "react-icons/fi";

function PreviewPost() {
  const location = useLocation();
  const previewContent = location.state?.previewContent || "";
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className=" w-[46.98rem] ">
        <div className="pb-6">
          <img src={img} alt="" />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: previewContent }}
          className={`w-full border ${styles.wrapper} ql-editor  overflow-y-auto`}
        />
        <div className="pt-2 flex items-center justify-between">
          <button
            className="h-12 p-3  text-[#1CB8FF] border font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft className="text-xl " />
            Back
          </button>
          <Link
            to={"/company/post_jobs/posted"}
            className="bg-blue-400 p-1 h-12 rounded-lg w-20 text-center font-semibold text-white hover:scale-110 flex items-center justify-center"
          >
            POST
            {/* <FiArrowRight className="text-xl " /> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PreviewPost;
