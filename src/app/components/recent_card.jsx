"use client";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { useRouter } from "next/navigation";

export default function Recentcard() {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const eventsCollection = collection(db, "events");
        const snapshot = await getDocs(eventsCollection);

        const eventData = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const data = doc.data();
            const imageUrl = data.images[0];
            const storage = getStorage();
            const imageRef = ref(storage, imageUrl);
            const imageUrlResolved = await getDownloadURL(imageRef);
            return { ...data, imageUrl: imageUrlResolved, id: doc.id };
          })
        );

        // Filter out events that have already passed
        const currentDate = new Date();
        const filteredEvents = eventData.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= currentDate;
        });

        // Sort remaining events by the time difference from the current date
        const sortedEvents = filteredEvents.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          return Math.abs(dateA - currentDate) - Math.abs(dateB - currentDate);
        });

        // Select the top 3 closest events
        const closestEvents = sortedEvents.slice(0, 3);

        setEvents(closestEvents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {events.length > 0 ? (
        <ul role="list" className="flex flex-wrap gap-3 justify-center">
          {events.map((event, index) => (
            <li key={index}>
              <div className="items-center gap-x-6">
                <div className="relative w-full rounded-xl overflow-hidden group">
                  <img
                    src={event.imageUrl}
                    alt={`Image ${index + 1}`}
                    className="flex flex-col h-80 w-96 gap-y-2"
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <div className="absolute top-0 w-full h-full transition duration-300 opacity-50 rounded-lg group-hover:bg-black" />

                  <div className="absolute top-0 w-full h-full p-10 text-white">
                    <div key={event.id}>
                      <h2 className="text-2xl font-bold">{event.event}</h2>
                      <p className="text-white group-hover:text-white">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-10 left-10"
                    onClick={() => onClickPage(`/search_area/${event.id}`)}
                  >
                    <p className="font-bold cursor-pointer text-white transition duration-300 ease-in-out scale-50 translate-y-4 opacity-0 group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-200">
                      Event Detail
                    </p>
                    <hr className="transition h-[3px] duration-500 ease-in-out scale-x-0 bg-white group-hover:scale-x-100" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="justify-center flex flex-wrap flex-row gap-4">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index}>
              <div className="skeleton w-96 h-72"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
