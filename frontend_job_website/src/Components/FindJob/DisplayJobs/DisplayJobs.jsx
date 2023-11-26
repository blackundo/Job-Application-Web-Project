import { AiFillQuestionCircle, AiOutlineMore } from "react-icons/ai";
// import { jobs } from "./job";
import DetailsJob from "./DetailsJob";
<<<<<<< HEAD
import { memo, useState } from "react";

import "./DisplayJobs.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axiosPrivate from "../../../api/axios";
import ReactPaginate from "react-paginate";

const DisplayJobs = () => {
  const [loadDetail, setLoadDetail] = useState(false);
  const [jobs, setJobs] = useState([]);
  const mobile = window.innerWidth <= 768;
  const [jobDetail, setJobDetail] = useState(null);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState("All");
  const [totalItems, setTotalItems] = useState(0);
  const handleChooseJob = async (id) => {
    setLoadDetail(false);
    await axiosPrivate
      .get(`http://localhost:80/api/hiring/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoadDetail(true);
        // console.log(res.data[0].image_company);
        setJobDetail(res.data);
=======
import { useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./DisplayJobs.css";
import { Link } from "react-router-dom";

// const calculator = (start_date) => {
//   const currentDate = new Date();
//   console.log(currentDate);
//   const startDate = start_date?.split("-").reverse().join("-");
//   console.log(new Date(startDate || startDate));
//   console.log(differenceInDays(currentDate, new Date(startDate)));
// };

function DisplayJobs({ Jobs, load, error }) {
  const [jobDetail, setJobDetail] = useState(null);
  const [loadDetail, setLoadDetail] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const jobsPerPage = 10;
  const mobile = window.innerWidth <= 768;

  const handleChooseJob = async (id) => {
    setLoadDetail(true);
    await axios
      .get(`http://localhost:9001/Jobs?ID=${id}`)
      .then((res) => {
        setLoadDetail(false);
        // console.log(res.data[0].image_company);
        setJobDetail(res.data[0]);
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
      })
      .catch((err) => {
        console.log(err);
      });
  };

<<<<<<< HEAD
  useEffect(() => {
    async function fetchDataJobs() {
      await axiosPrivate
        .get(
          `http://localhost:80/api/hiring/get?page=${page}&size=${
            pageSize === "All" ? "" : pageSize
          }`
        )
        .then((res) => {
          console.log(res.data);
          const data = res.data.content;
          setJobs(data);
          setTotalItems(res.data.totalElements);
        })
        .catch((err) => console.log(err));
    }
    fetchDataJobs();
  }, [page, pageSize]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
    setPage(0);
  };

  const pageCount = Math.ceil(totalItems / pageSize);

=======
  const endOffset = itemOffset + jobsPerPage;
  const currentJobs = Jobs?.slice(itemOffset, endOffset);
  const pageNumbers = isNaN(Math.ceil(Jobs?.length / jobsPerPage))
    ? 0
    : Math.ceil(Jobs?.length / jobsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * jobsPerPage) % Jobs?.length;

    setItemOffset(newOffset);
  };

>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
  return (
    <>
      <div className="grid grid-cols-12 place-content-center place-items-start pt-5 gap-5 max-md:px-10">
        <div className="col-span-5 max-md:col-span-12">
          <div className="border-b border-slate-300 pb-4 ">
            <span className="text-blue-400 text-[0.875rem]">
              Post your resume
            </span>
            <span className=" text-[0.875rem]">
              and find your next job on JobHunter!
            </span>
          </div>
<<<<<<< HEAD
          <div className="pb-3">
            {/* <span className="text-[0.68rem]">Job in Da Nang</span> */}
            <div className="flex items-center justify-between">
              {/* <span className="text-[0.81rem]">Short by: (X) - (X)</span> */}
              <select onChange={handlePageSizeChange} value={pageSize}>
                <option value="All">all</option>
                <option value="1">1 per page</option>
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="20">20 per page</option>
                <option value="25">25 per page</option>
              </select>
              <span className="flex items-center justify-center text-[0.68rem] gap-1">
                {jobs?.length} Jobs
=======
          <div>
            <span className="text-[0.68rem]">Job in Da Nang</span>
            <div className="flex items-center justify-between">
              <span className="text-[0.81rem]">Short by: (X) - (X)</span>
              <span className="flex items-center justify-center text-[0.68rem] gap-1">
                {Jobs?.length} Jobs
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
                <AiFillQuestionCircle className="text-slate-400" />
              </span>
            </div>
          </div>
<<<<<<< HEAD
          {jobs.length === 0 ? (
=======
          {load ? (
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
            Array.from({ length: 5 }, (_, k) => {
              return (
                <div
                  className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-2"
                  key={k}
                >
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-700 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="listJobs flex flex-col items-center icon gap-3">
<<<<<<< HEAD
              {jobs?.map((i, index) => {
=======
              {currentJobs?.map((j, i) => {
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
                return (
                  <Link
                    to={`${mobile ? "detailsMb" : ""}`}
                    className="box border-[3px] border-slate-700 px-4 rounded-2xl py-2 cursor-pointer hover:bg-blue-500/30 transition-colors max-h-[17rem] w-full"
<<<<<<< HEAD
                    key={index}
                    onClick={() => handleChooseJob(i.id)}
                  >
                    <div className="flex items-start justify-between pb-2">
                      <div className="flex flex-col">
                        <div className=" flex flex-col">
                          <span className="font-bold text-[1.5rem]">
                            {i.hiringName}
                          </span>
                          <span className="text-[1.125rem]">
                            {i.hiringContentID.title}
                          </span>
                        </div>
                        <div className="flex items-center justify-start gap-2 ">
                          <span>{i.location}</span>
                          {i.fieldName?.split(",").map((field, index) => (
                            <span
                              key={index}
                              className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-lg "
                            >
                              {field}
                            </span>
                          ))}
=======
                    key={i}
                    onClick={() => handleChooseJob(j.ID)}
                  >
                    <div className="flex items-start justify-between pb-5">
                      <div className="flex flex-col">
                        <div className=" flex flex-col">
                          <span className="font-bold text-[1.5rem]">
                            {j.company_name}
                          </span>
                          <span className="text-[1.125rem]">{j.NameHR}</span>
                        </div>
                        <div className="flex flex-col items-start justify-center ">
                          <span>{j.location}</span>
                          <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ">
                            {j.Type}
                          </span>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
                        </div>
                      </div>
                      <AiOutlineMore className="text-3xl font-bold" />
                    </div>
<<<<<<< HEAD
                    <div className="flex items-center justify-start gap-3">
                      <span className="h-[1.68rem]  bg-sky-300 text-black p-1 text-[0.875rem] rounded-lg ">
                        {i.minSalary} $
                      </span>
                      -
                      <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-lg ">
                        {i.maxSalary} $
                      </span>
                    </div>
                    <div>
                      {/* <span
                        className="text-[##5A5A5A] line-clamp-3 overflow-hidden pb-3 contentSummary"
                        dangerouslySetInnerHTML={{
                          __html: i.hiringContentID.content,
                        }}
                      ></span> */}
                      <div className="flex flex-col items-start justify-center gap-1 pt-2">
                        <div className="flex items-center justify-center gap-2">
                          {/* <span className="font-normal">Date End:</span> */}
                          <span className="text-black bg-slate-200 p-1 rounded-lg">
                            {i.dateSubmit}
                          </span>
                          <span>-</span>
                          <span className="text-black bg-slate-200 p-1 rounded-lg">
                            {i.dateEnd}
                          </span>
                        </div>
                        <span className="cursor-pointer hover:font-bold">
                          More
                        </span>
=======
                    <div>
                      <span className="text-[##5A5A5A] line-clamp-2">
                        {j.job_description}
                      </span>
                      <div className="flex items-center justify-start gap-3">
                        <span className="text-[##5A5A5A]">{j.start_date}</span>
                        <span className="cursor-pointer">More</span>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="flex items-center justify-center text-lg">
            <span>
              Be the first to see new <strong>jobs in Da Nang</strong>
            </span>
          </div>
        </div>
        <DetailsJob job={jobDetail} load={loadDetail} />
      </div>
      <div className=" flex items-center justify-center gap-2 py-[1.875rem] ">
        <div className={`flex flex-nowrap overflow-x-auto gap-1`}>
<<<<<<< HEAD
          <div>
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onPageChange={({ selected }) => handlePageChange(selected)}
              containerClassName={"pagination"}
              activeClassName={
                "active bg-slate-300 p-1 rounded-lg w-10 text-center"
              }
              className="flex items-center justify-center gap-3"
            />
          </div>
=======
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageNumbers}
            previousLabel="<"
            className={`flex items-center justify-center gap-3 pagination`}
            renderOnZeroPageCount={null}
          />
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default memo(DisplayJobs);
=======
}

export default DisplayJobs;
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
