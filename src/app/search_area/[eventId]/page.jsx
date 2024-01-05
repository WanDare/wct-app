"use client";
import {
  AttachMoney,
  DateRange,
  People,
  PlaceOutlined,
  Timelapse,
  TimeToLeave, //use parking instead of number of participant ** car replace people icon
} from "@mui/icons-material";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../../firebaseConfig";
import { ref, getDownloadURL, getStorage } from "firebase/storage";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { data } from "autoprefixer";
import { images } from "../../../../next.config";

const EventDetail = ({ params }) => {
  // states of data
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async (eventId) => {
      try {
        const db = getFirestore();
        const eventDocRef = doc(db, "events", eventId);
        const eventDocSnap = await getDoc(eventDocRef);

        if (eventDocSnap.exists()) {
          const data = eventDocSnap.data();
          const images = data.images.slice(1, 4);
          const storage = getStorage();

          const imageUrls = await Promise.all(
            images.map(async (imageUrl) => {
              const imageRef = ref(storage, imageUrl);
              return await getDownloadURL(imageRef);
            })
          );

          setEvent({ ...data, images: imageUrls, id: eventDocSnap.id });
        } else {
          console.error("No document found!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (params.eventId) {
      fetchData(params.eventId);
    }
  }, [params.eventId]);

  return (
    <div>
      <Navbar />
      <div className="event_detail pt-16">
        {!images && (
          <div className=" h-[85vh] flex justify-center items-center  text-base lg:text-xl">
            <progress className="progress w-56"></progress>
          </div>
        )}

        {!event && (
          <div className=" h-[85vh] flex justify-center items-center  text-base lg:text-xl">
            There is no data with the Event.
          </div>
        )}
        {event && images && (
          <div className="event-details ">
            {/* images */}
            <section className="border-b-2  ">
              {event.images && (
                <div className="Images bg-white py-10 container md:grid flex justify-center items-center flex-col grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-5 mx-auto ">
                  {event.images.map((imageUrl, index) => (
                    <img
                      key={index}
                      className={`shadow-${
                        index === 0 ? "xl" : "lg"
                      } w-[400px] rounded-lg ${
                        index === 0
                          ? "md:row-span-2 md:col-span-2"
                          : "md:col-span-1"
                      } md:w-full md:h-full object-cover md:rounded-lg sm:rounded-md`}
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </section>

            <section className="event-infos bg-zinc-100 pb-10">
              {/* event name and shorthanded info (rating, location) */}
              <div className="event-shorthanded-info container mx-auto py-8 pl-5 md:pl-0 ">
                <h1 className=" text-2xl md:text-3xl font-semibold text-gray-800">
                  {" "}
                  {event.title}{" "}
                </h1>
                <div className=" text-sm leading-8 ">
                  <p className=" text-gray-900 font-semibold ">
                    {" "}
                    <PlaceOutlined className=" text-blue-600" />{" "}
                    {event.location_name}
                    {", Cambodia"}
                  </p>
                </div>
              </div>

              {/* overview details and map */}
              <div className="detailed-infos-container container mx-auto lg:grid grid-cols-3 gap-x-10 ">
                <div className="overview-details col-span-2 ">
                  <div className="drop-shadow p-6 rounded-t-lg bg-white">
                    <div className="mb-5 text-md font-semibold ">Overview</div>
                    <div className="overview font-semibold leading-6 text-gray-600 text-sm">
                      {event.description}
                    </div>
                  </div>
                  <div className="event-shorthanded-detail mt-1 leading-8 drop-shadow rounded-b-lg p-6 bg-white">
                    <div className=" text-base font-semibold">
                      Event details
                    </div>
                    <div className="text-xs md:text-sm leading-7 md:leading-8 ">
                      <p>
                        {" "}
                        <AttachMoney className=" text-xl md:text-2xl text-blue-500 mr-2" />{" "}
                        {event.costToJoin}{" "}
                      </p>
                      <p>
                        {" "}
                        <DateRange className=" text-xl md:text-2xl text-blue-500 mr-2" />{" "}
                        {event.date}
                        {" at "}
                        {event.time}
                      </p>
                      <p>
                        {" "}
                        <PlaceOutlined className=" text-xl md:text-2xl text-blue-500 mr-2" />{" "}
                        {event.location_name}
                        {", Cambodia"}
                      </p>
                      <p>
                        {" "}
                        <TimeToLeave className=" text-xl md:text-2xl text-blue-500 mr-2" />{" "}
                        {event.parkingSpace}{" "}
                      </p>
                    </div>
                  </div>
                </div>

                {/* map iframe */}
                <div className="map">
                  <iframe
                    className=" mt-2  drop-shadow w-5/6 h-[300px]  mx-auto min-w-[200px]  lg:max-w-none lg:max-h-none lg:mt-0 lg:w-full lg:h-full rounded-xl"
                    src={event.location}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
