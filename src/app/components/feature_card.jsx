"use client";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { useRouter } from "next/navigation";
import Description from "./Description";
import Image from "next/image";

export default function Feature() {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const eventsCollection = collection(db, "events");
        const snapshot = await getDocs(eventsCollection);
        const shuffledDocs = shuffleArray(snapshot.docs);
        const selectedDocs = shuffledDocs.slice(0, 5);
        const eventData = await Promise.all(
          selectedDocs.map(async (doc) => {
            const data = doc.data();
            const imageUrl = data.images[0];
            const storage = getStorage();
            const imageRef = ref(storage, imageUrl);
            const imageUrlResolved = await getDownloadURL(imageRef);
            return { ...data, imageUrl: imageUrlResolved, id: doc.id };
          })
        );

        setEvents(eventData);
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
                <div className="relative w-72 rounded-xl shadow-lg overflow-hidden group">
                  <Image
                    src={event.imageUrl}
                    alt={`Image ${index + 1}`}
                    width={"300"}
                    height={"100"}
                    className="bg-no-repeat bg-center h-52 duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-0 w-full h-full transition duration-300 opacity-50 rounded-lg group-hover:bg-black" />

                  <div className="absolute right-0 duration-300 transform -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-20 group-hover:bottom-5">
                    <button
                      className="h-10 px-8 font-normal bg-white border-none rounded-full btn btn-sm hover:bg-black hover:text-white"
                      onClick={() => onClickPage(`/search_area/${event.id}`)}
                    >
                      Event View
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div key={event.id} className="">
                  <h2 className="font-bold truncate ...">{event.title}</h2>
                  <Description text={event.description} limit={4} />
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
