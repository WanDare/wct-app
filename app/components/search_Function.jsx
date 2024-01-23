"use client";
import React, { useState, useEffect } from "react";

const SearchFunction = ({ onSearch }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [costToJoin, setCostToJoin] = useState("");
  const [inputExists, setInputExists] = useState(false);
  const [events, setEvents] = useState([]);

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
    <li>
      <button
        className="flex-initial w-40 bg-blue-500 p-5 rounded-lg drop-shadow-2xl text-white hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </li>
  );
};

export default SearchFunction;
