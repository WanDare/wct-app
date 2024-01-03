"use client";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, list, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";

export default function Feature() {
  const [imageUrls, setImageUrls] = useState([]);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const featureRef = ref(storage, "Feature_event");

    // List all items in the directory
    list(featureRef)
      .then((result) => {
        const promises = result.items.map((itemRef) => getDownloadURL(itemRef));
        return Promise.all(promises);
      })
      .then((urls) => {
        setImageUrls(urls);
        fetchEventDataForEvents(urls);
      })
      .catch((error) => {
        console.error("Error getting download URLs:", error);
      });
  }, []);

  const fetchEventDataForEvents = async (urls) => {
    try {
      const eventDocRefs = urls.map((url, index) =>
        doc(db, "feature_detail", `event${index + 1}`)
      );

      const eventDocSnapshots = await Promise.all(
        eventDocRefs.map((docRef) => getDoc(docRef))
      );

      const eventData = eventDocSnapshots.map((docSnapshot, index) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
        imageUrl: urls[index] || null,
      }));

      setEventData(eventData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {imageUrls.length > 0 ? (
        <ul role="list" className="flex flex-wrap gap-3 justify-center">
          {eventData.map((event, index) => (
            <li key={index}>
              <div className="items-center gap-x-6">
                <div className="relative w-full rounded-xl overflow-hidden group">
                  <img
                    src={event.imageUrl}
                    alt={`Image ${index + 1}`}
                    className="object-cover w-100 h-100 rounded-lg duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-0 w-full h-full transition duration-300 opacity-50 rounded-lg group-hover:bg-black" />

                  <div className="absolute right-0 duration-300 transform -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-20 group-hover:bottom-5">
                    <button className="h-10 px-8 font-normal bg-white border-none rounded-full btn btn-sm hover:bg-black hover:text-white">
                      Event View
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div key={event.id} className="">
                  <h2 className="font-bold">{event.event}</h2>
                  <p>{event.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-wrap gap-12">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="flex flex-col gap-4 w-64">
              <div className="skeleton h-56 w-72"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
