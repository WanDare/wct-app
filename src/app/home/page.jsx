"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Feature from "../components/feature_card";
import Recentcard from "../components/recent_card";
import Peoplelove from "../components/people_love";
import Endfooter from "../components/end_widget";
import SearchButton from "../components/search_Button";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="text-white py-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/festival.jpg')" }}
      >
        <div className="container mx-auto text-center">
          <img
            className="h-100 w-100 mx-auto"
            src={"/images/EventHunt.svg"}
            alt=""
          />
          <div className="bg-white py-4 mx-48 rounded-lg drop-shadow-2xl">
            <ul
              className="flex flex-wrap font-bold gap-3 justify-center"
              style={{ color: "#4F4F4F" }}
            >
              <li>
                <button
                  className="flex flex-initial w-52 p-5 rounded-lg hover:text-black"
                  style={{ backgroundColor: "#EBEBEB" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Location
                </button>
              </li>
              <li>
                <button
                  className="flex flex-initial w-52 p-5 rounded-lg hover:text-black"
                  style={{ backgroundColor: "#EBEBEB" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  Date
                </button>
              </li>
              <li>
                <button
                  className="flex flex-initial w-52 p-5 rounded-lg hover:text-black"
                  style={{ backgroundColor: "#EBEBEB" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  Type
                </button>
              </li>
              <li>
                <button
                  className="flex flex-initial w-52 p-5 rounded-lg hover:text-black"
                  style={{ backgroundColor: "#EBEBEB" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Payment
                </button>
              </li>
              <SearchButton />
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 ">
        <div className="pb-12 px-4">
          <h1 className="text-lg font-bold">Feature event</h1>
          <p className="text-xs">
            Plan your perfect event with event destination, information and
            inspiration from us
          </p>
        </div>
        <Feature />
        <div className="pt-12 pb-5 px-4">
          <h1 className="text-lg font-bold">What’s happening this week</h1>
        </div>
        <Recentcard />
        <div className="pt-12 pb-5 px-4">
          <h1 className="text-lg font-bold">What’s people love</h1>
        </div>
        <Peoplelove />
        <div className="pt-12 pb-5 px-4">
          <Endfooter />
          <div className="text-center pt-10">
            <h1 className="text-xl p-2">Explore event with Event Finder</h1>
            <a href="#link" className="text-sm text-blue-500">
              Discover new places and experiences
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
