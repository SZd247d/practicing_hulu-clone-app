import { useRouter } from "next/dist/client/router";
import React from "react";
import requests from "~/utils/requests";

function Nav() {
  const router = useRouter();

  // const array = Object.entries(requests).map([key, { title, url }]);
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide  last:pr-24 justify-evenly ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="hover:scale-125 cursor-pointer transition transform duration-100 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
