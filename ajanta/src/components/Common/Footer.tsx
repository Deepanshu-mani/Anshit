import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "@/assets/ACI.png"
import Image from "next/image";
const Footer: React.FC = () => {

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "About Us", id: "about" },
    { name: "Contact Us", id: "contact" }
  ];

  return (
    <footer className="relative bg-[#2C252A] text-white py-12 px-10 w-full mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">

        {/* Left Section - Company Info */}
        <div className="md:w-1/3">
        <Image src={logo} height={50} alt="Company Logo" className="filter invert brightness-0" />
          {/* Address */}
          <div className="flex items-start gap-3 mt-4">
            <FaMapMarkerAlt className="text-lg text-gray-400 mt-1" />
            <a
              href="https://www.google.com/maps/place/Ajanta+Bags/@28.9476046,77.6712132,899m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390c65e171a20095:0x30b27a8f33c10459!8m2!3d28.9475999!4d77.6737881!16s%2Fg%2F11jp009l_h?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all"
            >
              123, Tirupati Industrial Estate, Mohkampur, Meerut, UP
            </a>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3 mt-4">
            <FaClock className="text-lg text-gray-400" />
            <div>
              <p className="font-medium">Monday - Saturday</p>
              <p className="text-gray-300 text-sm">9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 mt-4">
            <FaPhoneAlt className="text-lg text-gray-400" />
            <a href="tel:+918630980579" className="text-gray-300 hover:text-white transition-all">
              +91 86309 80579
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mt-4">
            <FaEnvelope className="text-lg text-gray-400" />
            <a href="mailto:office@ajantacorporateindustry.com" className="text-gray-300 hover:text-white transition-all">
              office@ajantacorporateindustry.com
            </a>
          </div>
        </div>

        {/* Middle Section - Useful Links */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Other Links</h2>
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <span className="text-gray-400 group-hover:text-white transition-all">+</span>
                <a href={`#${item.id}`} className="text-gray-300 hover:text-white transition-all font-medium">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Google Map */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Ajanta Bags Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.990262140002!2d77.66920323986743!3d28.954978364518787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65e171a20095%3A0x30b27a8f33c10459!2sAjanta%20Bags!5e0!3m2!1sen!2sin!4v1743063313845!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="absolute left-0 w-full z-50 py-1 bg-[#E0E0E0] text-black text-center bottom-0">
        <p className="text-lg">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;