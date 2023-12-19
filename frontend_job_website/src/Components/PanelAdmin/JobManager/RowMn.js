import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import styles from "../../TableCustom/TableCollapsible.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
function convertToDateString(date) {
  if (!date) return "";

  // Check if date is not already a Date object
  const dateObject = date instanceof Date ? date : new Date(date);

  return dateObject.toISOString().split("T")[0];
}

export function RowMn(props) {
  const { row, handleDeleteJob } = props;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/company/edit_jobs/${id}`);
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className={styles.bodyTableMain}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row" className={`${styles.id}`}>
          {row.id}
        </TableCell>
        <TableCell align="right">{row.title}</TableCell>
        <TableCell align="right" className={`${styles.Enrollment}`}>
          {row.errollmentStatus}
        </TableCell>
        <TableCell align="right" className={`${styles.dateStart}`}>
          {convertToDateString(row.dateSubmit)}
        </TableCell>
        <TableCell align="right" className={`${styles.dateEnd}`}>
          {convertToDateString(row.dateEnd)}
        </TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">
          <div className="flex items-center justify-center gap-1">
            {/*  <button
              className="bg-slate-400 p-2 rounded-md text-white  font-bold"
              onClick={() => handleEdit(row.id)}
            >
              Edit
            </button> */}
            <button
              className="bg-red-400 p-2 rounded-md text-white  font-bold"
              onClick={() => handleDeleteJob(row.id)}
            >
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
                <TableHead className={styles.headerDetails}>
                  <TableRow>
                    {/* <TableCell>ID</TableCell> */}
                    <TableCell className={styles.hiringName}>
                      Hiring Name
                    </TableCell>
                    <TableCell align="right">FieldName</TableCell>
                    <TableCell align="right">Max Salary</TableCell>
                    <TableCell align="right">Min Salary</TableCell>
                    <TableCell align="right" className={styles.limit}>
                      Application Limit
                    </TableCell>
                    {/*   <TableCell align="right" >
                        Date Start
                      </TableCell>
                      <TableCell align="right" >
                        Date End
                      </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody className={styles.bodyDetails}>
                  {row.details.map((detailsRows) => (
                    <TableRow key={detailsRows.id}>
                      {/* <TableCell component="th" scope="row">
                          {detailsRows.id}
                        </TableCell> */}
                      <TableCell className={styles.hiringName}>
                        {detailsRows.hiringName}
                      </TableCell>

                      <TableCell align="right">
                        {detailsRows.FieldName}
                      </TableCell>
                      <TableCell align="right">
                        {detailsRows.maxSalary}
                      </TableCell>
                      <TableCell align="right">
                        {detailsRows.minSalary}
                      </TableCell>

                      <TableCell align="right" className={styles.limit}>
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
