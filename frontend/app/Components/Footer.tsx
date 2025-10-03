import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-16 h-16 rounded flex items-center justify-center">
              <Image
                priority
                src="/img/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold">Cobra AI 2.0</span>
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cobra AI 2.0. Built with ❤️ by{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/201harshs/"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Harsh Pandey
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
