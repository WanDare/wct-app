"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push("/");
        console.log(userCredential);
      })
      .catch((error) => {
        alert("Incorrect input");
        console.log(error);
      });
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
        <div className="flex flex-col items-center lg:w-3/12 sm:w-5/12">
          <h1 className="font-bold text-2xl">Sign in</h1>

          <form className="w-full" onSubmit={signIn}>
            <label className="form-control w-full mt-10">
              <div className="label">
                <span className="label-text">Email Address</span>
              </div>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="form-control w-full mt-5">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Type here"
                  className="input input-bordered w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <div className="label">
                <span className="label-text-alt"></span>
                <button
                  className="label-text-alt mt-3 text-sky-600"
                  onClick={() => onClickPage("/resetpw")}
                >
                  Forget Password?
                </button>
              </div>
            </label>
            <div className="flex justify-center">
              <button className="btn bg-sky-500 w-6/12 mt-5" type="submit">
                Continue
              </button>
            </div>
          </form>
          <div className="text-sm mt-3">
            <span>Dont have an account? </span>
            <button
              className="text-sky-600"
              onClick={() => onClickPage("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
