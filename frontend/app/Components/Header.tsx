"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Documentation", href: "/docs" },
    { label: "Demo", href: "/demo" },
  ];

  return (
    <>
      {/* Navigation */}
      <header className="bg-gray-950/20 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <Image
                  priority
                  src="/img/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent capitalize font-h1">
                Cobra AI 2.0
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-emerald-400 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                href={"/register"}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gray-950/50 backdrop-blur-lg transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col items-center justify-center transition-transform duration-500 ${
            isMenuOpen ? "translate-y-0" : "translate-y-8"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-gray-400 hover:text-emerald-400 transition-colors duration-300 p-2"
            aria-label="Close menu"
          >
            <FaTimes className="text-3xl" />
          </button>

          {/* Logo */}
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent capitalize">
              Cobra AI 2.0
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-8 w-full max-w-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-2xl font-semibold text-gray-300 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 py-2 px-6 w-full text-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-12 w-full max-w-sm px-6">
            <Link
              href="/register"
              onClick={closeMenu}
              className="block w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Get Started Free
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Build websites or code projects faster with AI
            </p>
          </div>
        </div>
      </div>

      {/* Prevent body scroll when menu is open */}
      <style jsx global>{`
        body {
          overflow: ${isMenuOpen ? "hidden" : "auto"};
        }
      `}</style>
    </>
  );
};

export default Header;
