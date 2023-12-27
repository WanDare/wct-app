"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const NavbarSearch = (isHomepage) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const onClickPage = (pathname) => {
    router.push(pathname);
    // Close the menu on mobile after clicking a link
    setMenuOpen(false);
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
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl">Event Hunt</div>

          {/* Responsive Menu Button */}
          <button
            className="lg:hidden -order-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>

          {/* Navigation Links - Hidden on mobile, visible on larger screens */}
          <ul className="hidden lg:flex space-x-10 font-bold">
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/discovery")}
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
                onClick={() => onClickPage("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Responsive Menu */}
          {menuOpen && (
            <div className="lg:hidden absolute top-20 left-2 w-full max-h-screen z-20 opacity-100">
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 font-bold"
                style={{ color: "#4F4F4F" }}
              >
                <li>
                  <button
                    className="hover:text-black"
                    onClick={() => onClickPage("/")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-black"
                    onClick={() => onClickPage("/discovery")}
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
                    onClick={() => onClickPage("/contact")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Register and Sign In Buttons */}
          <div className="flex flex-row lg:flex">
            <button className="text-blue-500 font-normal bg-transparent border border-blue-500 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600 hover:text-white">
              Register
            </button>
            <button className="text-white font-normal bg-blue-500 px-4 py-2 rounded-md ml-4 transition duration-300 ease-in-out hover:bg-blue-600">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
