"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TableChartIcon from "@mui/icons-material/TableChart";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  const router = useRouter();
  const onClickPage = (pathname) => {
    router.push(pathname);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary lg:hidden text-gray-500 bg-transparent border-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 drawer-button"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <aside
                  id="logo-sidebar"
                  className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                  aria-label="Sidebar"
                >
                  <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <a
                      onClick={() => onClickPage("/")}
                      className="font-black text-4xl text-white items-center cursor-pointer"
                    >
                      <Image
                        className="h-40 w-40 mx-auto"
                        src={"/images/EventHunt.svg"}
                        alt=""
                        width={"550"}
                        height={"100"}
                      />
                    </a>
                    <ul className="space-y-2 font-medium cursor-pointer">
                      <li>
                        <a
                          onClick={() => onClickPage("/dashboard")}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <DashboardIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                          <span className="ms-3">Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => onClickPage("/dashboard/calendar")}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <CalendarMonthIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Calendar
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => onClickPage("/dashboard/elements")}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <ViewQuiltIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            UI Elements
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => onClickPage("/dashboard/users")}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <PeopleAltIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Users
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => onClickPage("/dashboard/table")}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <TableChartIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Table
                          </span>
                        </a>
                      </li>
                      <Divider className="border-b border-gray-200 dark:border-gray-700" />
                      <li>
                        <a
                          onClick={() => onClickPage("/dashboard/profile")}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <AccountCircleIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Profile
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <LoginIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Sign In
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <LogoutIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Sign Out
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
            <a href="/" className="flex ms-2 md:me-24">
              <span className="self-center text-xl font-extrabold sm:text-2xl whitespace-nowrap dark:text-white">
                Event Hunt
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  onClick={() => onClickPage("/dashboard/profile")}
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="w-10 h-10 rounded-full bg-cover object-cover"
                    src="/images/dara.jpg"
                    alt="user photo"
                    width={100}
                    height={8}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
