import React from "react";

const EndWidget = [
  {
    event: "Post and advertise your event with us.",
    imageUrl: "/images/beach.png",
  },
];

const Endfooter = () => {
  return (
    <div>
      <ul role="list" className="">
        {EndWidget.map((EndWidget) => (
          <li key={EndWidget.event}>
            <div
              className="flex flex-col h-64 w-full justify-center"
              style={{
                background: `url(${EndWidget.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "0.5rem",
              }}
            >
              <div className="text-start p-14">
                <h3 className="text-3xl leading-7 tracking-tight text-white pb-7">
                  {EndWidget.event}
                </h3>
                <button className="flex-initial w-32 bg-blue-500 p-3 rounded-lg drop-shadow-2xl text-white hover:bg-blue-600">
                  Post event
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Endfooter;
