import { motion } from "framer-motion";
import ScrollReveal from "../../animations/aboutUs/ScrollReveal";
import Image from "next/image";
import aboutUs from "../../../assets/aboutUs.png";

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1600px] mx-auto px-8 items-center">
        {/* Decorative elements */}
        <div className="absolute -z-10 top-10 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center p-4 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          {/* Decorative frame */}
          <div className="absolute inset-0 border-2 border-blue-400/30 rounded-xl transform rotate-3 scale-105"></div>

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
          className="about-us flex flex-col justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 z-0"></div>

          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6 relative z-10">
            About Us
          </h2>

          <div className="relative z-10">
            <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={5}>
              Ajanta Corporate Industry has over a decade of experience in the disposable salon and hygiene product
              industry. We provide waxing strips, disposable bedsheets, towels, tissues, cutting capes, gowns, and
              headbands to salons, home service providers, retailers, and export markets. Our focus is on delivering
              high-quality, affordable, and hygienic products that meet professional standards. With a commitment to
              reliability and customer satisfaction, we ensure timely delivery and excellent service, making us a trusted
              choice for businesses.
            </ScrollReveal>
          </div>

          {/* Optional: Animated accents */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </motion.div>
      </div>
      <div className="border-t-2 border-gray-300 my-8 max-w-[1600px] mx-auto w-full"></div>
    </div>
  );
};

export default AboutUs;