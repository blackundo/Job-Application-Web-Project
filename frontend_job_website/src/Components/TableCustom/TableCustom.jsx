/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import axiosPrivate from "../../api/axios";

const PageSizeOptions = [10, 25, 50];

const CustomTable = ({
  data,
  setPage,
  setSize,
  setDetailSummary,
  setDisplayPDF,
  rejectCandidate,
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PageSizeOptions[0]);

  const handleSelectAll = () => {
    if (selectedRows.length === data.content.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.content.map((row) => row.id));
    }
  };

  const handleSelectRow = (rowId) => {
    setSelectedRows((prevSelected) => {
      if (prevSelected.includes(rowId)) {
        return prevSelected.filter((id) => id !== rowId);
      } else {
        return [...prevSelected, rowId];
      }
    });
  };

  const handlePageChange = (page) => {
    setPage(page);
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setSize(size);
    setPageSize(size);
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  useEffect(() => {
    setCurrentPage(1); // Reset current page when data changes
  }, [data]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.totalElements);
  const visibleRows = data.content.slice(startIndex, endIndex);

  const handleShowCv = async (id) => {
    await axiosPrivate
      .get(`/api/profile/candidate-cv/${id}`, {
        responseType: "blob",
      })
      .then((res) => {
        setDisplayPDF(URL.createObjectURL(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">
              <input
                type="checkbox"
                indeterminate={
                  selectedRows.length > 0 &&
                  selectedRows.length < data.content.length
                    ? "true"
                    : undefined
                }
                checked={
                  data.content.length > 0 &&
                  selectedRows.length === data.content.length
                }
                onChange={handleSelectAll}
              />
            </th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {visibleRows.map((row) => (
            <tr
              key={row.id}
              className={`border cursor-pointer hover:bg-sky-400 ${
                selectedRows.includes(row.id) ? "bg-slate-200" : ""
              }`}
              onClick={() => {
                handleShowCv(row.candidateID.id);
                setDetailSummary(row);
              }}
            >
              <td className="border p-2 text-center">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleSelectRow(row.id)}
                />
              </td>
              <td className="border p-2 text-center">
                {row.candidateID.account.email}
              </td>
              <td className="border p-2 text-center">{row.status}</td>
              <td className="border p-2 text-center">
                <div className=" flex w-full items-center justify-around gap-4 ">
                  <button
                    className="border p-1 rounded-md w-20 text-[0.9rem] border-red-400 text-red-400 font-bold hover:bg-red-500 hover:text-white"
                    onClick={() => rejectCandidate(row.id)}
                  >
                    Reject
                  </button>
                  <button
                    className="border p-1 rounded-md w-20 text-[0.9rem] border-blue-400 text-blue-400 font-bold hover:bg-blue-500 hover:text-white"
                    // onClick={() => handleStatusChange("Interview")}
                  >
                    Interview
                  </button>
                  <button className="border p-1 rounded-md w-20 text-[0.9rem] border-orange-400 text-orange-400 font-bold hover:bg-orange-500 hover:text-white">
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-4">
        <div>
          <span>Show</span>
          <select
            value={pageSize}
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
            className="ml-2 p-1"
          >
            {PageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white rounded`}
          >
            Previous
          </button>
          <span className="bg-red-400  text-center py-2 px-4 rounded">
            {currentPage}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= data.totalElements}
            className={`px-4 py-2 ${
              endIndex >= data.totalElements
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white rounded`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
