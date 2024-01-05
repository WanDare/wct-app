"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for styling
import {
  DangerousOutlined,
  Face2Outlined,
  Face3Outlined,
  MoreOutlined,
  SpeedOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import Footer from "../components/footer";
import NavbarSearch from "../components/navbar_search";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing option
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#92c7e5" }}>
      <NavbarSearch />
      {/* About us */}
      <section className="header-imgs">
        <div className="relative">
          <div className="w-full" data-aos="fade-in">
            <img
              className="w-full bg-no-repeat bg-center"
              src="images/team.jpg"
              alt="img1"
            />
          </div>
          <div className="absolute inset-0 flex top-[80%] justify-center">
            <div
              className="shadowed-image w-[70%] grid grid-flow-col"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="200"
            >
              <div className="h-full w-full px-5 lg:px-20 py-10 text-left flex flex-col justify-center bg-white rounded-l-xl">
                <h3 className="pb-8 font-bold text-4xl text-center">
                  About us?
                </h3>
                <p className="pb-8 ">
                  We are a group of student From Royale University of Phnom
                  Phenh who try to make a better and more facilitated platform
                  for everyone who love to navigate new events with just a snap
                  of time.
                </p>
                <p className=" text-center font-light pb-8">
                  Our goals is to make things easier for everyone!
                </p>
              </div>
              <div className="">
                <img
                  className="object-cover bg-center bg-cover h-full w-full rounded-r-xl"
                  src={"/images/ourwork.jpg"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why us */}
      <section className="container mx-auto mb-10 pt-96 px-3">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
          <div
            className="lg:w-1/2 lg:pr-8 lg:order-1 relative"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <div class="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
              <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Our service statistics
              </h2>
              <div class="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
                <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:p-6">
                    <dl>
                      <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                        Total free servers
                      </dt>
                      <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">
                        1.6M
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:p-6">
                    <dl>
                      <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                        Servers a month
                      </dt>
                      <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">
                        19.2K
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:p-6">
                    <dl>
                      <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                        Servers a week
                      </dt>
                      <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">
                        4.9K
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:p-6">
                    <dl>
                      <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                        Total users
                      </dt>
                      <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">
                        166.7K
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 lg:pl-32 flex flex-col justify-center lg:order-2"
            data-aos="fade-left"
          >
            <h3 className="pb-8 font-bold text-white text-4xl text-center lg:text-left">
              Why us?
            </h3>
            <div className="flex flex-col lg:flex-row justify-between text-white">
              <div className="lg:w-1/2">
                <div
                  className="py-8 px-5"
                  data-aos="fade-down"
                  data-aos-delay="700"
                >
                  <p className="pb-2 flex items-start">
                    <ThumbUpOutlined className="mr-2 mb-1 text-blue-600" />
                    Ultimate usage
                  </p>
                  <p className="font-light">We Provide a 100% free service</p>
                </div>
                <div
                  className="py-1 px-5"
                  data-aos="fade-down"
                  data-aos-delay="700"
                >
                  <p className="pb-2 flex items-start">
                    <MoreOutlined className="mr-2 mb-1 text-blue-600" />
                    Variety of event Categories
                  </p>
                  <p className="font-light">
                    There are more than 20 categories here
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div
                  className="py-8 px-5"
                  data-aos="fade-down"
                  data-aos-delay="900"
                >
                  <p className="pb-2 flex items-start">
                    <SpeedOutlined className="mr-2 mb-1 text-blue-600" />
                    Lightspeed target
                  </p>
                  <p className="font-light">
                    We know You love to filter your categories
                  </p>
                </div>
                <div
                  className="py-1 px-5"
                  data-aos="fade-down"
                  data-aos-delay="900"
                >
                  <p className="pb-2 flex items-start">
                    <DangerousOutlined className="mr-2 mb-1 text-blue-600" />
                    No distraction
                  </p>
                  <p className="font-light">
                    We know you are tired of social media
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* border */}
      <div className="border mx-44 rounded-3xl"></div>

      {/* our team */}
      <div className="container mx-auto pb-10">
        <h2 className="py-8 font-bold text-white text-4xl text-center">
          Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-5 text-black text-center">
          <figure
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-md bg-white rounded-lg"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <img
              className="rounded-t-lg h-80 w-full bg-cover bg-center"
              src="images/lykhim.jpg"
              alt=""
            />
            <div className="py-5 rounded-b-lg">Peng Lykhim</div>
          </figure>

          <figure
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-md bg-white rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              className="rounded-t-lg h-80 w-full bg-cover bg-center"
              src="images/dara.jpg"
              alt=""
            />
            <div className="py-5 rounded-b-lg">Neth Wandara</div>
          </figure>

          <figure
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-md bg-white rounded-lg"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <img
              className="rounded-t-lg h-80 w-full bg-cover bg-center"
              src="images/taliw.jpg"
              alt=""
            />
            <div className="py-5 rounded-b-lg">Phon Sreypherk</div>
          </figure>

          <figure
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-md bg-white rounded-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              className="rounded-t-lg h-80 w-full bg-cover bg-center"
              src="images/lay.jpg"
              alt=""
            />
            <div className="py-5 rounded-b-lg">Pann Senglay</div>
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
