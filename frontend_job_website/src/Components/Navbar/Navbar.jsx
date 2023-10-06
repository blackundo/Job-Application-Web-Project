import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-10 py-4">
        <ul className="flex justify-center items-center space-x-8">
          <li>Home</li>
          <li>Docs</li>
          <li>Job</li>
          <li>Blogs</li>
        </ul>
        <ul className="flex space-x-6">
          <Link to={"login"}>Login</Link>
          <Link to={"register"}>Register</Link>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};
