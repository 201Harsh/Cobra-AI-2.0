"use client";
import React, { useState, useEffect } from "react";
import {
  FaMagic,
  FaRobot,
  FaRocket,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaEdit,
  FaLaptopCode,
  FaUsers,
  FaLightbulb,
  FaBug,
  FaCloud,
  FaTerminal,
  FaArrowRight,
} from "react-icons/fa";

const HomePage = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name || "User");
  }, []);

  const creatorFeatures = [
    {
      icon: <FaMagic className="text-base" />,
      title: "AI Templates",
      description: "Choose from 100+ stunning AI-powered website templates.",
    },
    {
      icon: <FaRobot className="text-base" />,
      title: "Smart Content Generator",
      description:
        "Just enter your brand name — Cobra AI writes your site text for you.",
    },
    {
      icon: <FaRocket className="text-base" />,
      title: "SEO Optimized",
      description: "Cobra AI auto-optimizes your site for Google search.",
    },
    {
      icon: <FaCloudUploadAlt className="text-base" />,
      title: "One-Click Deployment",
      description:
        "Go live instantly with Cobra’s subdomain or your custom domain.",
    },
    {
      icon: <FaEdit className="text-base" />,
      title: "Live Editor",
      description: "Instantly preview and modify your site in real time.",
    },
    {
      icon: <FaShieldAlt className="text-base" />,
      title: "Secure Hosting",
      description: "All sites deployed with SSL and cloud backups.",
    },
  ];

  // 💻 For Developers
  const devFeatures = [
    {
      icon: <FaLaptopCode className="text-base" />,
      title: "AI Pair Programmer",
      description: "Real-time intelligent coding suggestions and completions.",
    },
    {
      icon: <FaUsers className="text-base" />,
      title: "Live Collaboration",
      description:
        "Work together with teammates using Yjs-powered real-time editor.",
    },
    {
      icon: <FaTerminal className="text-base" />,
      title: "In-Browser Compiler",
      description:
        "Run React, Node, Express, or Python code directly in your browser.",
    },
    {
      icon: <FaBug className="text-base" />,
      title: "AI Debugger",
      description: "Detects and fixes bugs instantly while coding.",
    },
    {
      icon: <FaLightbulb className="text-base" />,
      title: "Smart Refactor",
      description:
        "Suggests cleaner, optimized code alternatives automatically.",
    },
    {
      icon: <FaCloud className="text-base" />,
      title: "Instant Deployment",
      description: "Deploy your full-stack project to the cloud in seconds.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-4">
        {/* Welcome Section */}
        <section className="text-center mb-4 sm:mb-8 mt-4 sm:mt-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="xl:text-5xl text-4xl md:text-5xl font-bold mb-3 sm:mb-6">
              Hello,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                {userName || "User"}
              </span>
              <span className="inline-block ml-1 sm:ml-1">👋</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-8 px-2">
              Ready to create something amazing? Choose your mode.
            </p>
          </div>
        </section>

        {/* Mode Selection Section */}
        <section className="max-w-7xl mx-auto">
          {/* Mode Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            {/* Creator Mode Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border-2 border-emerald-500/30 p-3 sm:p-6 transition-all duration-300 hover:border-emerald-500/50 hover:scale-[1.01]">
              <div className="text-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 bg-gradient-to-r from-emerald-400 to-green-500 transition-all duration-300">
                  <FaMagic className="text-xl sm:text-2xl text-white" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-1">
                  Creator Mode
                </h2>
                <p className="text-emerald-400 font-semibold text-xs sm:text-sm">
                  For Non-Coders
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {creatorFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-1 bg-emerald-500/20 text-emerald-400 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm leading-tight mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-tight">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2 sm:mb-3 leading-tight">
                  Perfect for: Entrepreneurs, Creators
                </p>
                <button className="inline-flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg w-full justify-center">
                  <span>Launch Creator</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>

            {/* Dev Mode Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border-2 border-blue-500/30 p-3 sm:p-6 transition-all duration-300 hover:border-blue-500/50 hover:scale-[1.01]">
              <div className="text-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 bg-gradient-to-r from-blue-400 to-cyan-500 transition-all duration-300">
                  <FaLaptopCode className="text-xl sm:text-2xl text-white" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-1">Dev Mode</h2>
                <p className="text-blue-400 font-semibold text-xs sm:text-sm">
                  For Developers
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {devFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-1 bg-blue-500/20 text-blue-400 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm leading-tight mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-tight">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2 sm:mb-3 leading-tight">
                  Perfect for: Developers, Teams
                </p>
                <button className="inline-flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg w-full justify-center">
                  <span>Launch Dev</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
