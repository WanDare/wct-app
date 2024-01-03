import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const AuthDetail = () => {
  const router = useRouter();
  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
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
              className="w-12 rounded-full m-1 mr-20"
              tabIndex={0}
              role="button"
            >
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/378290fb-a496-4efc-9456-6bd96d372677/ddiu4q7-23fe4527-1f5d-4c1f-8396-c4e84c7869d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODI5MGZiLWE0OTYtNGVmYy05NDU2LTZiZDk2ZDM3MjY3N1wvZGRpdTRxNy0yM2ZlNDUyNy0xZjVkLTRjMWYtODM5Ni1jNGU4NGM3ODY5ZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YIAzKN1vMss0cYoILdhYCIsjQDCGm9Ib82PzaLc_Hug"
                alt="User Avatar"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p className="font-bold m-3">{authUser.email}</p>

              <li>
                <button onClick={userSignOut}>Sign out</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-row lg:flex">
          <button
            className="text-blue-500 font-normal bg-transparent border border-blue-500 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            onClick={() => onClickPage("/register")}
          >
            Register
          </button>
          <button
            className="text-white font-normal bg-blue-500 px-4 py-2 rounded-md ml-4 transition duration-300 ease-in-out hover:bg-blue-600"
            onClick={() => onClickPage("/login")}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthDetail;
