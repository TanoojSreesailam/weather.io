import React from "react";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full h-full py-1 px-2">
      <div className=" flex  items-center justify-between px-5 py-2">
        <h1 className="font-bold p-2">weather app</h1>
        {/* <div className=" max-w-[300px] w-full">
          <input
            className="px-2 py-2 w-full"
            type="text"
            placeholder="Search Locations"
          />
        </div> */}
        <div className="flex items-center outline-1 outline-black">
          <span className="flex">
            <FaGithub />
          </span>
          <a
            href="https://github.com/TanoojSreesailam/weatherJS/blob/main/index.js"
            className="p-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
