import React from "react";
import { useRouter } from "next/navigation";

const Eventcard = [
  {
    event: "River Walk",
    description:
      "Hundreds of food stall while you stroll along the river side and watch all crowd enjoying...",
    imageUrl: "/images/recent1.png",
  },
  {
    event: "Meet n Eat",
    description:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    imageUrl: "/images/recent2.png",
  },
  {
    event: "Night-out",
    description:
      "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    imageUrl: "/images/recent3.png",
  },
];

const Recentcard = () => {
  const router = useRouter();

  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  return (
    <div>
      <ul role="list" className="flex flex-wrap gap-3 justify-center">
        {Eventcard.map((eventCard) => (
          <li key={eventCard.event}>
            <div className="relative w-full rounded-lg group">
              <div className="">
                <div
                  className="flex flex-col h-80 w-96 gap-y-2"
                  style={{
                    background: `url(${eventCard.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "0.5rem",
                  }}
                ></div>
                <div className="absolute top-0 w-full h-full transition duration-300 opacity-50 rounded-lg group-hover:bg-black" />

                <div className="absolute top-0 w-full h-full p-10 text-white">
                  <h1 className="text-2xl font-bold">{eventCard.event}</h1>
                  <p className="text-white group-hover:text-white">
                    {eventCard.description}
                  </p>
                </div>

                <div
                  className="absolute bottom-10 left-10"
                  onClick={() => onClickPage("/contact")}
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
    </div>
  );
};

export default Recentcard;
