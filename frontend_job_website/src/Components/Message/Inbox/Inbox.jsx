import wlIb from "../../../Assets/Inbox.svg";
import styles from "./Inbox.module.css";
function Inbox({ box, setBox }) {
  return (
    <>
      {box === null ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-[27rem] h-[20rem] gap-2">
            <div className="flex flex-col items-center justify-center">
              <img src={wlIb} alt="" />
              <span>Welcome to messages section</span>
              <small>
                When the employer contacts you, You'll see the message here
              </small>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className={styles.btn1}>Find a job</button>
              <button className={styles.btn2}>Create Your CV</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center  justify-start gap-3 p-2 bg-slate-300 rounded-t-lg">
          <span
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setBox(null)}
          >
            {"<"}
          </span>
          <div className="flex flex-col items-center justify-start">
            <span className="font-bold">{box.name}</span>
            <small className="text-green-600 font-bold">Online</small>
          </div>
        </div>
      )}
    </>
  );
}

export default Inbox;
