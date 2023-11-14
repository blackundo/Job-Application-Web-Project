import img from "../../../Assets/descriptinjobs.png";
import "react-quill/dist/quill.snow.css";
import QuillCustoms from "../../Suneditor/QuillCustoms";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
function WriteJobs() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem có dữ liệu đã lưu trong localStorage không
    const storedContent = localStorage.getItem("jobContent");
    if (storedContent) {
      setContent(storedContent);
    }
  }, []);
  useEffect(() => {
    // Lưu trạng thái vào localStorage khi nội dung thay đổi
    localStorage.setItem("jobContent", content);
  }, [content]);
  return (
    <div className="flex items-center justify-center">
      <div className=" w-[46.98rem] ">
        <div className="flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <div className="pt-5">
          <span className="text-red-400 font-bold text-[0.875rem] py-2">
            Job description *
          </span>

          <QuillCustoms content={content} setContent={setContent} />

          <div className="pt-2 flex items-center justify-between">
            <button
              className="h-12 p-3  text-[#1CB8FF] border font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
              onClick={() => navigate(-1)}
            >
              <FiArrowLeft className="text-xl " />
              Back
            </button>
            <Link
              to={"/company/post_jobs/preview"}
              state={{ previewContent: content }}
              className="bg-blue-400 p-1 h-12 rounded-lg w-fit text-center font-semibold text-white hover:scale-110 flex items-center justify-center"
            >
              Next Page Preview
              <FiArrowRight className="text-xl " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteJobs;
