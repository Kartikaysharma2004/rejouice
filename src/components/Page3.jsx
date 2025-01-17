import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Page3 = () => {
  const Titleref = useRef();
  const leftref = useRef();
  const rightref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Titleref.current,
        {
          opacity: 0,
          filter: "blur(10px)",
          rotation: 10,
          y: 30,
        },
        {
          duration: 1.85,
          y: -10,
          filter: "blur(0px)",
          rotation: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: Titleref.current,
            start: "top 50%",
            end: "bottom 50%",
            markers: false,
            scrub: false,
            stagger: 0.2
          },
        }
      );
      gsap.fromTo(
        leftref.current,
        {
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          duration: 1.85,
          filter: "blur(0px)",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: Titleref.current,
            start: "top 30%",
            end: "bottom 50%",
            markers: false,
            scrub: false,
            stagger: 0.2
          },
        }
      );
      gsap.fromTo(
        rightref.current,
        {
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          duration: 1.85,
          filter: "blur(0px)",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: Titleref.current,
            start: "top 30%",
            end: "bottom 50%",
            markers: false,
            scrub: false,
            stagger: 0.2
          },
        }
      );
      return () => ctx.revert();
    });
  });

  return (
    <>
      <div className="page3 pb-16 pt-5 mx-20 max-md:mx-4 max-md:text-start">
        <h1 ref={Titleref} className="text-5xl max-sm:text-4xl">
          <span className="flex justify-center text-right max-md:text-start max-md:ml-0 ml-52">
            We blend the power of strategy, design,
          </span>
          and performance marketing to transform founders' visions into
          remarkable brands. See{" "}
          <span className="underline underline-offset-8 cursor-pointer decoration-2">
            our services.
          </span>
        </h1>
      </div>
      <hr className="mx-20 text-center" />

      <div className="subpage3 text-[#F4F4F4] px-20 max-md:px-0 mt-5 flex justify-around pb-40 relative text-xl max-md:text-lg max-sm:text-sm">
        <h1 ref={leftref} className="max-md:mb-10 max-sm:w-20"> Tomorrow's Brands, Today.</h1>

        <div ref={rightref} >
          <p className="w-96 max-sm:text-sm max-sm:w-56">
            We are not an agency. We are a growth accelerator. <br />
            <br /> Since 2013, we have been globally recognized for helping
            founders build market-defining brands that drive sustainable revenue
            and shape culture.
            <br />
            <br /> In 2023, we launched our Venture Model to further support
            founders.
            <br />
            <br /> We partner with five clients a year to give each one the
            focus and care they deserve.
          </p>

          <h3 className="underline underline-offset-4 cursor-pointer mt-5">
            Learn more ↗
          </h3>
        </div>
      </div>
    </>
  );
};

export default Page3;
