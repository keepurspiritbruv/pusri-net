import React, { useState, useEffect } from "react";
import { Search, Bell, User, Menu } from "lucide-react";
import logo from "../assets/emblempusri.png";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-70 backdrop-blur-md"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img src={logo} alt="Pusri Logo" className="h-8 w-auto" />
            <h1 className="text-lg md:text-xl font-bold whitespace-nowrap">
              PT. Pupuk Sriwidjaja
            </h1>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md py-1 px-2 w-32 md:w-48 lg:w-64"
              />
              <Search
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                size={16}
              />
            </div>
            <Bell size={20} className="cursor-pointer" />
            <User size={20} className="cursor-pointer" />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col space-y-4 p-4">
              {/* Search Bar */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-md py-1 px-2 w-full"
                />
                <Search
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  size={16}
                />
              </div>
              <div className="flex items-center space-x-4">
                <Bell size={20} className="cursor-pointer" />
                <User size={20} className="cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
