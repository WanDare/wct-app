"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const style = {
  resultFound: `flex flex-col lg:flex-row justify-around my-10 items-center`,
  selectPart: `outline-none bg-transparent`,
};

function ResultArea() {
  const [numberOfResults, setNumberOfResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const eventsCollection = collection(db, "events");
        const snapshot = await getDocs(eventsCollection);

        const results = snapshot.size;
        console.log("Number of Results:", results);
        setNumberOfResults(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.resultFound}>
      <p className="text-xl font-bold mb-2 lg:mb-0 lg:mr-4">
        {numberOfResults} {numberOfResults !== 1 ? "results" : "result"} found
      </p>
      <div className="border rounded-lg shadow-lg px-3 flex items-center">
        <div className="pl-1 text-xs">Sort by</div>
        <select className={`${style.selectPart} lg:ml-2`}>
          <option>Recommended</option>
          <option>Top Rated</option>
          <option>This week</option>
        </select>
      </div>
    </div>
  );
}

export default ResultArea;
