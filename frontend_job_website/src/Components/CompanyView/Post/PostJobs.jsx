import { Outlet } from "react-router-dom";

function PostJobs() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
}

export default PostJobs;
