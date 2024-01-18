"use client";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({ id: user.uid });
      } else {
        setAuthUser(null);
      }
    });

    return () => listen();
  }, []);
  const user = authUser || null;
  return user ? user.id : null;
};

const AuthDetail = () => {
  const router = useRouter();
  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({ id: user.uid, email: user.email });
      } else {
        setAuthUser(null);
      }
    });

    return () => listen();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <div>
          <div className="avatar dropdown dropdown-bottom text-black">
            <div
              className="w-11  rounded-full m-1 mr-20"
              tabIndex={0}
              role="button"
            >
              <Image
                src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
                alt="User Avatar"
                width={"100"}
                height={"100"}
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p className="font-bold m-3">{authUser.email}</p>
              {authUser.email === "aboy@gmail.com" && (
                <li>
                  <button
                    className="hover:text-black"
                    onClick={() => onClickPage("/dashboard")}
                  >
                    Dashboards
                  </button>
                </li>
              )}
              <li>
                <button onClick={userSignOut}>Sign out</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-row lg:flex pl-3 pr-5 whitespace-nowrap">
          <button
            className="text-blue-500 font-normal bg-transparent border border-blue-500 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            onClick={() => onClickPage("/authentication/register")}
          >
            Register
          </button>
          <button
            className="text-white font-normal bg-blue-500 px-4 py-2 rounded-md ml-4 transition duration-300 ease-in-out hover:bg-blue-600"
            onClick={() => onClickPage("/authentication/login")}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthDetail;
