import React from "react";
import image1 from "../images/Z0cAypbqstJ970Cs_Frame1073714684.svg";
import image2 from "../images/Z2AzvpbqstJ98jdY_fwa-logo.svg";
import image3 from "../images/Z2E1SJbqstJ98lgU_Awwards-logotype-2018.svg";
import image4 from "../images/Z2FkCZbqstJ98mFM_Behance.svg";
import image5 from "../images/Z2FkFZbqstJ98mFO_Webby-Awards-Logo1.svg";
import image6 from "../images/Z2Lo5ZbqstJ98pLj_HYPERFRAME.svg";
import image7 from "../images/Z2LlrpbqstJ98pJz_RAPPI.svg";
import image8 from "../images/Z2HXc5bqstJ98naA_Proof.svg";

const Page5 = () => {
  return (
    <>
      <div className="bg-white h-96 w-full">
        <div className="relative overflow-hidden max-sm:h-64" id="Partners">
          <div className="flex items-center justify-center inset-0 z-50 mt-32 max-sm:mt-24 slide-animation">
            <img className="w-32 h-auto mx-6" src={image1} alt="Swiggy-Logo" />
            <img className="w-32 h-auto mx-6" src={image2} alt="Zomato-logo" />
            <img
              className="w-32 h-auto mx-6"
              src={image3}
              alt="deliveroo-logo"
            />
            <img
              className="w-32 h-auto mx-6"
              src={image4}
              alt="Delivery-Hero-Logo"
            />
            <img
              className="w-32 h-auto mx-6"
              src={image5}
              alt="Foodpanda-Logo"
            />
            <img className="w-32 h-auto mx-6" src={image6} alt="Blinkit-Logo" />
            <img className="w-20 h-auto mx-6" src={image7} alt="Dominos-Logo" />
            <img className="w-20 h-auto mx-6" src={image8} alt="Glovo_logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
