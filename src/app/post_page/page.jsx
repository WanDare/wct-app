"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";

const style = {
  container: `bg-[#F2F2F2] w-4/12 flex flex-col items-center rounded-lg p-5 mt-10 m-5`,
  previewContainer: `mt-4`,
  previewImage: `w-20 h-20 object-cover mr-2 mb-2 rounded`,
};

export default function Postevent() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleFileChange = (e) => {
    const files = e.target.files;
    const selectedFilesArray = Array.from(files).slice(0, 4);
    setSelectedFiles(selectedFilesArray);

    if (selectedFilesArray.length === 4) {
      e.target.disabled = true;
    }
  };

  const handleDescriptionChange = (e) => {
    const words = e.target.value.split(/\s+/);
    const maxWords = 100;
    if (words.length <= maxWords) {
      setEventDescription(e.target.value);
    } else {
      setEventDescription(words.slice(0, maxWords).join(" "));
    }
  };

  const handleUpload = () => {
    // ot torn dg dak mx
    console.log("Uploading files:", selectedFiles);
    // Reset
    setSelectedFiles([]);
  };

  const handleTimeChange = (e) => {
    setEventTime(e.target.value);
  };

  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center mt-10">
        <div className={style.container}>
          <h1 className="pb-5 font-bold">Fill out your event information</h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event Description</span>
              <span className="label-text-alt text-red font-bold">
                (maximum 100 words)
              </span>
            </div>
            <textarea
              placeholder="Type here"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
              value={eventDescription}
              onChange={handleDescriptionChange}
            ></textarea>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event photos</span>
              <span className="label-text-alt text-red font-bold">
                (maximum 4 pictures)
              </span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              multiple
              onChange={handleFileChange}
            />
          </label>

          <div className={style.previewContainer}>
            {selectedFiles.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Preview ${index + 1}`}
                className={style.previewImage}
              />
            ))}
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event Location</span>
            </div>
            <select className="select select-bordered">
              <option style={{ display: "none" }}>Pick one</option>
              <option>Phnom Penh</option>
              <option>Siem Reap</option>
              <option>Sihanouk Vile</option>
              <option>Battembong</option>
              <option>Kompot</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event Location</span>
            </div>
            <input
              type="text"
              placeholder="Google map url"
              className="input input-bordered w-full max-w-xs"
              value={eventLocation}
            />
          </label>

          <label className="w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event Date & time</span>
            </div>
            <input
              type="date"
              className="input input-bordered w-6/12 max-w-xs"
              value={eventDate}
              onChange={handleDateChange}
            />
            <input
              type="time"
              className="input input-bordered w-6/12 max-w-xs"
              value={eventTime}
              onChange={handleTimeChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Cost to Join</span>
            </div>
            <select className="select select-bordered">
              <option style={{ display: "none" }}>Pick one</option>
              <option>Free</option>
              <option>Paid</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Parking space</span>
            </div>
            <select className="select select-bordered">
              <option style={{ display: "none" }}>Pick one</option>
              <option>Parking available</option>
              <option>Parking unavailable</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Type</span>
            </div>
            <select className="select select-bordered">
              <option style={{ display: "none" }}>Pick one</option>
              <option>Entertainment</option>
              <option>Conferance</option>
              <option>Cultural</option>
              <option>Education</option>
            </select>
          </label>

          <button
            className="btn btn-success text-white mt-4"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
