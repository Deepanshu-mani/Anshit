import React, { useEffect, useState } from "react";
import BannerImg from "../../../assets/bannerImg.jpg";
import Image from "next/image";
import logo from "@/assets/ACI.png";

const Banner: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = Math.max(0.5, 1 - scrollTop / 1000);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={BannerImg}
        alt="Banner"
        className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover object-center"
      />

      {/* Animated Gradient Logo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="relative w-full h-16 sm:w-full sm:h-20 md:w-full md:h-30 lg:w-full lg:h-60 transition-transform duration-300 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src={logo}
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;