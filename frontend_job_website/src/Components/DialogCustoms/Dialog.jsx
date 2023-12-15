import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { forwardRef, useEffect, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogVerify({
  open,
  handleActiveEmail,
  title,
  handleSendTokenEmailAgain,
  expirationTimeInSeconds,
}) {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Profile");
    localStorage.removeItem("timeRemaining");
    navigate("/login");
  };
  const [isExpired, setIsExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(
    parseInt(localStorage.getItem("timeRemaining")) || expirationTimeInSeconds
  );

  useEffect(() => {
    let timer;
    if (open && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsExpired(true);
    }
    return () => clearInterval(timer);
  }, [open, timeRemaining, expirationTimeInSeconds]);

  useEffect(() => {
    localStorage.setItem("timeRemaining", timeRemaining.toString());
  }, [timeRemaining]);

  const resetTime = () => {
    setTimeRemaining(expirationTimeInSeconds);
    setIsExpired(false);
  };
  const handleSendAgain = () => {
    resetTime();
    handleSendTokenEmailAgain();
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
          {/* Please, forward link{" "}
          <a href="#" className="text-blue-500 font-bold">
            here
          </a> */}
          {isExpired ? (
            "Expired! Click 'Send Again' to request a new token."
          ) : (
            <span className="text-xl font-bold">
              Time remaining: {Math.floor(timeRemaining / 60)}:
              {timeRemaining % 60 < 10
                ? `0${timeRemaining % 60}`
                : timeRemaining % 60}
            </span>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogin}>Login</Button>
        {isExpired ? (
          <Button onClick={handleSendAgain}>Send Again</Button>
        ) : null}
        <Button onClick={handleActiveEmail}>Confirm yet</Button>
      </DialogActions>
    </Dialog>
  );
}
