"use client";
import React, { useState, useEffect } from "react";
import SearchArea from "../components/search_page/search_area";
import ResultArea from "../components/search_page/result_area";
import ResultCard from "../components/search_page/result_card";
import Footer from "../components/footer";
import NavbarSearch from "../components/navbar_search";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const style = {
  page: `bg-customBlue`,
};

export default function Search() {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const eventsCollection = collection(db, "events");
        const snapshot = await getDocs(eventsCollection);

        const results = snapshot.size;
        setNumberOfResults(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (filteredEvents) => {
    setFilteredEvents(filteredEvents);
    setNumberOfResults(filteredEvents.length);
  };

  return (
    <div>
      <NavbarSearch />
      <div
        className="pt-32 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('images/overcity.jpg')" }}
      >
        <SearchArea onSearch={handleSearch} />
      </div>
      {loading ? (
        <div className="flex justify-center font-bold text-xl mt-24 mb-24"></div>
      ) : (
        <ResultArea numberOfResults={numberOfResults} />
      )}
      <ResultCard filteredEvents={filteredEvents} />
      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
}
