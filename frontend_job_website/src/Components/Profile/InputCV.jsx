import { useState } from "react";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { RiPhoneFindFill } from "react-icons/ri";
import { TbReplace } from "react-icons/tb";
import logoFile from "../../Assets/logoFile.svg";
import styles from "./InputCV.module.css";
import swal from "sweetalert";
import axiosPrivate from "../../api/axios";
import { ToastCustom } from "../ToastCustom/ToastCustom";
import { toast } from "react-toastify";
import { useEffect } from "react";
function InputCV({ initFile }) {
  const [option, setOption] = useState(false);
  const [nameFile, setNameFile] = useState(initFile || "default");
  const [file, setFile] = useState(null);
  const [displayPDF, setDisplayPDF] = useState("");
  const [displayPDFStatus, setDisplayPDFStatus] = useState("loading");
  const idUser = JSON.parse(localStorage.getItem("Profile")).user.id;
  const handleDisplayOption = () => {
    setOption((o) => !o);
  };
  const handleOnchangeFile = (e) => {
    console.log(e.target.value);
    if (e.target.value.length != 0) {
      const selectFile = e.target.files[0];
      const loadingToastId = toast.loading("Please wait...", {
        autoClose: false,
      });
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (yes) => {
        if (yes) {
          const data = new FormData();
          data.append("file", selectFile);
          console.log("Updating file...", selectFile);
          await axiosPrivate
            .patch("/api/profile/candidate/update", data, {
              headers: {
                // Authorization: `Bearer ${access_token}`,
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              toast.dismiss(loadingToastId);
              console.log("update cv", res.data);
              ToastCustom.success("Upload CV Success!");
              setFile(selectFile);
              setNameFile(selectFile.name);
            })
            .catch(() => {
              toast.dismiss(loadingToastId);
              ToastCustom.error("error updating");
            });
        } else {
          toast.dismiss(loadingToastId);
          swal("You Canceled updating");
        }
      });
    }
  };

  useEffect(() => {
    setDisplayPDFStatus("loading");
    axiosPrivate
      .get(`/api/profile/candidate-cv/${idUser}`, {
        responseType: "blob",
      })
      .then((res) => {
        setDisplayPDFStatus("pass");
        setDisplayPDF(URL.createObjectURL(res.data));
      })
      .catch((err) => {
        setDisplayPDFStatus("error");
        console.log(err);
      });
  }, [idUser]);

  return (
    <div className="flex flex-col  gap-3 ">
      <span className="text-2xl font-bold">CV</span>
      <div className="border-[1.5px] border-black shadow-md rounded-lg h-[7.81rem] flex items-center justify-between px-3">
        <div className="flex items-center justify-center">
          <input
            type="file"
            name="file-input"
            id="file-input"
            accept=".pdf"
            className="hidden"
            onChange={handleOnchangeFile}
          />
          {/*custom input*/}
          <img src={logoFile} alt="" />
          <div className="flex flex-col items-start justify-center px-3 ">
            <label
              htmlFor="file-input"
              className="text-[1.2rem] cursor-pointer"
            >
              {nameFile}
            </label>
            <span className="flex items-center justify-center gap-3">
              <AiOutlineEye />
              Public
            </span>
          </div>
        </div>
        <IoIosArrowForward />
      </div>
      <div
        className={`border-[1.5px] border-black shadow-md rounded-lg min-h-[7.81rem] flex items-center ${
          file ? "justify-center" : "justify-between"
        } px-3 relative transition-all`}
      >
        <div className="flex items-center justify-center gap-3 w-full">
          {/* {!file && <FaRegFilePdf className="text-5xl" />} */}
          <div
            className={`flex flex-col ${
              file ? "items-center" : "items-start"
            } justify-center h-full w-full`}
          >
            {displayPDFStatus === "loading" && <div>Loading....</div>}
            {displayPDFStatus === "pass" && !file && (
              <object
                data={displayPDF}
                type="application/pdf"
                className={`${styles.previewPdf}`}
              >
                <p>
                  Alternative text - include a link{" "}
                  <a href={displayPDF}>to the PDF!</a>
                </p>
              </object>
            )}
            {displayPDFStatus === "error" && (
              <p>It seems You forgot to upload your CV and try again</p>
            )}
            {file && (
              <object
                data={URL.createObjectURL(file)}
                type="application/pdf"
                className={`${styles.previewPdf}`}
              >
                <p>
                  Alternative text - include a link{" "}
                  <a href={file}>to the PDF!</a>
                </p>
              </object>
            )}
          </div>
        </div>
        <BsThreeDotsVertical
          className="hover:cursor-pointer"
          onClick={handleDisplayOption}
        />
        <div
          className={`border w-[12rem] h-[10.1rem] absolute top-1/2  left-full max-md:left-[60%] bg-slate-300 rounded-lg ${
            option ? "" : "hidden"
          } `}
        >
          <ul className="flex flex-col items-start justify-evenly h-full px-2">
            <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-blue-600">
              <RiPhoneFindFill className="text-2xl" />
              <a href={displayPDF && displayPDF}>See</a>
            </li>
            <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-blue-600">
              <AiOutlineDownload className="text-2xl" />
              <a href={displayPDF && displayPDF} download={"DPF"}>
                Download
              </a>
            </li>
            <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-blue-600">
              <TbReplace className="text-2xl" />
              File replacement
            </li>
            <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-red-600 text-red-300">
              <ImBin className="text-2xl " />
              Erase
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InputCV;
