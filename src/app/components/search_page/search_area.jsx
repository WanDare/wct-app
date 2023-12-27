"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const style = {
  container: `bg-white mx-36 px-8 flex flex-col lg:flex-row justify-around w-full lg:w-6/12 my-8 p-3 rounded-lg shadow-xl`,
  inputPart: `w-full lg:w-auto lg:flex-1 rounded flex items-center border p-2 mx-2 my-2 lg:my-0`,
  selectPart: ` appearance-none text-center outline-none bg-transparent w-full cursor-pointer`,
  btn: `p-2 rounded px-5 lg:btn  mt-2 lg:mt-0 lg:ml-2`,
};

const SearchArea = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex justify-center">
      <form className={style.container}>
        {/* Location */}
        <div className={style.inputPart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <select className={style.selectPart}>
            <option style={{ display: "none" }}>Location</option>
            <option>Phnom Penh</option>
            <option>Siem Reap</option>
            <option>Sihanouk Vile</option>
            <option>Battembong</option>
            <option>Kompot</option>
          </select>
        </div>
        {/* Date */}
        <div className={style.inputPart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Date"
            className={style.selectPart}
          />
        </div>
        {/* Type */}
        <div className={style.inputPart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <select className={style.selectPart}>
            <option style={{ display: "none" }}>Type</option>
            <option>Entertainment</option>
            <option>Conferance</option>
            <option>Cultural</option>
            <option>Education</option>
          </select>
        </div>
        {/* Cost */}
        <div className={style.inputPart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <select className={style.selectPart}>
            <option style={{ display: "none" }}>Cost</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
        {/* Button */}
        <button className={style.btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hidden lg:inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span className="lg:hidden btn btn-success">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
