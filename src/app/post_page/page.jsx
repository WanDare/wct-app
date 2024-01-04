"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const style = {
  container: `bg-[#F2F2F2] w-4/12 flex flex-col items-center rounded-lg p-5 mt-10 m-5`,
  previewContainer: `mt-4`,
  previewImage: `w-20 h-20 object-cover mr-2 mb-2 rounded`,
};

export default function Postevent() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [eventTitle, setEventTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const selectedFilesArray = Array.from(files).slice(0, 4);

    // Filter out non-image files
    const imageFiles = selectedFilesArray.filter((file) =>
      allowedTypes.includes(file.type)
    );

    setSelectedFiles(imageFiles);

    if (imageFiles.length === 4) {
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

  const handleUpload = async () => {
    try {
      // Check if user is authenticated
      if (!user) {
        console.error("User not authenticated");
        return;
      }

      // Step 1: Upload event data to Firestore
      const eventRef = await addDoc(collection(db, "events"), {
        title: eventTitle,
        description: eventDescription,
        location_name: document.getElementById("eventLocationName").value,
        location: eventLocation,
        date: eventDate,
        time: eventTime,
        costToJoin: document.getElementById("costToJoin").value,
        parkingSpace: document.getElementById("parkingSpace").value,
        eventType: document.getElementById("eventType").value,
        userId: user.uid,
      });

      // Step 2: Upload images to Storage and get download URLs
      const imageUrls = await Promise.all(
        selectedFiles.map(async (file, index) => {
          const storageRef = ref(
            storage,
            `eventImages/${eventRef.id}_${index}`
          );
          await uploadBytes(storageRef, file);
          return getDownloadURL(storageRef);
        })
      );

      // Step 3: Update Firestore document with image URLs
      await updateDoc(doc(db, "events", eventRef.id), {
        images: imageUrls,
        userId: user.uid,
      });

      console.log("Event data and images uploaded successfully!");

      // Reset
      setSelectedFiles([]);
      router.push("/");
      alert("Upload Successfully");
    } catch (error) {
      alert("Upload Fail");
      console.error("Error uploading data:", error);
    }
  };

  const handleTimeChange = (e) => {
    setEventTime(e.target.value);
  };

  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleLocationChange = (e) => {
    setEventLocation(e.target.value);
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
            <select className="select select-bordered" id="eventLocationName">
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
              onChange={handleLocationChange}
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
            <select className="select select-bordered" id="costToJoin">
              <option style={{ display: "none" }}>Pick one</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Parking space</span>
            </div>
            <select className="select select-bordered" id="parkingSpace">
              <option style={{ display: "none" }}>Pick one</option>
              <option value="Parking available">Parking available</option>
              <option value="Parking unavailable">Parking unavailable</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Type</span>
            </div>
            <select className="select select-bordered" id="eventType">
              <option style={{ display: "none" }}>Pick one</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Conference">Conference</option>
              <option value="Cultural">Cultural</option>
              <option value="Education">Education</option>
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
