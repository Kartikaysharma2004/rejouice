import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import video from "../videos/endvideo.mp4";

const Page6 = () => {
  const Titleref = useRef();
  const firstleftref = useRef();
  const firstrightref = useRef();
  const secondleftref = useRef();
  const secondrightref = useRef();
  const videoref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Titleref.current,
        {
          opacity: 0,
          filter: "blur(5px)",
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
            stagger: 0.2,
          },
        }
      );
      gsap.fromTo(
        firstleftref.current,
        {
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          duration: 1.85,
          filter: "blur(0px)",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: firstleftref.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
      gsap.fromTo(
        firstrightref.current,
        {
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          duration: 1.85,
          filter: "blur(0px)",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: firstrightref.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
      gsap.fromTo(
        secondleftref.current,
        {
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          duration: 1.85,
          filter: "blur(0px)",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondleftref.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
      gsap.fromTo(
        secondrightref.current,
        {
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          duration: 1.85,
          filter: "blur(0px)",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondrightref.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
      gsap.fromTo(
        videoref.current,
        {
          paddingLeft: "16rem",
          paddingRight: "16rem",
        },

        {
          duration: 2,
          paddingLeft: "8rem",
          paddingRight: "8rem",
          scrollTrigger: {
            trigger: videoref.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
      return () => ctx.revert();
    });
  });

  return (
    <>
      <div className="page-6">
        <div className="bg-white text-black px-20 max-md:px-5">
          <h3
            ref={Titleref}
            className="text-6xl pb-24 max-sm:pb-16 max-sm:text-3xl"
          >
            Our approach.
          </h3>
          <hr />
        </div>
        <div className="bg-white text-black flex justify-between px-24 max-sm:px-4 pb-8 pt-10 relative text-xl max-md:text-[1rem]">
          <h3 ref={firstleftref}>
            A simple philosophy. <br />
            Quality over quantity.
          </h3>

          <div ref={firstrightref}>
            <p className="w-96 max-sm:text-[1rem] max-sm:w-56">
              We partner with only five clients a year, focusing our expertise
              on their success. Every detail is crafted, every decision
              strategic, and every outcome transformative. We don’t do volume.
              We build brands that set new benchmarks.
            </p>
          </div>
        </div>
        <hr />
        <div className="bg-white text-black flex justify-between px-24 max-sm:px-4 pb-8 pt-10 relative text-xl max-md:text-[1rem]">
          <h3 ref={secondleftref}>
            Performance & emotion. <br />
            You need both.
          </h3>

          <div ref={secondrightref}>
            <p className="w-96 max-sm:text-[1rem] max-sm:w-56">
              Data is vital, yet fostering an emotional connection with your
              audience is just as critical to drive retention and advocacy.
              That’s why we create brands that not only captivate but also
              deliver measurable and sustainable growth.
            </p>
          </div>
        </div>
        <div ref={videoref} className="pt-16 max-sm:hidden bg-white justify-center flex">
          <video src={video} autoPlay muted loop></video>
        </div>
      </div>
    </>
  );
};

export default Page6;
