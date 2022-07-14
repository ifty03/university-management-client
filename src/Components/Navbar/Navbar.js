import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import auth from "../../firebase.init";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="navbar bg-base-100 flex justify-between lg:px-14 md:px-10 px-3">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>

            <li>
              <a>Item 4</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="w-20" src={logo} alt="logo" />
        </Link>
      </div>
      <div class="navbar-end font-semibold">
        <ul class="menu menu-horizontal p-0 hidden lg:flex">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>

          <li>
            <a>Item 4</a>
          </li>
        </ul>
        <div className="flex items-center">
          {user ? (
            <button
              onClick={async () => {
                await signOut(auth);
                toast.success("SignOut successfully done !");
              }}
              className="bg-red-600 hover:bg-red-500 text-white shadow-red-300 shadow-lg px-4 py-[7px] mx-2 rounded-md hidden md:flex"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-500 text-white shadow-green-300 shadow-lg px-4 py-[7px] mx-2 rounded-md hidden md:flex"
            >
              Sign Up
            </Link>
          )}
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
