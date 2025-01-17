import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Page7 = () => {
  const pararef = useRef();


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pararef.current,
        {
          y: 30,
          opacity: 0,
          filter: "blur(5px)",
        },

        {
          y: -10,
          duration: 1,
          filter: "blur(0px)",
          opacity: 1,
          scrollTrigger: {
            trigger: pararef.current,
            start: "top 15%",
            end: "bottom 20%",
            // markers: true,
            scrub: false,
          },
        }
      );
      

      return () => ctx.revert();
    });
  });

  return (
    <>
      <div className="page-7 pb-16 pt-20 px-20 max-md:px-4 max-md:text-start bg-white text-black">
        <h2 className="text-center text-5xl max-sm:text-4xl pb-32 max-sm:pb-24 underline underline-offset-4 decoration-2 cursor-pointer">
          Get to know us
        </h2>
        <h3 ref={pararef} className="text-5xl max-sm:text-4xl">
          <span className="flex justify-center text-right max-md:text-start max-md:ml-0 ml-52">
            We are a collective of seasoned creatives,
          </span>
          strategists, growth marketers, and technologists, dedicated to
          transforming ambitious visions into high-performing brands.{" "}
        </h3>
      </div>
    </>
  );
};

export default Page7;
