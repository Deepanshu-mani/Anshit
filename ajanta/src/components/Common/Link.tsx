import React from "react";
import { MdLocalPhone, MdAlternateEmail } from "react-icons/md";

interface LinkItem {
  icon: JSX.Element;
  label: string;
  href: string;
}

const Link: React.FC = () => {
  const links: LinkItem[] = [
    {
      icon: <MdAlternateEmail />, 
      label: "Email Us", 
      href: "mailto:info@ajantabags.com", 
    },
    {
      icon: <MdLocalPhone />, 
      label: "Call Us", 
      href: "tel:+919358400185",
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 flex flex-col gap-4 font-Whitney z-50 items-end uppercase font-semibold text-white sm:right-2 sm:top-1/3 md:top-1/2">
      {links.map(({ icon, label, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full transition-all duration-300 ease-in-out cursor-pointer sm:gap-1 md:gap-2"
        >
          {/* Label with hover effect */}
          <p className="opacity-0 text-black text-lg translate-x-[20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out sm:text-lg md:text-xl sm:translate-x-[10px]">
            {label}
          </p>
          {/* Icon with hover effect */}
          <div className="p-2 text-xl border-2 text-black border-black rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300 ease-in-out md:text-3xl hover:scale-95 sm:p-2 sm:text-lg">
            {icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Link;