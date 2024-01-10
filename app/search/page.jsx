import React from "react";
import SearchArea from "../components/search_page/search_area";
import ResultArea from "../components/search_page/result_area";
import ResultCard from "../components/search_page/result_card";
import Footer from "../components/footer";
import NavbarSearch from "../components/navbar_search";

const style = {
  page: `bg-customBlue`,
};
export default function Search() {
  return (
    <div>
      <NavbarSearch />
      <div className="pt-32" style={{ backgroundColor: "#2A5A9A" }}>
        <SearchArea />
      </div>
      <ResultArea />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <Footer />
    </div>
  );
}
