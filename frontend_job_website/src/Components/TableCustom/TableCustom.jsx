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

export default function TableCustom({ rows }) {
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
      transition={{ duration: 1, type: "spring", bounce: 0.2 }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>CompanyID</StyledTableCell>
              <StyledTableCell align="right">CompanyName</StyledTableCell>
              <StyledTableCell align="right">CompanyLink</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Founding</StyledTableCell>
              <StyledTableCell align="right">Post</StyledTableCell>
              <StyledTableCell align="right">Spending</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={row.CompanyID}>
                <TableCell component="th" scope="row">
                  {row.CompanyID}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.CompanyName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.CompanyLink}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {/* {row.Status} */}
                  {row.Status === "true" ? (
                    <div className="flex items-center justify-center gap-3 border p-1 border-green-400 rounded-md">
                      <GrStatusGoodSmall className="fill-green-400" />
                      <button>Active</button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3  border p-1 rounded-md">
                      <GrStatusGoodSmall />
                      <button>Off</button>
                    </div>
                  )}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.Founding}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.Post}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.Spending}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.Country}
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  align="right"
                  className="relative "
                >
                  <HiBars3
                    className="cursor-pointer text-2xl "
                    onClick={() => handleViewAction(index)}
                  />
                  <ul
                    className={`absolute top-[80%] right-0 bg-[#fff] border shadow-2xl w-[150px] ${
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
