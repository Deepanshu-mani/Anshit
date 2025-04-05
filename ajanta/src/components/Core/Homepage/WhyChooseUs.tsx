import React from 'react';
import { motion } from "framer-motion";
import chooseUs from "../../../assets/chooseUs.jpg";
import Image from 'next/image';
const WhyChooseUs: React.FC = (): JSX.Element => {
  return (
    <>
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1600px] mx-auto p-4 md:p-8 mt-3 items-center">
      {/* Decorative Elements */}
      <div className="absolute -z-10 top-0 left-0 w-40 h-40 md:w-72 md:h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-60 h-60 md:w-96 md:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      {/* Text Section */}
      <motion.div
        className="choose-us flex flex-col justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-yellow-600/5 z-0"></div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-600 mb-6 relative z-10">
          Why Choose Us?
        </h2>

        <div className="relative z-10">
          <p className="text-gray-700 text-lg md:text-2xl lg:text-3xl leading-relaxed mb-4">
            We are committed to delivering top-notch quality, innovative designs, and exceptional customer service.
            Here’s why we stand out:
          </p>
          <ul className="text-gray-700 text-lg md:text-2xl lg:text-3xl space-y-4">
            <li className="flex items-center">
              <span className="text-green-600 text-3xl mr-3">✔</span> Premium-quality materials & craftsmanship
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-3xl mr-3">✔</span> Trendy & innovative designs
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-3xl mr-3">✔</span> Affordable pricing with high value
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-3xl mr-3">✔</span> Customer satisfaction is our top priority
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-3xl mr-3">✔</span> A diverse range of products for all needs
            </li>
          </ul>
        </div>

        {/* Optional: Animated Accent */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex justify-center p-4 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        {/* Decorative frame */}
        <div className="absolute inset-0 border-2 border-green-400/30 rounded-xl transform rotate-3 scale-105"></div>

        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={chooseUs}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover bg-center rounded-xl transition-all ease-in-out duration-500 transform hover:scale-110"
            alt="Why Choose Us"
          />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 transform translate-x-full hover:translate-x-[-180%] ease-in-out"></div>
        </div>
      </motion.div>
      
    </div>
    <div className="border-t-2 border-gray-300 my-4 md:my-6 lg:my-8 w-3/4 mx-auto"></div>
    </>
  );
}

export default WhyChooseUs;