"use client";
import {
  AttachMoney,
  DateRange,
  People,
  PlaceOutlined,
  Timelapse,
} from "@mui/icons-material";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const EventDetail = () => {
  //states of datas
  const [eventData, setEventData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, SetError] = useState(false);
  //states of images
  const imageListRef = ref(storage, "/Event_detail_test/vRT1yh9qD6XmIyFuw0Dw");
  const [imageList, setImageList] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "eventDetail", "vRT1yh9qD6XmIyFuw0Dw");

    const fetchEventDetial = async () => {
      try {
        const fetchedData = await getDoc(docRef);
        if (fetchedData.exists()) {
          setEventData(fetchedData.data());
          setIsPending(false);
        } else {
          setIsPending(false);
        }
      } catch (err) {
        console.log(err);
        SetError(true);
        setIsPending(false);
      }
    };

    fetchEventDetial();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await listAll(imageListRef);
        const urls = await Promise.all(
          response.items.map(async (item) => await getDownloadURL(item))
        );
        setImageList(() => [...urls]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchImages();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="event_detail pt-16">
        {isPending && !imageList && (
          <div className=" h-[85vh] flex justify-center items-center  text-base lg:text-xl">
            <progress className="progress w-56"></progress>
          </div>
        )}

        {!eventData && !isPending && (
          <div className=" h-[85vh] flex justify-center items-center  text-base lg:text-xl">
            There is no data with the Event.
          </div>
        )}
        {eventData && imageList && (
          <div className="event-details ">
            {/* images */}
            <section className="border-b-2  ">
              <div className="Images bg-white py-10 container md:grid flex justify-center items-center flex-col grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-5 mx-auto ">
                <img
                  className=" shadow-xl w-[400px] rounded-lg md:row-span-2 md:col-span-2  md:w-full md:h-full object-cover md:rounded-lg  sm:rounded-md"
                  src={imageList[0]}
                  alt=""
                />
                <img
                  className=" shadow-lg w-[400px]  rounded-lg md:rouned-md md:w-full md:h-full object-cover md:col-span-1"
                  src={imageList[1]}
                  alt=""
                />
                <img
                  className=" shadow-lg  w-[400px]  rounded-lg md:rounded-md md:w-full md:h-full object-cover md:col-span-1"
                  src={imageList[2]}
                  alt=""
                />
              </div>
            </section>

            <section className="event-infos bg-zinc-100 pb-10">
              {/* event name and shorthanded info (rating, location) */}
              <div className="event-shorthanded-info container mx-auto py-8 pl-5 md:pl-0 ">
                <h1 className=" text-2xl md:text-3xl font-semibold text-gray-800">
                  {" "}
                  {eventData.title}{" "}
                </h1>
                <div className=" text-sm leading-8 ">
                  <p className=" text-gray-900 font-semibold ">
                    {" "}
                    <PlaceOutlined className=" text-blue-600" />{" "}
                    {eventData.location}{" "}
                  </p>
                </div>
              </div>

              {/* overview details and map */}
              <div className="detailed-infos-container container mx-auto lg:grid grid-cols-3 gap-x-10 ">
                <div className="overview-details col-span-2 ">
                  <div className="drop-shadow p-6 rounded-t-lg bg-white">
                    <div className="mb-5 text-md font-semibold ">Overview</div>
                    <div className="overview font-semibold leading-6 text-gray-600 text-sm">
                      {eventData.description}
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
                        {eventData.entryFee}{" "}
                      </p>
                      <p>
                        {" "}
                        <DateRange className=" text-xl md:text-2xl text-blue-500 mr-2" />{" "}
                        {eventData.date.toDate().toLocaleDateString()}
                        {" at "}
                        {eventData.date.toDate().toLocaleTimeString()}
                      </p>
                      <p>
                        {" "}
                        <PlaceOutlined className=" text-xl md:text-2xl text-blue-500 mr-2" />{" "}
                        {eventData.location}{" "}
                      </p>
                      <p>
                        {" "}
                        <People className=" text-xl md:text-2xl text-blue-500 mr-2" />{" "}
                        {eventData.maxParticipant}{" "}
                      </p>
                    </div>
                  </div>
                </div>

                {/* map iframe */}
                <div className="map">
                  <iframe
                    className=" mt-2  drop-shadow w-5/6 h-[300px]  mx-auto min-w-[200px]  lg:max-w-none lg:max-h-none lg:mt-0 lg:w-full lg:h-full rounded-xl"
                    src={eventData.locationLink}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        )}
        {error && (
          <div className=" h-[85vh] flex justify-center items-center  text-base lg:text-xl">
            Error fetching data!
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
