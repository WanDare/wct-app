import React from "react";
import SearchArea from "./search_page/search_area";
import ResultArea from "./search_page/result_area";
import ResultCard from "./search_page/result_card";
import Footer from "./footer";
import NavbarSearch from "./navbar_search";


const style = {
  page: `bg-customBlue`,
};
const Search = () => {
  return (
    <div>
      <NavbarSearch/>
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
};

export default Search;
