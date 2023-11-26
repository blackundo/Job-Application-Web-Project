/* eslint-disable react/prop-types */
import { RiProfileLine } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import DialogForm from "./DialogForm";
import AccordionCustom from "../../Accordion/AccordionCustom";

function Degree() {
  const [open, setOpen] = useState(false);
  // const [input, setInput] = useState("");
  const [textContent, setTextContent] = useState({
    title: "",
    contentText: "",
    label: "",
  });
  const [lists, setLists] = useState({
    Experience: [],
    Education: [],
    Skills: [],
    Licenses: [],
    Certificate: [],
    Language: [],
  });
  const addItemToList = (title, items) => {
    setLists((prevLists) => {
      const uniqueItems = new Set([
        ...(prevLists[title] || []),
        ...items
          .trim()
          .split(",")
          .map((i) => i.trim()),
      ]);

      return {
        ...prevLists,
        [title]: Array.from(uniqueItems),
      };
    });
  };

  const { title, contentText, label } = textContent;

  const handleClickOpen = (title, contentText, label) => {
    setOpen(true);
    setTextContent({
      title: title,
      contentText: contentText,
      label: label,
    });
  };

  useEffect(() => {
    console.log(lists);
  }, [lists]);

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center max-md:mt-[5.625rem]">
      <div className="max-w-[34.81rem]  max-md:w-[25rem] max-sm:w-[20rem]">
=======
function Degree() {
  const navigate = useNavigate();
  return (
    <div className="  flex items-center justify-center max-md:mt-[5.625rem]">
      <div className="max-w-[34.81rem] ">
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
        <div>
          <span className="cursor-pointer">
            <AiOutlineArrowLeft onClick={() => navigate(-1)} />
          </span>
          <div className="pt-5 pb-10">
            <span className="font-bold text-2xl ">Degree</span>
            <br />
            <small className="text-slate-300">
              We use these insights to show you jobs that match your unique
              skills and experience
            </small>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col gap-3 items-center justify-center ">
            <AccordionCustom
              title={"Add recent work experience"}
              list={lists?.Experience}
              onClick={() =>
                handleClickOpen(
                  "Work Experience",
                  "Add recent work experience",
                  "Experience"
                )
              }
            >
              <RiProfileLine className="text-xl text-slate-400" />
            </AccordionCustom>
            <AccordionCustom
              title={"More Education"}
              list={lists.Education}
              onClick={() =>
                handleClickOpen("Education", "More Education", "Education")
              }
            >
              <PiCertificateFill className="text-xl text-slate-400" />
            </AccordionCustom>
            <AccordionCustom
              title={" More Skills"}
              list={lists.Skills}
              onClick={() => handleClickOpen("Skills", "More Skills", "Skills")}
            >
              <LiaCertificateSolid className="text-xl text-slate-400" />
            </AccordionCustom>
            <AccordionCustom
              title={" Add licenses"}
              list={lists.Licenses}
              onClick={() =>
                handleClickOpen("Licenses", "Add licenses", "Licenses")
              }
            >
              <LiaCertificateSolid className="text-xl text-slate-400" />
            </AccordionCustom>
            <AccordionCustom
              title={" Add a certificate"}
              list={lists.Certificate}
              onClick={() =>
                handleClickOpen(
                  "Certificate",
                  "Add a Certificate",
                  "Certificate"
                )
              }
            >
              <LiaCertificateSolid className="text-xl text-slate-400" />
            </AccordionCustom>
            <AccordionCustom
              title={"Add a language"}
              list={lists.Language}
              onClick={() =>
                handleClickOpen("Language", "Add a Language", "Language")
              }
            >
              <FaGlobeAmericas className="text-xl text-slate-400" />
            </AccordionCustom>
          </div>
        </div>
        <DialogForm
          open={open}
          setOpen={setOpen}
          title={title}
          contentText={contentText}
          label={label}
          addItemToList={addItemToList}
        />
=======
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full">
              <div className="flex items-center justify-center gap-2">
                <RiProfileLine className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  Add recent work experience
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <PiCertificateFill className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  More Education
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <LiaCertificateSolid className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  More Skills
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <LiaCertificateSolid className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  Add licenses
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <LiaCertificateSolid className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  Add a certificate
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
            <div className="flex items-center justify-between h-[4.75rem] border-t border-slate-300 w-full ">
              <div className="flex items-center justify-center gap-2">
                <FaGlobeAmericas className="text-xl text-slate-400" />
                <span className="text-xl text-blue-500 font-normal">
                  Add a language
                </span>
              </div>
              <span
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            </div>
          </div>
        </div>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
      </div>
    </div>
  );
}

export default Degree;
