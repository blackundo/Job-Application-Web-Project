import { useEffect, useState } from "react";
import TableCustom from "../../TableCustom/TableCustom";

function createData(id, Name, Candidate, Status) {
  return {
    id,
    Name,
    Candidate,
    Status,
  };
}
export const initialRows = [
  // createData(1, "Do Phuoc Dat", "dat@gmail.com", "Interview"),
].sort((a, b) => (a.id > b.id ? -1 : 1));
for (let i = 1; i <= 14; i++) {
  initialRows.push(createData(i, `Name ${i}`, `email${i}@gmail.com`, "Active"));
}
function Candidate() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [detailSummary, setDetailSummary] = useState(null);
  const [rows, setRows] = useState(initialRows);
  const updateRowStatus = (newStatus) => {
    console.log(selectedIndex);
    console.log("Before update:", rows);
    const updatedRows = rows.map((row, index) =>
      index === selectedIndex ? { ...row, Status: newStatus } : row
    );
    setRows(updatedRows);
    console.log("After update:", updatedRows); // Debugging
  };
  useEffect(() => {
    console.log(rows);
  }, [rows]);
  return (
    <div className="h-[calc(100vh-6rem)] p-5">
      <div className="border-t border-x flex items-center justify-center h-full rounded-t-lg">
        <div className={`w-1/2  h-full max-lg:w-full `}>
          <TableCustom
            rows={rows}
            setRows={setRows}
            setDetailSummary={setDetailSummary}
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
          />
        </div>
        <div className="w-1/2 h-full max-lg:hidden rounded-r-xl">
          {detailSummary ? (
            <DisplayDetails
              detailSummary={detailSummary}
              setDetailSummary={setDetailSummary}
              updateRowStatus={updateRowStatus}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-96 h-2/3  flex items-center justify-center bg-slate-100 shadow-xl rounded-lg">
                <span className="text-6xl font-bold  text-slate-400 "> CV</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Candidate;

function DisplayDetails({ detailSummary, setDetailSummary, updateRowStatus }) {
  const handleClose = () => {
    setDetailSummary(null);
  };
  const handleStatusChange = (newStatus) => {
    updateRowStatus(newStatus);
  };

  return (
    <div className="flex flex-col items-start justify-center h-full">
      <div className="flex items-center justify-between w-full px-10 h-[7%] bg-slate-100 shadow-md">
        <div className="flex items-center justify-center gap-4 ">
          <span className=" rounded-full p-2 font-bold bg-white">DP</span>
          <div className="flex flex-col items-start justify-center">
            <span className=" font-bold">{detailSummary.Name}</span>
            <small>{detailSummary.Candidate}</small>
          </div>
        </div>
        <button
          className="border p-1 rounded-full w-10 h-10 bg-slate-500 text-white font-bold"
          onClick={handleClose}
        >
          X
        </button>
      </div>
      <div className="h-[75%] w-full flex items-center justify-center">
        <div className="w-96 h-2/3  flex items-center justify-center bg-slate-100 shadow-xl rounded-lg">
          <span className="text-6xl font-bold  text-slate-400 "> CV</span>
        </div>
      </div>
      <div className="h-[23%] flex w-full items-center justify-around gap-4 ">
        <button
          className="border p-1 rounded-md w-40 border-red-400 text-red-400 font-bold hover:bg-red-500 hover:text-white"
          onClick={() => handleStatusChange("Reject")}
        >
          Reject
        </button>
        <button
          className="border p-1 rounded-md w-40 border-blue-400 text-blue-400 font-bold hover:bg-blue-500 hover:text-white"
          onClick={() => handleStatusChange("Interview")}
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
