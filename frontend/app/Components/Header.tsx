import React from "react";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Navigation */}
      <header className="bg-gray-950/40 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Cobra AI 2.0
              </span>
            </div>

            <div className="hidden md:flex space-x-6">
              <button className="hover:text-emerald-400 transition-colors">
                Features
              </button>
              <button className="hover:text-emerald-400 transition-colors">
                Templates
              </button>
              <button className="hover:text-emerald-400 transition-colors">
                Documentation
              </button>
            </div>

            <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
