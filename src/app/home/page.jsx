"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const onClickPage = (pathname) => {
    router.push(pathname);
  };
  return (
    <div>
      <button onClick={() => onClickPage("/search")}>search page</button>
    </div>
  );
};

export default Home;
