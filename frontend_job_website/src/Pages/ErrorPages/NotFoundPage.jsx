import { Link } from "react-router-dom";
import notFound from "../../Assets/notfound.svg";

function NotFoundPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex items-center justify-center w-[52.18rem]">
        <img src={notFound} alt="" />
        <div className="flex flex-col gap-5">
          <div className="">
            <h1 className="font-bold text-2xl">Page not found</h1>
            <span className="text-slate-400 text-sm">
              We are sorry but the page you are looking for does not exist. You
              could return to the homepage to continue experiment.
            </span>
          </div>
          <Link
            to={"/"}
            className="bg-blue-500 h-10 px-5 w-max rounded-lg flex items-center justify-center text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
