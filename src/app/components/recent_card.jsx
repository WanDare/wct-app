"use client";
import { useEffect, useState } from "react";
import { getDownloadURL, list, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { fetchRecentData } from "../api/get-data";
import { useRouter } from "next/navigation";

const Recentcard = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const router = useRouter();

  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  useEffect(() => {
    const featureRef = ref(storage, "Recent_event");

    // List all items in the directory
    list(featureRef)
      .then((result) => {
        const promises = result.items.map((itemRef) => getDownloadURL(itemRef));
        return Promise.all(promises);
      })
      .then((urls) => {
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error("Error getting download URLs:", error);
      });
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRecentData();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {imageUrls.length > 0 ? (
        <ul role="list" className="flex flex-wrap gap-3 justify-center">
          {imageUrls.map((url, index) => (
            <li key={index}>
              <div className="items-center gap-x-6">
                <div className="relative w-full rounded-xl overflow-hidden group">
                  <img
                    src={url}
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
                    {usersData.map((user) => (
                      <div key={user.id} className="">
                        <p className="text-2xl font-bold">{user.event}</p>
                        <p className="text-white group-hover:text-white">
                          {user.description}
                        </p>
                      </div>
                    ))}
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
};

export default Recentcard;
