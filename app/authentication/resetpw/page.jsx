"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Resetpw() {
  const router = useRouter();
  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  return (
    <>
      <nav>
        <button
          className="font-bold text-2xl ml-10 mt-5"
          onClick={() => onClickPage("/")}
        >
          Event Hunt
        </button>
      </nav>
      <div className="flex justify-center mt-24">
        <div className="flex flex-col items-center  lg:w-3/12 sm:w-5/12">
          <h1 className="font-bold text-2xl">Forgot your password?</h1>
          <label className="form-control w-full mt-10">
            <div className="label">
              <span className="label-text">Email Address</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>

          <button className="btn bg-sky-500 w-full text-white mt-5">
            Sent Reset Link
          </button>
          <div className="text-sm mt-3">
            <span>
              By creating an account, you agree with our{" "}
              <button
                className="text-sky-600"
                onClick={() => onClickPage("/register")}
              >
                Terms and conditions
              </button>{" "}
              and{" "}
              <button
                className="text-sky-600"
                onClick={() => onClickPage("/register")}
              >
                Privacy statement
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
