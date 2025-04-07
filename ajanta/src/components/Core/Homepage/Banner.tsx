import React, { useEffect, useState } from "react";
import Image from "next/image";
import bannerImg1 from "@/assets/banner1.png";

const Banner: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={bannerImg1}
        alt="Banner Background"
        className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] object-cover object-center"
        priority
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start sm:items-start sm:text-left px-4 sm:px-6 md:px-20">
        <div className="w-[60%]">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 mb-4 w-full sm:w-[70%] md:w-[60%] leading-snug">
            Empowering <br /> Hygiene & Comfort
          </h1>
          <p className="text-lg w-full sm:w-[70%] sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            One Disposable at a Time
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 w-full sm:w-[70%] md:w-[50%] max-w-2xl mb-6 sm:mb-8 leading-relaxed">
            Explore premium-quality disposable products designed for salons,
            clinics, and wellness centers.
          </p>
          <a
            href="#products"
            onClick={() => {
              const target = document.querySelector("#products");
              if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
              }
            }}
            className="bg-gray-800 text-white px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg hover:bg-gray-700 transition inline-block text-xs sm:text-sm md:text-base"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
