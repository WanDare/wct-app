"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const onClickPage = (pathname) => {
    router.push(pathname);
  };
  return (
    <footer>
      <div className="container mx-auto">
        <div
          className="flex items-start justify-between pb-10 pt-20 space-x-10"
          style={{ color: "#4F4F4F" }}
        >
          <ul>
            <div className="text-black font-bold pb-2">Event Hunt</div>
            <li>
              <p>Your next goto companion for finding event</p>
            </li>
          </ul>
          <ul>
            <div className="text-black font-bold pb-2">Team</div>
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
                Contact us
              </button>
            </li>
          </ul>
          <ul>
            <div className="text-black font-bold pb-2">Explore</div>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/search_area")}
              >
                Feature event
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/search_area")}
              >
                What's happening this week
              </button>
            </li>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/search_area")}
              >
                What's people love
              </button>
            </li>
          </ul>
          <ul>
            <div className="text-black font-bold pb-2">Terms and Policies</div>
            <li className="hover:text-black">
              <a href="#link">Privacy Policy</a>
            </li>
            <li className="hover:text-black">
              <a href="#link">Terms of use</a>
            </li>
          </ul>
          <ul>
            <div className="text-black font-bold pb-2">Help</div>
            <li>
              <button
                className="hover:text-black"
                onClick={() => onClickPage("/discovery")}
              >
                Support
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="text-black p-2 pr-40"
        style={{ backgroundColor: "#EBEBEB", color: "#4F4F4F" }}
      >
        <div className="flex items-center justify-end">
          <p>&copy; Event Finder 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
