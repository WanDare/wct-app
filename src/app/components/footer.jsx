import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div
          className="flex items-start justify-between pb-10 pt-20 space-x-10"
          style={{ color: "#4F4F4F" }}
        >
          <ul>
            <div className="text-black font-bold pb-2">Event Hunt</div>
            <li className="hover:text-black">
              <a href="#link">Your next goto companion for finding event</a>
            </li>
          </ul>
          <ul>
            <div className="text-black font-bold pb-2">Team</div>
            <li className="hover:text-black">
              <a href="#link">About</a>
            </li>
            <li className="hover:text-black">
              <a href="#link">Contact us</a>
            </li>
          </ul>
          <ul>
            <div className="text-black font-bold pb-2">Explore</div>
            <li className="hover:text-black">
              <a href="#link">Feature event</a>
            </li>
            <li className="hover:text-black">
              <a href="#link">What's happening this week</a>
            </li>
            <li className="hover:text-black">
              <a href="#link">What's people love</a>
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
            <li className="hover:text-black">
              <a href="#link">Support</a>
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
