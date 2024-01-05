import React from "react";
import { useRouter } from "next/navigation";

const SearchButton = () => {
  const router = useRouter();

  const onClickPage = () => {
    router.push(`/search_area`);
  };
  return (
    <li>
      <button
        className="flex-initial w-40 bg-blue-500 p-5 rounded-lg drop-shadow-2xl text-white hover:bg-blue-600"
        onClick={onClickPage}
      >
        Search
      </button>
    </li>
  );
};

export default SearchButton;
