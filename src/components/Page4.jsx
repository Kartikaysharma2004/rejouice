import React from "react";
import Card1img from "../images/card1img.avif";
import Card2img from "../images/card2img.avif";
import Card3img from "../images/card3img.avif";
import Card1video from "../videos/Card1video.mp4";
import Card2video from "../videos/Card2video.mp4";
import Card3video from "../videos/Card3video.mp4";

const Page4 = () => {
  const images = [
    { id: 1, img: Card1img, video: Card1video },
    { id: 2, img: Card2img, video: Card2video },
    { id: 3, img: Card3img, video: Card3video },
  ];

  return (
    <>
      <div className="page-4 mx-4 justify-between relative text-2xl max-sm:text-lg bottom-0 flex">
        <div>
          <h3>Highlights</h3>
        </div>
        <h3 className="cursor-pointer">See the work ↗</h3>
      </div>

      <div className="flex flex-row justify-center max-sm:justify-between overflow-x-scroll gap-4 max-sm:gap-2 px-2 py-2 max-sm:px-2 max-sm:py-5 scroll-smooth snap-x snap-mandatory hide-scrollbar">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="cards w-[27rem] max-sm:w-[21rem] h-[31rem] relative overflow-hidden group cursor-pointer flex-shrink-0 snap-center rounded-md mb-32"
            >
              <div className="absolute inset-0">
                <img
                  src={image.img}
                  alt={`Card${index + 1}img`}
                  className="h-full w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  loading="lazy"
                />
              </div>
              <video
                src={image.video}
                alt={`Card${index + 1}video`}
                className="h-full w-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                loading="lazy"
                autoPlay
                muted
                loop
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page4;
