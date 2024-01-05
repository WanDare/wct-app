"use client";
import React, { useState } from "react";

// Define the UpdateEventForm component
export default function UpdateEventForm({ eventData, onUpdate }) {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    title: eventData.title,
    description: eventData.description,
    costToJoin: eventData.costToJoin,
    date: eventData.date,
    time: eventData.time,
    location_name: eventData.location_name,
    location: eventData.location,
    parkingSpace: eventData.parkingSpace,
    type: eventData.eventType,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  // Return the form JSX
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex py-1 mb-5">
        <label className="pr-2 font-bold w-1/12">Title:</label>
        <input
          type="text"
          name="title"
          className="w-11/12"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex py-1 mb-5">
        <label className="pr-2 font-bold w-1/12">Description:</label>
        <textarea
          className="textarea w-11/12"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="flex py-1 mb-5">
        <label className="pr-2 font-bold w-2/12">Event Detail:</label>
        <div className="label">
          <span className="label-text">Event Location</span>
        </div>
        <select
          className="select select-bordered"
          id="eventLocationName"
          onChange={handleInputChange}
        >
          <option style={{ display: "none" }}>{formData.location_name}</option>
          <option value="Phnom Penh">Phnom Penh</option>
          <option value="Siem Reap">Siem Reap</option>
          <option value="Sihanouk Vile">Sihanouk Vile</option>
          <option value="Battembong">Battembong</option>
          <option value="Kompot">Kompot</option>
        </select>

        <div className="label">
          <span className="label-text">Event Location</span>
          <span className="label-text-alt text-red-500 font-bold">
            (embed url)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder={formData.location}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex py-1 mb-5">
        <label className="w-1/12"></label>
        <div className="label">
          <span className="label-text">Cost to Join</span>
        </div>
        <select
          className="select select-bordered"
          id="costToJoin"
          onChange={handleInputChange}
        >
          <option style={{ display: "none" }}>{formData.costToJoin}</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <div className="label">
          <span className="label-text">Parking space</span>
        </div>
        <select
          className="select select-bordered"
          id="parkingSpace"
          onChange={handleInputChange}
        >
          <option style={{ display: "none" }}>{formData.parkingSpace}</option>
          <option value="Parking available">Parking available</option>
          <option value="Parking unavailable">Parking unavailable</option>
        </select>
        <div className="label">
          <span className="label-text">Type</span>
        </div>
        <select
          className="select select-bordered"
          id="eventType"
          onChange={handleInputChange}
        >
          <option style={{ display: "none" }}>{formData.type}</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Conference">Conference</option>
          <option value="Cultural">Cultural</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <div>
        <label className="pr-2 font-bold w-2/12">Event date & time:</label>
        <input
          type="date"
          className="input input-bordered w-6/12 max-w-xs"
          value={formData.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          className="input input-bordered w-6/12 max-w-xs"
          value={formData.time}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="btn btn-success w-4/12 mt-10">
          Update Event
        </button>
      </div>
    </form>
  );
}
