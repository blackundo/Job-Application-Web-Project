function Header({ Title }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-slate-800">{Title}</span>
      <button className="h-12 p-3 bg-blue-600 text-white font-bold rounded-lg">
        Post a job
      </button>
    </div>
  );
}

export default Header;
