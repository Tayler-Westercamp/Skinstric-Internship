import { useEffect, useState } from "react";
import ArrowButton from "../assets/ArrowButton.png";
import { Link } from "react-router-dom";
import camera from "../assets/camera.png";
import gallery from "../assets/gallery.png";
import resultline from "../assets/resultline.png"

const Result = () => {
  return (
    <div className="flex items-center justify-center  h-[calc(100vh-64px)]">
      <div className="flex items-center justify-around w-[100vw]">
        <div className="absolute left-[32px] top-[86px]">
          <p className="roobert-font font-bold">TO START ANALYSIS</p>
        </div>
        <div className="w-[482px] h-[482px] flex items-center justify-center relative">
            <div className="absolute top-[140px] right-[138px]">
                <img src={resultline} alt="" className="rotate-180" />
            </div>
          <div className="absolute top-[125px] right-[-16px]">
            ALLOW A.I. <br /> TO SCAN YOUR FACE
          </div>
          <div className="w-[286.64px] h-[286.64px] border-2 border-dotted border-bluegray absolute rotate-45 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
          <div className="w-[314.28px] h-[314.28px] border-2 border-dotted border-bluegray-60 absolute rotate-45 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[340.75px] h-[340.75px] border-2 border-dotted border-bluegray-40 absolute rotate-45 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[136px] h-[136px] z-10">
            <Link to={'/'}>
          <img src={camera} alt="" className="w-full h-full hover:scale-105 transition-transform duration-300 cursor-pointer z-10" />
          </Link>
          </div>
          
          
        </div>
        <div className="w-[482px] h-[482px] flex items-center justify-center relative">
            <div className="absolute bottom-[135px] left-[145px]">
                <img src={resultline} alt="" />
            </div>
          <div className="absolute bottom-[100px] left-[12px] text-right">
            ALLOW A.I. <br /> ACCESS GALLERY
          </div>
          <div className="w-[286.64px] h-[286.64px] border-2 border-dotted border-bluegray absolute rotate-45 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
          <div className="w-[314.28px] h-[314.28px] border-2 border-dotted border-bluegray-60 absolute rotate-45 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[340.75px] h-[340.75px] border-2 border-dotted border-bluegray-40 absolute rotate-45 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[136px] h-[136px] z-10">
            <Link to={'/'}>
          <img src={gallery} alt="" className="w-full h-full hover:scale-105 transition-transform duration-300 cursor-pointer z-10" />
          </Link>
          </div>
        </div>
        <div className="flex justify-between items-center absolute bottom-[32px] left-[32px] w-[97px] h-[44px]">
          <Link to={"/testing"}>
            <div className="w-[44px] h-[44px]">
              <img
                src={ArrowButton}
                alt="Arrow button"
                className="w-full h-full object-cover transform -scale-x-100 hover:[transform:scale(1.10)_scaleX(-1)] transition-transform duration-300 cursor-pointer"
              />
            </div>
          </Link>

          <p className="roobert-font text-[14px]">BACK</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
