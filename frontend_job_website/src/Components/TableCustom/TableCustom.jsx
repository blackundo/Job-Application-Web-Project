import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { GrStatusGoodSmall } from "react-icons/gr";
import styles from "./TableCustom.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DialogCustoms from "../DialogCustoms/DialogCustoms";
import { Checkbox } from "@mui/material";

export default function TableCustom({
  rows,
  setDetailSummary,
  setSelectedIndex,
  selectedIndex,
  setRows,
}) {
  const [open, setOpen] = useState(false);

  const [dialogMessage, setDialogMessage] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const handleClickOpen = (message, index) => {
    setSelectedIndex(index);
    setDialogMessage(message);
    setOpen(true);
  };

  const getStatusInfo = (status) => {
    const statusMap = {
      Active: {
        className: "border-green-400",
        icon: <GrStatusGoodSmall className="fill-green-400" />,
        label: "Active",
      },
      Interview: {
        className: "border-blue-400",
        icon: <GrStatusGoodSmall />,
        label: "Interview",
        labelClassName: "text-blue-500 font-bold",
      },
      Reject: {
        className: "border-red-400 text-red-400",
        icon: <GrStatusGoodSmall />,
        label: "Reject",
      },
    };

    return statusMap[status] || statusMap["Reject"];
  };
  const rowRenderer = (index) => {
    const row = rows[index];
    const isItemSelected = selectedRows.includes(row.id);

    if (!row) return null;
    const { className, icon, label, labelClassName } = getStatusInfo(
      row.Status
    );
    const handleSelectOne = (event, id) => {
      const selectedIndex = selectedRows.indexOf(id);
      let newSelectedRows = [];

      if (selectedIndex === -1) {
        newSelectedRows = newSelectedRows.concat(selectedRows, id);
      } else if (selectedIndex === 0) {
        newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
      } else if (selectedIndex === selectedRows.length - 1) {
        newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelectedRows = newSelectedRows.concat(
          selectedRows.slice(0, selectedIndex),
          selectedRows.slice(selectedIndex + 1)
        );
      }

      setSelectedRows(newSelectedRows);
    };

    return (
      <TableRow
        key={index}
        className={`hover:bg-sky-200 cursor-pointer relative`}
        onClick={() => {
          setDetailSummary(row || null);
          setSelectedIndex(index);
        }}
      >
        <TableCell padding="checkbox" className="-mb-[9px]">
          <Checkbox
            checked={isItemSelected}
            onChange={(event) => handleSelectOne(event, row.id)}
          />
        </TableCell>
        <TableCell align="left">{row.Candidate}</TableCell>
        <TableCell align="center">
          <span
            className={`flex items-center w-32 justify-center gap-3 border p-1 -m-[5px] rounded-md ${className}`}
          >
            {icon}
            <button className={`${labelClassName}`}>{label}</button>
          </span>
        </TableCell>
        <TableCell align="center">
          <div className="flex items-center justify-between gap-2 -m-1">
            <button
              className="border p-1 rounded-md w-full border-red-400 text-red-400 font-bold hover:bg-red-500 hover:text-white"
              onClick={() => handleClickOpen("Reject", index)}
            >
              Reject
            </button>
            <button
              className="border p-1 rounded-md w-full border-blue-400 text-blue-400 font-bold hover:bg-blue-500 hover:text-white"
              onClick={() => handleClickOpen("Interview", index)}
            >
              Interview
            </button>
          </div>
        </TableCell>
      </TableRow>
    );
  };

  const TableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} style={{ borderCollapse: "separate" }} />
    ),
    TableHead: TableHead,
    TableRow: TableRow,
    TableBody: TableBody,
  };
  const applyStatusChange = (newStatus) => {
    console.log("newStatus", newStatus, selectedIndex);
    const updateRows = rows.map((row, index) =>
      index === selectedIndex ? { ...row, Status: newStatus } : row
    );
    setRows(updateRows);
  };
  const handleUpdateStatus = (newStatus) => {
    const updatedRows = rows.map((row) =>
      selectedRows.includes(row.id) ? { ...row, Status: newStatus } : row
    );
    setRows(updatedRows);
    setSelectedRows([]); // Xóa lựa chọn sau khi cập nhật
  };
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const newSelectedRows = rows.map((n) => n.id);
      setSelectedRows(newSelectedRows);
      return;
    }
    setSelectedRows([]);
  };
  // console.log(rows);
  return (
    <div className="h-full">
      <TableRow className={styles.header}>
        <TableCell padding="checkbox">
          <Checkbox
            className="-mb-[9px]"
            indeterminate={
              selectedRows.length > 0 && selectedRows.length < rows.length
            }
            checked={rows.length > 0 && selectedRows.length === rows.length}
            onChange={handleSelectAll}
          />
        </TableCell>
        <TableCell align="left">Candidate</TableCell>
        <TableCell align="center">Status</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
      <Virtuoso
        totalCount={rows.length} // Add 1 for the header
        itemContent={(index) => rowRenderer(index)}
        components={TableComponents}
        className={`${styles.table}`}
        style={{ height: "calc(100% - 70px)", borderRadius: "0 " }}
      />
      <DialogCustoms
        setOpen={setOpen}
        open={open}
        dialogMessage={dialogMessage}
        setChangeStatus={applyStatusChange}
      />
      <div className={styles.actionBar}>
        {/* <button
          onClick={() => handleUpdateStatus("Active")}
          className={styles.actionButton}
        >
          Set to Active
        </button> */}
        <button
          onClick={() => handleUpdateStatus("Reject")}
          className={styles.actionButton}
        >
          Set to Reject
        </button>
        <button
          onClick={() => handleUpdateStatus("Interview")}
          className={styles.actionButton}
        >
          Set to Interview
        </button>
      </div>
    </div>
  );
}
