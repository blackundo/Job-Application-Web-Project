import { Link } from "react-router-dom";

function Header({ Title }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-slate-800">{Title}</span>
      <Link
        to={"/company/post_jobs"}
        className="h-12 p-3 bg-blue-600 text-white font-bold rounded-lg"
      >
        Post a job
      </Link>
    </div>
  );
}

export default Header;
