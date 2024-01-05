"use client";
import {
  AttachMoney,
  DateRange,
  PlaceOutlined,
  Segment,
  TimeToLeave, //use parking instead of number of participant ** car replace people icon
} from "@mui/icons-material";
import {
  getDoc,
  getFirestore,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { ref, getDownloadURL, getStorage } from "firebase/storage";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { images } from "../../../../next.config";
import { useAuth } from "@/app/components/authDetail";
import UpdateEventForm from "@/app/update_page/page";
import { useRouter } from "next/navigation";
import Image from "next/image";

const EventDetail = ({ params }) => {
  const router = useRouter();
  const currentUser = useAuth();

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

  const handleUpdate = async (updatedData) => {
    try {
      // Get the reference to the event document in Firebase
      const eventDocRef = doc(db, "events", event.id);

      // Update the event data in Firebase
      await updateDoc(eventDocRef, updatedData);

      router.push("/search_area");
      alert("Updated Succesfully");
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDelete = async () => {
    try {
      // Get the reference to the event document in Firebase
      const eventDocRef = doc(db, "events", event.id);

      // Delete the event from Firebase
      await deleteDoc(eventDocRef);

      router.push("/search_area");
      alert("Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };
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
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
        {event && images && (
          <div className="event-details ">
            {/* images */}
            <section className="border-b-2 px-5">
              {event.images && (
                <div className="Images bg-white py-10 container md:grid flex justify-center items-center flex-col grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-5 mx-auto ">
                  {event.images.map((imageUrl, index) => (
                    <Image
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
                      width={"800"}
                      height={"100"}
                    />
                  ))}
                </div>
              )}
            </section>

            <section className="event-infos bg-zinc-100 pb-10 px-5">
              {/* event name and shorthanded info (rating, location) */}
              <div className="event-shorthanded-info container mx-auto py-8 pl-5 md:pl-0 ">
                <h1 className=" flex justify-between text-2xl md:text-3xl font-semibold text-gray-800">
                  {" "}
                  {event.title}
                  {currentUser === event.userId && (
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">
                        <Segment />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <button
                            onClick={() =>
                              document.getElementById("my_modal_4").showModal()
                            }
                          >
                            Update
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              document.getElementById("my_modal_3").showModal()
                            }
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </h1>

                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg pb-2">Update Event</h3>
                    <UpdateEventForm
                      eventData={event}
                      onUpdate={handleUpdate}
                    />

                    <div className="modal-action"></div>
                  </div>
                </dialog>

                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">Confirmation</h3>
                    <p className="py-4">
                      Are you sure you want to delete this event?
                    </p>
                    <div className="flex justify-center">
                      <button className="btn btn-error" onClick={handleDelete}>
                        Confirm
                      </button>
                    </div>
                  </div>
                </dialog>

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
