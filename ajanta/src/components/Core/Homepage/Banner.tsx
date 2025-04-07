import React, { useEffect, useState } from "react";
import Image from "next/image";
import bannerImg1 from "@/assets/banner1.jpg";
import bannerImg2 from "@/assets/banner2.jpg";

const banners = [
  {
    image: bannerImg1,
    title: "Empowering Hygiene & Comfort",
    subtitle: "One Disposable at a Time",
    description:
      "Explore premium-quality disposable products designed for salons, clinics, and wellness centers.",
    buttonText: "Explore Our Products",
    buttonLink: "#products",
  },
  {
    image: bannerImg2,
    title: "Your Partner in Professional Hygiene Supplies",
    subtitle: "Trusted by Top Salons & Healthcare Providers",
    description:"",
    buttonText: "Contact Us Now",
    buttonLink: "#contact",
  },
];

const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        setTransitioning(false);
      }, 500); // Should match transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChangeBanner = (index: number) => {
    if (index === currentBanner) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentBanner(index);
      setTransitioning(false);
    }, 500); // Should match transition duration
  };

  const { image, title, subtitle, description, buttonText, buttonLink } = banners[currentBanner];

  const handleClick = () => {
    const target = document.querySelector(buttonLink);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="relative lg:mt-10 mt-14 overflow-hidden">
      {/* Image Wrapper with slide effect */}
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          transitioning ? "" : "translate-x-0"
        }`}
      >
        {/* Current banner */}
        <div className="flex-shrink-0 w-full relative">
          <Image
            src={image}
            alt="Banner Background"
            className={`w-full h-[25vh] sm:h-[40vh] md:h-[70vh] lg:h-[90vh] object-center object-cover lg:mt-8 transition-opacity duration-700 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          {/* Text Content with animation */}
          <div className="absolute inset-0 flex flex-col justify-center items-start sm:text-left px-4 sm:px-6 md:px-20 lg:pt-10 pl-4">
            <div
              className={`w-[80%] transform transition-all duration-700 ${
                transitioning ? "-translate-x-10 opacity-0" : "translate-x-0 opacity-100"
              }`}
            >
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-1 w-full sm:w-[70%] md:w-[60%] leading-snug">
                {title.split(" & ").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
              <p className="w-full sm:w-[70%] sm:text-[20px] md:text-lg lg:text-3xl text-gray-700 mb-1 sm:mb-2 leading-relaxed">
                {subtitle}
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 w-[70%] sm:w-[70%] md:w-[50%] max-w-2xl mb-2 sm:mb-8 leading-relaxed">
                {description}
              </p>
              <button
  onClick={handleClick}
  className="bg-gray-800 text-white px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg hover:bg-gray-700 transition inline-block text-[10px] sm:text-xs md:text-sm mb-2"
>
  {buttonText}
</button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleChangeBanner(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentBanner ? "bg-gray-800" : "bg-gray-400"
            } transition-all duration-300 hover:bg-gray-600`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;