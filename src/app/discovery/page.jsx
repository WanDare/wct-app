import React from "react";
import Footer from "../components/footer";
import "aos/dist/aos.css";
import NavbarSearch from "../components/navbar_search";
import Image from "next/image";
import Forum from "../components/contact_forum";

export default function Discovery() {
  return (
    <div>
      <NavbarSearch />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/gatherteam.jpg"
          alt=""
          width={"900"}
          height={"100"}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="container mx-auto pb-16"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="mx-auto max-w-2xl lg:mx-0 px-5">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in touch with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ever have a question that just begs to be asked? We're here for
              you!
              <br />
              Unleash your curiosity, let's embark on a journey of discovery!
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="px-5">
          <Forum />
        </div>
      </div>
      <Footer />
    </div>
  );
}
