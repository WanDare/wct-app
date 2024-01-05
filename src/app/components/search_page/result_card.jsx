"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const style = {
  container: `flex flex-col mx-4 lg:mx-20 mt-5 border rounded-md bg-white shadow-lg`,
  secondContainer: `flex flex-col lg:flex-row p-4`,
  img: `w-full lg:w-4/12 rounded-md lg:mr-4`,
  content: `mt-4 lg:mt-0 lg:ml-4`,
  btn: `btn btn-outline btn-info mt-4 lg:mt-20`,
};

function ResultCard({ filteredEvents }) {
  const router = useRouter();
  const [events, setEvents] = useState(null);

  const onClickPage = (eventId) => {
    router.push(`/search_area/${eventId}`);
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
            const imageUrl =
              data.images && data.images.length > 0 ? data.images[0] : null;

            try {
              if (imageUrl) {
                const storage = getStorage();
                const imageRef = ref(storage, imageUrl);
                const imageUrlResolved = await getDownloadURL(imageRef);
                return { ...data, imageUrl: imageUrlResolved, id: doc.id };
              } else {
                return { ...data, id: doc.id };
              }
            } catch (error) {
              console.error("Error fetching image:", error);
              return { ...data, id: doc.id };
            }
          })
        );
        const eventsToDisplay =
          filteredEvents.length > 0 ? filteredEvents : eventData;

        const eventsWithImages = await Promise.all(
          eventsToDisplay.map(async (event) => {
            const imageUrl =
              event.images && event.images.length > 0 ? event.images[0] : null;

            try {
              if (imageUrl) {
                const storage = getStorage();
                const imageRef = ref(storage, imageUrl);
                const imageUrlResolved = await getDownloadURL(imageRef);
                return { ...event, imageUrl: imageUrlResolved, id: event.id };
              } else {
                return event;
              }
            } catch (error) {
              console.error("Error fetching image:", error);
              return event;
            }
          })
        );

        setEvents(eventsWithImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filteredEvents]);

  return (
    <div>
      {events !== null ? (
        events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className={style.container}>
              <div className={style.secondContainer}>
                <img src={event.imageUrl} className={style.img} />
                <div className={style.content}>
                  <h1 className="text-xl font-bold">{event.title}</h1>
                  <p className="mt-2 lg:mt-4">{event.description}</p>
                  <button
                    className={style.btn}
                    onClick={() => onClickPage(event.id)}
                  >
                    See Detail
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center font-bold text-xl mt-24 mb-24">
            {filteredEvents.length === 0 && "No results found"}
          </div>
        )
      ) : (
        <div className="flex justify-center font-bold text-xl mt-24 mb-24">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
