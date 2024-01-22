"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthDetail from "./authDetail";

const NavbarSearch = (isHomepage) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 flex w-full items-center duration-500 ${
        isHomepage
          ? isScrolled
            ? "h-[70px] bg-white shadow-lg"
            : "h-[84px] bg-transparent text-white"
          : "h-[70px] bg-white shadow-sm sticky"
      }`}
    >
      {/* Responsive Menu Button */}
      <div className="drawer w-1/2 lg:hidden pl-3">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-primary shadow-none bg-transparent border-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-500 dark:hover:bg-gray-300 drawer-button"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content font-bold">
            {/* Sidebar content here */}
            <h1 className="text-4xl p-4">Event Hunt</h1>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/search_area")}
              >
                Discovery
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/discovery")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <button onClick={() => onClickPage("/home")}>
            <div className="font-bold text-2xl pl-5 whitespace-nowrap">
              Event Hunt
            </div>
          </button>

          {/* Navigation Links - Hidden on mobile, visible on larger screens */}
          <ul className="hidden lg:flex space-x-10 font-bold">
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/search_area")}
              >
                Discovery
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/discovery")}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Register and Sign In Buttons */}
          <AuthDetail />
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
