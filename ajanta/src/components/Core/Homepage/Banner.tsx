import React from "react";
import BannerImg from "../../../assets/bannerImg.jpg";
import GradientText from "../../animations/Banner/GradientText";
import Image from "next/image";

interface GradientTextProps {
  colors: string[];
  animationSpeed: number;
  showBorder: boolean;
  className?: string;
}

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src={BannerImg}
        alt="Banner"
        className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover object-center"
      />
      <div className="absolute inset-0 flex justify-center items-center text-4xl md:text-6xl lg:text-8xl font-bold">
        <GradientText
          colors={["#D6E5FF", "#B3D1FF", "#8FB8FF", "#6A9CFF", "#4D85FF"]}
          animationSpeed={10}
          showBorder={false}
          className="custom-class"
        >
          Ajanta Corporate Industry
        </GradientText>
      </div>
      <div className="border-t-2 border-gray-300 my-4 md:my-6 lg:my-8 w-3/4 mx-auto"></div>
    </div>
  );
};

export default Banner;