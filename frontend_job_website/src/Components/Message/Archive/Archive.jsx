import arlogo from "../../../Assets/Archive.svg";

function Archive() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-[27rem] h-[20rem] gap-2">
        <div className="flex flex-col items-center justify-center">
          <img src={arlogo} alt="" />
          <span>Welcome to messages section</span>
          <small>You don`&apos`t have any messages stored</small>
        </div>
      </div>
    </div>
  );
}

export default Archive;
