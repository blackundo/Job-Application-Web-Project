import { useState } from "react";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { RiPhoneFindFill } from "react-icons/ri";
import { TbReplace } from "react-icons/tb";
import logoFile from "../../Assets/logoFile.svg";
import styles from "./InputCV.module.css";
function InputCV({ initFile }) {
  const [option, setOption] = useState(false);
  const [nameFile, setNameFile] = useState(initFile[0]?.file_CV);
  const [file, setFile] = useState(null);

  const handleDisplayOption = () => {
    setOption((o) => !o);
  };

  const handleOnchangeFile = (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length === 0) {
      setNameFile("You have not uploaded your CV file yet ");
    } else {
      const selectFile = e.target.files[0];
      setFile(selectFile);
      setNameFile(selectFile.name);
    }
  };

  return (
    <div className="flex flex-col  gap-3">
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
        <div className="flex items-center justify-center gap-3">
          {!file && <FaRegFilePdf className="text-5xl" />}
          <div
            className={`flex flex-col ${
              file ? "items-center" : "items-start"
            } justify-center h-full`}
          >
            {file ? (
              <object
                data={URL.createObjectURL(file)}
                type="application/pdf"
                className={styles.previewPdf}
              >
                <p>
                  Alternative text - include a link{" "}
                  <a href={URL.createObjectURL(file)}>to the PDF!</a>
                </p>
              </object>
            ) : (
              <>
                <span className="text-lg font-bold">
                  CV-DoPhuocDat-Junior.Pdf
                </span>
                <small>Important today</small>
              </>
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
              See
            </li>
            <li className="flex items-center justify-start text-[1rem] gap-2 cursor-pointer hover:text-blue-600">
              <AiOutlineDownload className="text-2xl" />
              Download
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
