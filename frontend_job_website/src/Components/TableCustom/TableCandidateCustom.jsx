import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./TableCandidateCustom.module.css";
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

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

export default function TableCandidateCustom({ rows, setDetailSummary }) {
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

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", bounce: 0.2 }}
    >
      <TableContainer>
        <Table
          sx={{ minWidth: 500 }}
          aria-label="custom pagination table"
          className={styles.table}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">FullName</StyledTableCell>
              <StyledTableCell align="center">
                UniversityOrCollege
              </StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Job Apply</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow
                key={row.candidateId}
                className="hover:bg-slate-300 cursor-pointer"
                onClick={() => {
                  setDetailSummary(row || null);
                }}
              >
                <TableCell>{row.candidateId}</TableCell>
                <TableCell align="center">{row.fullName}</TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.universityOrCollege}
                </TableCell>
                <TableCell align="center" style={{ width: 160 }}>
                  {/* {row.Status} */}
                  {row.Status === "true" ? (
                    <div className="flex items-center justify-center gap-3 border p-1 border-green-400 rounded-md w-full">
                      <GrStatusGoodSmall className="fill-green-400" />
                      <button>Active</button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3  border p-1 rounded-md w-full">
                      <GrStatusGoodSmall />
                      <button>Off</button>
                    </div>
                  )}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.jobApply}
                </TableCell>

                <TableCell align="center">{row.country}</TableCell>
                <TableCell
                  align="center"
                  style={{ width: 160 }}
                  className="relative "
                >
                  <HiBars3
                    className="cursor-pointer text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    onClick={() => handleViewAction(index)}
                  />
                  <ul
                    className={`absolute top-[80%] right-0 bg-[#fff] border shadow-2xl w-[150px] max-md:right-[80%]  ${
                      selectedRow === index ? "flex" : "hidden"
                    } flex-col items-start justify-around z-50 rounded-xl  p-3`}
                  >
                    <Link
                      to={`details/${row.CompanyID}`}
                      className="hover:bg-slate-400 w-full text-start  p-3 rounded-lg cursor-pointer"
                    >
                      View Detail
                    </Link>
                    <li className="hover:bg-slate-400 w-full text-start  p-3 rounded-lg cursor-pointer">
                      Delete
                    </li>
                    <li className="hover:bg-slate-400 w-full text-start  p-3 rounded-lg cursor-pointer">
                      Control
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
