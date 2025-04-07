import React from 'react';
import { motion } from "framer-motion";
import chooseUs from "../../../assets/chooseUs.jpg";
import Image from 'next/image';

const WhyChooseUs: React.FC = (): JSX.Element => {
  return (
    <div>
      {/* Top Divider */}
      <div className="border-t-2 border-gray-300 my-8 w-[90%] mx-auto"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2  max-w-[1600px] mx-auto px-8 items-center">

        {/* Image Section */}
        <motion.div
          className="flex justify-center p-4 relative z-10 order-first md:order-last"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 scale-105"></div>

          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={chooseUs || "/placeholder.svg"}
              className="w-full md:max-w-md lg:max-w-lg object-cover bg-center rounded-xl transition-all ease-in-out duration-500 transform hover:scale-110"
              alt="Why Choose Us"
            />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 transform translate-x-full hover:translate-x-[-180%] ease-in-out"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="choose-us flex flex-col justify-center lg:ml-30 p-6 relative overflow-hidden order-last md:order-first"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold text-black mb-8 relative z-10">
            Why Choose Us?
          </h2>

          <div className="relative z-10">
            <p className="text-black opacity-85 lg:text-xl md:text-[18px] md:leading-[1.5rem] lg:leading-[2rem] w-full mb-4 text-justify leading-relaxed col-span-2">
              We are committed to delivering top-notch quality, innovative designs, and exceptional customer service.
              Here’s why we stand out:
            </p>
            <ul className="text-black/80 lg:text-xl md:text-xl md:leading-[1rem] lg:leading-[1.5rem] space-y-2">
              <li className="flex items-center">
                <span className="text-red-600 text-3xl mr-3">✔</span> Premium-quality materials & craftsmanship
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-3xl mr-3">✔</span> Trendy & innovative designs
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-3xl mr-3">✔</span> Affordable pricing with high value
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-3xl mr-3">✔</span> Customer satisfaction is our top priority
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-3xl mr-3">✔</span> A diverse range of products for all needs
              </li>
            </ul>
          </div>
        </motion.div>

      </div>

      {/* Bottom Divider */}
      <div className="border-t-2 border-gray-300 my-8 w-[90%] mx-auto"></div>
    </div>
  );
}

export default WhyChooseUs;