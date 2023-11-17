import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogCustoms({
  open,
  setOpen,
  dialogMessage,
  setChangeStatus,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleAgreeSubmit = () => {
    setOpen(false);
    const newStatus = dialogMessage === "Reject" ? "Reject" : "Interview";
    setChangeStatus(newStatus);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Do You Sure ?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogMessage === "Reject"
            ? "Do you sure reject this candidate"
            : "Do you sure agree with this candidate"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleAgreeSubmit} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
