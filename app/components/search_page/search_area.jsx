"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import SearchButton from "../search_Button";
import SearchFunction from "../search_Function";

const style = {
  container: `flex flex-wrap font-bold gap-3 justify-center items-center px-24 bg-white text-black mx-32  justify-around w-full max-w-screen-xl my-8 py-4 rounded-lg shadow-xl`,
  inputPart: `flex bg-gray-200 flex-initial font-bold justify-center w-52 p-5 rounded-lg hover:text-black`,
  selectPart: `appearance-none text-center outline-none bg-transparent w-full cursor-pointer`,
  btn: `p-2 rounded px-5 lg:btn  mt-2 lg:mt-0 lg:ml-2`,
};

const SearchArea = ({ onSearch }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [costToJoin, setCostToJoin] = useState("");
  const [inputExists, setInputExists] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsCollection = await getDocs(collection(db, "events"));
        const eventData = eventsCollection.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredEvents = events.filter(
      (event) =>
        (!location || event.location_name === location) &&
        (!eventType || event.eventType === eventType) &&
        (!costToJoin || event.costToJoin === costToJoin) &&
        (!selectedDate || new Date(event.date) >= selectedDate)
    );

    setInputExists(
      location.trim() !== "" ||
        eventType.trim() !== "" ||
        costToJoin.trim() !== "" ||
        selectedDate !== null
    );

    console.log("Filtered Events:", filteredEvents);

    onSearch(filteredEvents);
  };

  return (
    <div className="flex justify-center items-center px-8 py-10 list-none">
      <form
        className="flex flex-wrap justify-center font-bold gap-3 bg-white py-4 px-4 max-w-screen-xl rounded-lg drop-shadow-2xl mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Location */}
        <div className={style.inputPart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <select
            className={style.selectPart}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
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

          <select
            className={style.selectPart}
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
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
          <select
            className={style.selectPart}
            value={costToJoin}
            onChange={(e) => setCostToJoin(e.target.value)}
          >
            <option style={{ display: "none" }}>Cost</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
        {/* Button */}
        <SearchFunction onSearch={handleSearch} />
      </form>
    </div>
  );
};

export default SearchArea;
