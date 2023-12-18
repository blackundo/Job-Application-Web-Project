import { motion } from "framer-motion";
import { useState } from "react";
import imageDefault from "../../../Assets/defaultCover.jpg";

function TabSummary({ summaryCompany }) {
  const [imageCoverError, setImageCoverError] = useState(false);
  const {
    address,
    companyName,
    fouding,
    introduction,
    organizational,
    phoneNumber,
    mainFieldID,
    id,
  } = summaryCompany;
  return (
    <motion.div
      key="summary"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="border-t border-slate-700/40 pt-2 overflow-y-auto h-full pb-[7rem] px-4"
    >
      <div>
        <strong>Company Name: </strong>
        <span>{companyName}</span>
      </div>
      <div className="flex items-center justify-start gap-3">
        <strong>Logo of Company:</strong>
        <img
          src={
            imageCoverError
              ? imageDefault
              : `http://api.modundo.com/api/profile/company-avatar/${id}`
          }
          onError={() => setImageCoverError(true)}
          alt=""
          className="w-20 h-20 rounded-full"
        />
      </div>
      <div>
        <strong>Address: </strong>
        <span className="uppercase">{address}</span>
      </div>
      <div>
        <strong>Founded : </strong>
        <span> In {fouding}</span>
      </div>
      <div>
        <strong>Business phone number: </strong>
        <span> {phoneNumber}</span>
      </div>
      <div>
        <strong>Organizational: </strong>
        <span> {organizational}</span> <small>employees</small>
      </div>
      <div>
        <strong>Introduction: </strong>
        <br />
        <span className="">{introduction}</span>
      </div>
      <div>
        <strong>Fields Name:</strong>
        <ul>
          {/* {mainFieldID?.split(", ").map((item, index) => {
            return <li key={item}>{item}</li>;
          })} */}
          <li>Java</li>
          <li>C#</li>
          <li>Marketing</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default TabSummary;
