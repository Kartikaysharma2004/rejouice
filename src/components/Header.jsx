import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "../fonts/SuisseIntl-Light.woff2";
import "../fonts//SuisseIntl-Regular.woff2";
import { gsap } from "gsap";

const Header = () => {
  const Titleref = useRef();
  const Listref = useRef();
  const btnref = useRef();
  const headingref = useRef();
  const bottomref = useRef();
  const arrowref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.from(Titleref.current, {
        duration: 0.8,
        y: -10, // Slide down effect
        opacity: 0,
        filter: "blur(10px)", // Add blur effect
        ease: "power2.inOut", // Smooth easing
      });

      gsap.from(Listref.current.querySelectorAll("li"), {
        duration: 0.8,
        opacity: 0,
        filter: "blur(10px)",
        y: -50,
        ease: "power2.out",
        stagger: 0.2,
      });
      tl.from(btnref.current, {
        duration: 0.8,
        y: -50,
        filter: "blur(10px)",
        rotation: 10,
        opacity: 0,
      });
      gsap.from(headingref.current, {
        duration: 1.85,
        filter: "blur(10px)",
        opacity: 0,
        ease: "power2.out",
      });
      gsap.from(bottomref.current, {
        duration: 1.85,
        filter: "blur(10px)",
        y:50,
        opacity: 0,
        ease: "power2.out",
      });
      tl.from(arrowref.current, {
        duration: 1.85,
        filter: "blur(10px)",
        y:-50,
        opacity: 0,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  });

  return (
    <>
      <div className="page1 relative">
        <div
          className="flex justify-between px-8 py-8 max-sm:px-3 max-sm:pt-4 max-sm:pb-8 text-sm bg-black z-10 relative"
          id="home"
        >
          <div ref={Titleref} className="flex gap-4">
            <a href="index.html">
              <h1 className="title z-10 mt-1 max-sm:mt-3">
                The Growth Accelerator
              </h1>
            </a>
          </div>
          <ul ref={Listref} className="list flex gap-2 mt-1 max-md:hidden ">
            <li className="cursor-pointer text-[#6C6C6C] hover:text-white hover:transition">
              Home
            </li>
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
          <h2
            ref={btnref}
            className="h2 underline underline-offset-4 cursor-pointer z-10 mt-1 max-sm:text-xs max-sm:mt-3"
          >
            Let's talk{" "}
            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
          </h2>
        </div>

        <div className="hero-content font-extrabold text-center relative">
          <h1
            ref={headingref}
            className="text-[25vw] z-0 absolute left-1/2 -translate-x-1/2 -translate-y-[29%] cursor-default"
          >
            rejouice
          </h1>
        </div>
        <div ref={bottomref} className="page-1-bottom ml-10 max-sm:ml-3 absolute mb-[-26rem] max-sm:mb-[-28rem] max-sm:text-sm gap-10 max-sm:gap-6 bottom-0 flex">
          <h3>
            Strategy, Design, <br />
            and Performance.
          </h3>
          <h3>
            Two Engagement <br />
            Models: Cash or Equity.
          </h3>
        </div>
        <FontAwesomeIcon ref={arrowref}
          icon={faArrowDown}
          className="relative left-[95vw] max-sm:left-[90vw] top-[27rem] text-xs"
        />
      </div>
    </>
  );
};

export default Header;
