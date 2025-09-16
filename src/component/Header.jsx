import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".header-nav",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1 ">
          <div className="flex items-center header-nav h-18 mt-12 overflow-visible">
            <img src={logo} alt="Logo" className="max-h-38 w-auto object-contain" />
          </div>

          <nav className="hidden md:flex items-center space-x-8 header-nav text-xl">
            <a
              href="#home"
              className="text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Services
            </a>
            <div className="relative group">
              <div className="relative group">
                <button className="text-gray-700 hover:text-red-700 transition-colors font-medium flex items-center">
                  Menu <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                  <a
                    href="#veg"
                    className="block text-lg px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Wedding Menu
                  </a>
                  <a
                    href="#nonveg"
                    className="block text-lg px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Anniversary Menu
                  </a>
                  <a
                    href="#desserts"
                    className="block text-lg px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Birthday Menu
                  </a>
                  <a
                    href="#drinks"
                    className="block text-lg px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Corporate Events
                  </a>
                  <a
                    href="#drinks"
                    className="block text-lg px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Special Occasions
                  </a>
                  <a
                    href="#drinks"
                    className="block  text-lg px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Seasonal Specials
                  </a>
                </div>
                
              </div>
            </div>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Gallery
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block header-nav">
            <button className="bg-red-800 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
              Book Now
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Contact
              </a>
              <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors w-fit">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
