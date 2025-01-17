import React, { useRef, useEffect } from "react";
import fullReel from "../videos/reel-full.mp4";
import shortReel from "../videos/reel-short-mobile.mp4";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Page2 = () => {
  const circleRef = useRef();
  const page2Ref = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(circleRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    const hideCursor = () => {
      gsap.to(circleRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const showCursor = () => {
      gsap.to(circleRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const page2Element = page2Ref.current;

    // Add mousemove event listener
    page2Element.addEventListener("mouseenter", showCursor);
    page2Element.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      page2Element.removeEventListener("mouseenter", showCursor);
      page2Element.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section>
      <div
        ref={circleRef}
        className="cursor z-50 bottom-40 ml-10 absolute h-2 w-24 text-center items-center flex pointer-events-none transition-transform duration-200 ease-out max-lg:hidden"
      >
        <FontAwesomeIcon icon={faPlay} className="mr-2 h-3" /> Play Reel
      </div>
      <div
        ref={page2Ref}
        className="page2 relative w-full bg-black mt-[29rem] pb-10"
      >
        <h1 className="absolute z-50 cursor-pointer text-6xl text-white max-sm:text-4xl max-sm:underline max-sm:underline-offset-8 max-sm:decoration-2 text-center left-1/2 -translate-x-1/2 -translate-y-[-12rem]">
          Showreel
        </h1>

        <video
          src={fullReel}
          muted
          autoPlay
          loop
          className="cursor-pointer opacity-80 object-cover w-full h-[71vh] max-sm:hidden"
        ></video>
        <video
          src={shortReel}
          muted
          autoPlay
          loop
          className="object-cover w-full h-[71vh] hidden max-sm:block"
        ></video>
      </div>
    </section>
  );
};

export default Page2;
