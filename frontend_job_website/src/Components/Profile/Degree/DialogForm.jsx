import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment, useState } from "react";
function DialogForm({
  open,
  setOpen,
  title,
  contentText,
  label,
  addItemToList,
}) {
  const [text, setText] = useState("");
  const handleChangeInput = (e) => {
    setText(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
    setText("");
  };

  const handleAddField = (e) => {
    setText(e.target.value);
    addItemToList(label, text);
  };

  return (
    <Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="w-[32rem]">{title}</DialogTitle>
        <DialogContent className="w-full">
          <DialogContentText>{contentText}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={label}
            type="text"
            fullWidth
            variant="standard"
            value={text}
            onChange={handleChangeInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddField}>Add</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default DialogForm;
