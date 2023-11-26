import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.dateSubmit}</TableCell>
        <TableCell align="right">{row.dateEnd}</TableCell>
        <TableCell align="right">{row.enrollmentStatus}</TableCell>
        <TableCell align="right">{row.title}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">
          <div className="flex items-center justify-center gap-1">
            <button className="bg-slate-400 p-2 rounded-md text-white  font-bold">
              Edit
            </button>
            <button className="bg-red-400 p-2 rounded-md text-white  font-bold">
              Delete
            </button>
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Hiring Name</TableCell>
                    <TableCell align="right">FieldName</TableCell>
                    <TableCell align="right">Max Salary</TableCell>
                    <TableCell align="right">Min Salary</TableCell>
                    <TableCell align="right">Application Limit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRows) => (
                    <TableRow key={detailsRows.id}>
                      <TableCell component="th" scope="row">
                        {detailsRows.id}
                      </TableCell>
                      <TableCell>{detailsRows.hiringName}</TableCell>
                      <TableCell align="right">
                        {detailsRows.FieldName}
                      </TableCell>
                      <TableCell align="right">
                        {detailsRows.maxSalary}
                      </TableCell>
                      <TableCell align="right">
                        {detailsRows.minSalary}
                      </TableCell>
                      <TableCell align="right">
                        {detailsRows.applicationLimit}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
/* 
   
        
        */

Row.propTypes = {
  row: PropTypes.shape({
    minSalary: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    dateSubmit: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
        FieldName: PropTypes.string.isRequired,
        hiringName: PropTypes.string.isRequired,
        applicationLimit: PropTypes.number.isRequired,
        maxSalary: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function TableCollapsible({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Enrollment Status</TableCell>
            <TableCell align="right">Date Start</TableCell>
            <TableCell align="right">Date End</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(rows)}
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
