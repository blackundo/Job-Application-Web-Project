import splogo from "../../../Assets/spam.svg";

function Spam() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-[27rem] h-[20rem] gap-2">
        <div className="flex flex-col items-center justify-center">
          <img src={splogo} alt="" />
          <small>You don't have any messages in your spam folder</small>
        </div>
      </div>
    </div>
  );
}

export default Spam;
