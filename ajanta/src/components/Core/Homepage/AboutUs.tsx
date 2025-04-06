import { motion } from "framer-motion";
import Image from "next/image";
import aboutUs from "../../../assets/aboutUs.jpg";

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-[1600px] mx-auto px-8 items-center">

        {/* Image Section */}
        <motion.div
          className="flex justify-center p-4 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          {/* Decorative frame */}
          <div className="absolute inset-0 scale-105"></div>

          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={aboutUs || "/placeholder.svg"}
              className="w-full md:max-w-md lg:max-w-lg object-cover bg-center rounded-xl transition-all ease-in-out duration-500 transform hover:scale-110"
              alt="About Us"
            />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 transform translate-x-full hover:translate-x-[-180%] ease-in-out"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="about-us flex lg:mr-30 flex-col justify-center p-6 relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold bg-clip-text text-black mb-6 relative z-10">
            About Us
          </h2>

          <div className="relative z-10 text-black opacity-85 text-justify lg:text-xl md:text-[18px] md:leading-[1rem] lg:leading-[1.5rem leading-relaxed w-full">
            Ajanta Corporate Industry has over a decade of experience in the disposable salon and hygiene product
            industry. We provide waxing strips, disposable bedsheets, towels, tissues, cutting capes, gowns, and
            headbands to salons, home service providers, retailers, and export markets. Our focus is on delivering
            high-quality, affordable, and hygienic products that meet professional standards. With a commitment to
            reliability and customer satisfaction, we ensure timely delivery and excellent service, making us a trusted
            choice for businesses.
          </div>
        </motion.div>
      </div>
      <div className="border-t-2 border-gray-300 my-8 max-w-[90%] mx-auto w-full"></div>
    </div>
  );
};

export default AboutUs;