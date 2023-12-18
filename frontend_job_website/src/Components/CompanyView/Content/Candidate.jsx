import { useEffect, useState } from "react";
import TableCustom from "../../TableCustom/TableCustom";
import axiosPrivate from "../../../api/axios";

function Candidate() {
  const [detailSummary, setDetailSummary] = useState(null);
  const [dataRows, setDataRows] = useState(null);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [displayPDF, setDisplayPDF] = useState("");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token")).access_token;
    const getCandidateApplied = async () => {
      await axiosPrivate
        .get(`/api/apply/get-applied?page=${page}&size=${size}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDataRows(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCandidateApplied();
  }, [page, size]);

  const handleRejectCandidate = async (id) => {
    const token = JSON.parse(localStorage.getItem("Token")).access_token;
    await axiosPrivate
      .delete(`/api/apply/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(dataRows);
  }, [dataRows]);

  return (
    <div className="h-[calc(100vh-6rem)] p-5">
      <div className="border-t border-x flex  items-center justify-center h-full rounded-t-lg">
        <div className={`w-1/2  h-full max-lg:w-full `}>
          <h1 className="flex items-center justify-center font-bold text-2xl py-10">
            List Candidate
          </h1>
          {dataRows != null && (
            <TableCustom
              data={dataRows}
              setPage={setPage}
              setSize={setSize}
              setDetailSummary={setDetailSummary}
              setDisplayPDF={setDisplayPDF}
              rejectCandidate={handleRejectCandidate}
            />
          )}
        </div>
        <div className="w-1/2 h-full max-lg:hidden rounded-r-xl">
          {detailSummary && (
            <DisplayDetails
              detailSummary={detailSummary}
              displayPDF={displayPDF}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Candidate;

function DisplayDetails({ detailSummary, displayPDF }) {
  // const handleClose = () => {
  //   setDetailSummary(null);
  // };
  // const handleStatusChange = (newStatus) => {
  //   updateRowStatus(newStatus);
  // };

  return (
    <div className="flex flex-col items-start justify-center h-full">
      <div className="flex items-center justify-between w-full px-10 h-[7%] bg-slate-100 shadow-md">
        <div className="flex items-center justify-center gap-4 ">
          <span className=" rounded-full p-2 font-bold bg-white">DP</span>
          <div className="flex flex-col items-start justify-center">
            <span className=" font-bold">
              {detailSummary.candidateID.fullname || "loading"}
            </span>
            <small>{detailSummary.candidateID.account.email}</small>
          </div>
        </div>
        <button
          className="border p-1 rounded-full w-10 h-10 bg-slate-500 text-white font-bold"
          // onClick={handleClose}
        >
          X
        </button>
      </div>
      <div className="h-[75%] w-full flex items-center justify-center">
        <div className="w-96 h-5/6  flex items-center justify-center bg-slate-100 shadow-xl rounded-lg">
          <span className="text-6xl font-bold  text-slate-400  h-full">
            {displayPDF != null ? (
              <object
                data={displayPDF}
                type="application/pdf"
                className="h-full"
              >
                <p>
                  Alternative text - include a link{" "}
                  <a href={displayPDF}>to the PDF!</a>
                </p>
              </object>
            ) : (
              "CV"
            )}
          </span>
        </div>
      </div>
      <div className="h-[23%] flex w-full items-center justify-around gap-4 ">
        <button
          className="border p-1 rounded-md w-40 border-red-400 text-red-400 font-bold hover:bg-red-500 hover:text-white"
          // onClick={() => handleStatusChange("Reject")}
        >
          Reject
        </button>
        <button
          className="border p-1 rounded-md w-40 border-blue-400 text-blue-400 font-bold hover:bg-blue-500 hover:text-white"
          // onClick={() => handleStatusChange("Interview")}
        >
          Interview
        </button>
        <button className="border p-1 rounded-md w-40 border-orange-400 text-orange-400 font-bold hover:bg-orange-500 hover:text-white">
          Cancel
        </button>
      </div>
    </div>
  );
}
