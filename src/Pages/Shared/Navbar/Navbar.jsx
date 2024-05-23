import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 md:h-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn md:ml-8 lg:ml-12 btn-ghost md:text-xl lg:text-3xl freeman tracking-wider">
            DigiTech
            <IoIosArrowDown />
            <span className="text-blue-700">.</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="text-lg font-semibold" to="/">
                Home
                <IoIosArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg font-semibold" to="/shop">
                Shop
                <IoIosArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg font-semibold" to="/blog">
                Blog
                <IoIosArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg font-semibold" to="/gallery">
                Gallery
                <IoIosArrowDown />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end felx justify-center gap-8 items-center">
          <div className="flex lg:ml-16 justify-center items-center">
            <div className="relative py-2">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  3
                </p>
              </div>
              <FaRegHeart className="file: mt-4 h-6 w-6" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative py-2">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  3
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="file: mt-4 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
