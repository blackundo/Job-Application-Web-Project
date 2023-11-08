import styles from "./CompanyManager.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { BsFilter } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import TableCustom from "../../TableCustom/TableCustom";
import { rows } from "./rows";

function CompanyManager() {
  return (
    <div className="w-full flex items-center justify-center pt-11">
      <div className="w-11/12 ">
        <div className=" flex items-center justify-between pb-5">
          <h2 className="text-[#000084] font-semibold text-xl">
            Company Management
          </h2>
          <button className="bg-[#274EA3] text-white font-semibold  p-3 rounded-lg">
            Add new
          </button>
        </div>
        <div className="flex items-center justify-center w-full gap-3 px-6 pb-7">
          <div className="flex items-center justify-center grow-0 gap-2">
            <span className="text-[0.875rem] pl-3">Company ID</span>
            <SlArrowDown />
          </div>
          <div className="grow relative h-8">
            <input
              type="text"
              placeholder="ID Company"
              className="w-full border absolute h-8 px-3"
            />
            <AiOutlineCloseCircle className="absolute top-1/2 right-5 -translate-y-1/2" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <BsFilter className="text-xl" />
            <FaExchangeAlt className="text-xl rotate-90" />
          </div>
        </div>
        <div className="px-6">
          <TableCustom rows={rows} />
        </div>
      </div>
    </div>
  );
}

export default CompanyManager;
