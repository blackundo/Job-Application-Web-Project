import { AiOutlineCloseCircle } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { BsFilter } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";

import { rows } from "./rows";
import LayoutAdminManager from "../../../Layouts/LayoutAdminManager";
import TableCompanyCustom from "../../TableCustom/TableCompanyCustom";
import { useEffect, useState } from "react";
import axiosPrivate from "../../../api/axios";

function CompanyManager() {
  const [detailSummary, setDetailSummary] = useState(null);
  const [listCompanyPending, setListCompanyPending] = useState(null);
  const companyPending = async () => {
    await axiosPrivate
      .get("/api/admin/company")
      .then((res) => {
        console.log(res.data);
        setListCompanyPending(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    companyPending();
  }, []);
  return (
    <LayoutAdminManager rows={rows}>
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
        {listCompanyPending && listCompanyPending != null && (
          <TableCompanyCustom
            rows={listCompanyPending}
            setDetailSummary={setDetailSummary}
          />
        )}
      </div>
    </LayoutAdminManager>
  );
}

export default CompanyManager;
