"use client";
import React from "react";

const Eventcard = [
  {
    event: "Event 1",
    description: "Short description",
    imageUrl: "/images/Rectangle1.png",
  },
  {
    event: "Event 2",
    description: "Short description",
    imageUrl: "/images/Rectangle2.png",
  },
  {
    event: "Event 3",
    description: "Short description",
    imageUrl: "/images/Rectangle3.png",
  },
  {
    event: "Event 4",
    description: "Short description",
    imageUrl: "/images/Rectangle4.png",
  },
  {
    event: "Event 5",
    description: "Short description",
    imageUrl: "/images/Rectangle1.png",
  },
];

const Feature = () => {
  return (
    <div>
      <ul role="list" className="flex flex-wrap gap-3 justify-center">
        {Eventcard.map((Eventcard) => (
          <li key={Eventcard.event}>
            <div className="items-center gap-x-6">
              <div className="relative w-full rounded-xl overflow-hidden group ">
                <img
                  className="object-cover w-100 h-100 rounded-lg duration-700 ease-in-out group-hover:scale-110"
                  src={Eventcard.imageUrl}
                  alt=""
                />
                <div className="absolute top-0 w-full h-full transition duration-300 opacity-50 rounded-lg group-hover:bg-black" />

                <div className="absolute right-0 duration-300 transform -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-20 group-hover:bottom-5">
                  <button className="h-10 px-8 font-normal bg-white border-none rounded-full btn btn-sm hover:bg-black hover:text-white">
                    Event View
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {Eventcard.event}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {Eventcard.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feature;
