"use client";
import React from "react";
import Link from "next/link";
import { FaHome, FaArrowLeft, FaExclamationCircle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white flex items-center justify-center p-4">
      <div className="max-w-lg mx-auto text-center">
        
        {/* Error Header */}
        <div className="mb-12">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
            <FaExclamationCircle className="text-red-400 text-3xl" />
          </div>
          
          <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-300">
            Oops! Page not found
          </h2>
          
          <p className="text-gray-400 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
          >
            <FaHome />
            <span>Return Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border border-emerald-500/30 hover:border-emerald-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-500/10 flex items-center justify-center space-x-3"
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>

        {/* Help Section */}
        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-emerald-400">Need Help?</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p>• Check the URL for typos</p>
            <p>• Visit our <Link href="/" className="text-emerald-400 hover:underline">homepage</Link></p>
            <p>• Browse our <Link href="/docs" className="text-emerald-400 hover:underline">documentation</Link></p>
            <p>• <Link href="/contact" className="text-emerald-400 hover:underline">Contact support</Link> if the problem persists</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;