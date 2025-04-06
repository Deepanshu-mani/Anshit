import React from 'react';
import { motion } from "framer-motion";
import chooseUs from "../../../assets/chooseUs.jpg";
import Image from 'next/image';

const WhyChooseUs: React.FC = (): JSX.Element => {
  return (
    <>
    <div className="border-t-2 border-gray-300 my-4 md:my-6 lg:my-8 w-[90%] mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80%] mx-auto p-4 md:p-8 mt-3 items-center ">
        
        {/* Text Section */}
        <motion.div
          className="choose-us flex flex-col justify-center p-6 relative overflow-hidden"
        >
          <h2 className="text-3xl lg:text-6xl md:text-5xl sm:text-3xl  font-extrabold text-black mb-8 relative z-10">
            Why Choose Us?
          </h2>

          <div className="relative z-10">
            <p className="text-black/80 lg:text-2xl md:text-xl md:leading-[1.5rem] lg:leading-[2rem] w-full mb-4 text-justify leading-relaxed col-span-2">
              We are committed to delivering top-notch quality, innovative designs, and exceptional customer service.
              Here’s why we stand out:
            </p>
            <ul className="text-black/80 lg:text-2xl md:text-xl md:leading-[1.5rem] lg:leading-[2rem] space-y-4">
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

        {/* Image Section */}
        <motion.div
          className="flex justify-center p-4 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={chooseUs}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover bg-center rounded-xl transition-all ease-in-out duration-500 transform hover:scale-110"
              alt="Why Choose Us"
            />
          </div>
        </motion.div>
      </div>

      <div className="border-t-2 border-gray-300 my-4 md:my-6 lg:my-8 w-[90%] mx-auto"></div>
    </>
  );
}

export default WhyChooseUs;