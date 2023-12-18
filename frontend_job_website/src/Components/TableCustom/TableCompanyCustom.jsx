import * as React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { TablePaginationActions } from "./TablePaginationActions";
import axiosPrivate from "../../api/axios";
import swal from "sweetalert";
import { ToastCustom } from "../ToastCustom/ToastCustom";
import { toast } from "react-toastify";

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TableCompanyCustom({ rows, setDetailSummary }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [selectedRow, setSelectedRow] = useState(null);
  const handleViewAction = (index) => {
    if (index === selectedRow) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }
  };

  const handleAcceptAccount = async (id) => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    await swal({
      title: "Are you sure?",
      text: "Do you want to accept this account",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosPrivate
          .patch(`/api/admin/companies/${id}/accept`)
          .then(() => {
            toast.dismiss(loadingToastId);
            swal("Active Success", {
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            toast.dismiss(loadingToastId);
            ToastCustom.error(
              "Opps, Active fails, Maybe account Accepted then please reload page ",
              {
                autoClose: 2500,
              }
            );
          });
      } else {
        toast.dismiss(loadingToastId);
        swal("Cancelled");
      }
    });
  };

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.2 }}
      className="h-screen"
    >
      <TableContainer className="h-full">
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>CompanyID</StyledTableCell>
              <StyledTableCell align="center">CompanyName</StyledTableCell>
              {/* <StyledTableCell align="right">CompanyLink</StyledTableCell> */}
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Founding</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Organizational</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow
                key={row.id}
                className="hover:bg-slate-300 cursor-pointer"
                onClick={() => {
                  setDetailSummary(row || null);
                }}
              >
                <TableCell component="th" scope="row" style={{ width: 160 }}>
                  {row.id}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.companyName}
                </TableCell>

                <TableCell style={{ width: 160 }} align="center">
                  {/* {row.Status} */}
                  {row.account.status ? (
                    <div className="flex items-center justify-center gap-3 border p-1 border-green-400 rounded-md">
                      <GrStatusGoodSmall className="fill-green-400" />
                      <button>Active</button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3  border p-1 rounded-md">
                      <GrStatusGoodSmall />
                      <button>Not Activated</button>
                    </div>
                  )}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.fouding}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.phoneNumber}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.organizational}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.address}
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  align="center"
                  className="relative "
                >
                  <HiBars3
                    className="cursor-pointer text-2xl flex items-center justify-center w-full"
                    onClick={() => handleViewAction(index)}
                  />
                  <ul
                    className={`absolute top-[80%] right-0 bg-[#fff] border shadow-2xl w-[150px] ${
                      selectedRow === index ? "flex" : "hidden"
                    } flex-col items-start justify-around z-50 rounded-xl  p-3 `}
                  >
                    <Link
                      to={`details/${row.id}`}
                      className="hover:bg-slate-400 w-full text-start  p-3 rounded-lg cursor-pointer"
                      state={{
                        information: row,
                      }}
                    >
                      View
                    </Link>
                    <li className="hover:bg-slate-400 w-full text-start  p-3 rounded-lg cursor-pointer">
                      Delete/Block
                    </li>
                    <li
                      className="hover:bg-slate-400 w-full text-start  p-3 rounded-lg cursor-pointer"
                      onClick={() => handleAcceptAccount(row.id)}
                    >
                      Accept
                    </li>
                  </ul>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={9}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </motion.div>
  );
}
