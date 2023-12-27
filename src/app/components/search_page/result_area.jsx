import React from "react";

const style = {
  resultFound: `flex flex-col lg:flex-row justify-around my-10 items-center`,
  selectPart: `outline-none bg-transparent`,
};

function ResultArea() {
  return (
    <div className={style.resultFound}>
      <p className="text-xl font-bold mb-2 lg:mb-0 lg:mr-4">
        Phnom Penh : 2831 results found
      </p>
      <div className="border rounded-lg shadow-lg px-3 flex items-center">
        <div className="pl-1 text-xs ">Sort by</div>
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
