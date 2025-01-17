import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import { gsap } from "gsap";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true); // State to track loading
  const loaderRef = useRef(null); // Ref for the loader div

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5,
    });
  }, []);

  useEffect(() => {
    // GSAP Animation for the loader
    if (loading) {
      const tl = gsap.timeline();

      tl.from(loaderRef.current, {
        duration: 2.5,
        opacity: 1,
        ease: "power2.Out",
      }).call(() => setLoading(false)); // Set loading to false after animation
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        ref={loaderRef}
        className="loader h-screen w-full bg-white fixed flex items-center justify-center z-50"
      >
        <div className="stroke flex items-center justify-center h-screen w-10 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="stroke-animation"
          >
            <rect
              fill="#000000"
              stroke="#000000"
              strokeWidth="15"
              width="30"
              height="30"
              x="25"
              y="85"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2s"
                values="1;0;1"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4s"
              />
            </rect>
            <rect
              fill="#000000"
              stroke="#000000"
              strokeWidth="15"
              width="30"
              height="30"
              x="85"
              y="85"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2s"
                values="1;0;1"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2s"
              />
            </rect>
            <rect
              fill="#000000"
              stroke="#000000"
              strokeWidth="15"
              width="30"
              height="30"
              x="145"
              y="85"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2s"
                values="1;0;1"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0s"
              />
            </rect>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Footer/>
    </>
  );
};

export default App;
