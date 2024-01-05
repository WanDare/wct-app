import React, { useState } from "react";

const UpdateEventForm = ({ eventData, onUpdate }) => {
  const [formData, setFormData] = useState({
    // Initialize the form fields with event data
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      <div className="flex py-1 mb-5">
        <label className="pr-2 font-bold w-1/12">Title:</label>
        <input
          type="text"
          name="title"
          className="w-11/12"
          placeholder={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex py-1 mb-5">
        <label className="pr-2 font-bold w-1/12">Description:</label>
        <textarea
          className="textarea w-11/12"
          name="description"
          placeholder={formData.description}
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
          <option>Phnom Penh</option>
          <option>Siem Reap</option>
          <option>Sihanouk Vile</option>
          <option>Battembong</option>
          <option>Kompot</option>
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
          // placeholder={formData.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          className="input input-bordered w-6/12 max-w-xs"
          // placeholder={formData.time}
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
};

export default UpdateEventForm;
