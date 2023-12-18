import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./Row";

import styles from "./TableCollapsible.module.css";

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    errollmentStatus: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
        FieldName: PropTypes.string.isRequired,
        hiringName: PropTypes.string.isRequired,
        applicationLimit: PropTypes.number.isRequired,
        maxSalary: PropTypes.number.isRequired,
        minSalary: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function TableCollapsible({ rows, handleDeleteJob }) {
  return (
    <TableContainer component={Paper} className="border border-slate-200">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={`${styles.id}`}>ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right" className={`${styles.Enrollment}`}>
              Enrollment Status
            </TableCell>
            <TableCell align="right" className={`${styles.dateStart}`}>
              Date Start
            </TableCell>
            <TableCell align="right" className={`${styles.dateEnd}`}>
              Date End
            </TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <Row key={row.id} row={row} handleDeleteJob={handleDeleteJob} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
