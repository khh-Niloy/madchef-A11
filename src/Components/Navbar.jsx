import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import toast, { Toaster } from "react-hot-toast";
import { DarkModeContext } from "../DarkModeProvider/DarkModeProvider";
import { IoMoon } from "react-icons/io5";
import { PiSunFill } from "react-icons/pi";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
  // console.log(user);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allfood">All Foods</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </>
  );

  const profileLinks = (
    <>
      <li>
        <NavLink to="/myfood">My Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addfood">Add Food</NavLink>
      </li>
      <li>
        <NavLink to="/myorder">My Orders</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Madchef</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <button onClick={toggleDarkMode} className="text-xl mr-3">
              {isDarkMode ? <PiSunFill></PiSunFill> : <IoMoon></IoMoon>}
            </button>
            {user ? (
              <>
                <button
                  className="btn"
                  onClick={() => {
                    signOutUser();
                    toast.success("Log out");
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="login" className="btn">
                  Login
                </Link>
              </>
            )}

            {user && (
              <>
                <div title={user.email} className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        referrar-policy="no-refferrar"
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    {profileLinks}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
