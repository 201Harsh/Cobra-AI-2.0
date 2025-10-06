"use client";
import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFoundSVGPage() {
  return (
    <div className="min-h-screen bg-gray-950
     bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center">
        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            Oops! Page Not Found
          </h2>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            It looks like our explorers can't find this page either. The content
            you're looking for might have moved or doesn't exist.
          </p>

          {/* Single Action Button */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaHome />
              <span>Return to Homepage</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-500">
            <Link
              href="/features"
              className="hover:text-emerald-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/demo"
              className="hover:text-emerald-400 transition-colors"
            >
              Demo
            </Link>
            <Link
              href="/docs"
              className="hover:text-emerald-400 transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
