import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  

  return (
    <>
      <div
        className="footer flex justify-between px-12 py-8 max-sm:px-6 max-sm:pt-4 max-sm:pb-8 text-sm bg-black z-10 relative"
        id="home"
      >
        <div className="flex gap-4">
          <h3 className="title text-4xl z-10 mt-1 max-sm:mt-3 max-sm:text-xl">
            Do it once. Do it right.
          </h3>
        </div>
        <ul className="list flex flex-col gap-2 pl-32 mt-1 max-md:hidden ">
          <li className="cursor-pointer hover:transition">Home</li>
          <li className="cursor-pointer hover:text-[#6C6C6C] hover:transition">
            Work
          </li>
          <li className="cursor-pointer hover:text-[#6C6C6C] hover:transition">
            About
            <i className="fa-solid fa-caret-down ml-1"></i>
          </li>
          <li className="cursor-pointer hover:text-[#6C6C6C] hover:transition">
            Services
          </li>
          <li className="cursor-pointer hover:text-[#6C6C6C] hover:transition">
            Contact
          </li>
        </ul>
        <div className="flex flex-col">
          <h2 className="h2 cursor-pointer z-10 mt-1 max-sm:text-xs max-sm:mt-3">
            Instagram <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
          </h2>
          <h2 className="h2 cursor-pointer z-10 mt-1 max-sm:text-xs max-sm:mt-3">
            LinkedIn <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
          </h2>
        </div>
      </div>

      <div
        className="flex justify-between px-12 py-8 max-sm:px-6 max-sm:pt-4 max-sm:pb-8 text-sm bg-black z-10 relative"
      >
        <div className="flex flex-col">
          <h2 className="title text-sm z-10 mt-1 max-sm:mt-3 max-sm:text-sm">
            New Business: <br />
            hello@rejouice.com
          </h2>
          <h1 className="text-sm mt-5 max-sm:text-xs">Sign up for our newsletter (No spam)</h1>
          <div>
          <input className="text-sm max-sm:text-xs mt-3 h-8 border border-t-0 border-l-0 border-r-0 border-white p-2 bg-transparent w-56 text-white focus:outline-none" type="email" name="email" id="email" placeholder="Email" required   />
          <FontAwesomeIcon icon={faArrowUp} className="rotate-90 cursor-pointer text-xs max-sm:hidden" />
          </div>
        </div>
        <div className="pl-72 max-sm:hidden">
          <h2 className="title text-sm z-10 mt-1 max-sm:mt-3 max-sm:text-xl">
            San Diego—USA <br />
            Paris—France
          </h2>
        </div>
        <div className="flex flex-col">
          <h2 className="h2 cursor-pointer z-10 mt-1 max-sm:text-xs max-sm:mt-3">
            Terms of use <br />
            ©13—25
          </h2>
        </div>
      </div>
      <div className="hero-content font-extrabold text-center relative">
          <h1
        
            className="text-[25vw] z-0 absolute left-1/2 -translate-x-1/2 -translate-y-[29%] cursor-default"
          >
            rejouice
          </h1>
        </div>
    </>
  );
};

export default Footer;
