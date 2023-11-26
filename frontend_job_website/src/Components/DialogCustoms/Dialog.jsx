import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogVerify({ open, handleActiveEmail, title }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Profile");
    navigate("/login");
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      className="rounded-lg"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Please, forward link{" "}
          <a href="#" className="text-blue-500 font-bold">
            here
          </a>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleActiveEmail}>Confirm yet</Button>
      </DialogActions>
    </Dialog>
  );
}
