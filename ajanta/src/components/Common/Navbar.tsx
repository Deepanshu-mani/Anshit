import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact Us", id: "contact" }
  ];

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 flex items-center justify-between z-50 transition-all duration-500 ease-in-out px-6 ${
        isScrolled
          ? "w-[95%] sm:w-[85%] lg:w-[75%] mt-4 py-5 shadow-xl rounded-full bg-white/70 text-lg backdrop-blur-lg"
          : "w-full py-4 text-lg sm:px-12 md:px-20 lg:px-40 bg-white/30 backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 px-3 py-1 rounded">
          FUTURE
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex mt-2 space-x-6 sm:space-x-10 lg:space-x-16 text-gray-900 font-medium px-10">
        {menuItems.map(({ name, id }) => (
          <li key={id} className="relative group">
            <ScrollLink
              to={id}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#E21E25] transition-colors duration-300"
            >
              {name}
            </ScrollLink>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E21E25] transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-1"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden text-gray-900 transition-transform duration-300"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="absolute left-0 top-[55px] w-full bg-white shadow-lg rounded-lg py-6 px-6 text-center transition-transform duration-500"
          onClick={(e: React.MouseEvent) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <ul className="flex flex-col space-y-6 text-gray-900 font-bold text-lg">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-[#E21E25] transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;