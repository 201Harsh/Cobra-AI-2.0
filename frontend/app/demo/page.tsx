"use client";
import React, { useState } from "react";
import {
  FaCode,
  FaPlay,
  FaMagic,
  FaLaptopCode,
  FaUsers,
  FaRobot,
  FaRocket,
  FaArrowRight,
  FaChevronRight,
  FaCheck,
  FaRegClock,
  FaDownload,
  FaShieldAlt,
} from "react-icons/fa";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("Creator");
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const templates = [
    {
      id: 1,
      name: "E-commerce Store",
      type: "E-commerce",
      description: "AI-powered online store with product management",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Payment Integration",
        "Inventory Management",
      ],
      image: "/api/placeholder/400/250",
    },
    {
      id: 2,
      name: "Portfolio Website",
      type: "Portfolio",
      description: "Professional portfolio with dynamic content sections",
      features: [
        "Project Showcase",
        "About Section",
        "Contact Form",
        "Social Integration",
      ],
      image: "/api/placeholder/400/250",
    },
    {
      id: 3,
      name: "Blog Platform",
      type: "Blog",
      description: "Content-rich blog with AI writing assistance",
      features: [
        "Blog Posts",
        "Categories",
        "Search Function",
        "Comment System",
      ],
      image: "/api/placeholder/400/250",
    },
  ];

  const coderFeatures = [
    {
      title: "Real-time Collaboration",
      description: "Multiple users can code together with live synchronization",
      icon: <FaUsers className="text-xl" />,
    },
    {
      title: "AI Code Mentor",
      description: "Get instant code suggestions and explanations from AI",
      icon: <FaRobot className="text-xl" />,
    },
    {
      title: "Live Preview",
      description: "See your changes instantly with WebContainers technology",
      icon: <FaPlay className="text-xl" />,
    },
    {
      title: "Error Detection",
      description: "AI automatically detects and suggests fixes for errors",
      icon: <FaShieldAlt className="text-xl" />,
    },
  ];

  const beginnerSteps = [
    {
      step: 1,
      title: "Choose Template",
      description: "Select from professionally designed templates",
      icon: "🎨",
    },
    {
      step: 2,
      title: "Customize with AI",
      description: "AI automatically adapts content to your brand",
      icon: "🤖",
    },
    {
      step: 3,
      title: "Live Preview",
      description: "See your website come to life instantly",
      icon: "👀",
    },
    {
      step: 4,
      title: "Deploy",
      description: "One-click deployment to go live",
      icon: "🚀",
    },
  ];

  const demoStats = [
    { number: "2min", label: "Average website creation time" },
    { number: "50+", label: "Pre-built templates" },
    { number: "24/7", label: "AI assistance available" },
    { number: "1-Click", label: "Deployment process" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        {/* Hero Demo Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
              <FaPlay className="text-emerald-400" />
              <span className="text-sm">
                Live Demo - See Cobra AI 2.0 in Action
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Experience the Future of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Web Creation
              </span>
            </h1>

            <p className="md:text-xl text-lg text-gray-300 mb-8 leading-relaxed">
              Watch how{" "}
              <span className="font-bold text-emerald-400">Cobra AI 2.0</span>{" "}
              transforms ideas into fully functional websites and applications -
              whether you're a complete beginner or an experienced developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/register"
                className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <span>Try It Yourself - Free</span>
                <FaArrowRight />
              </Link>
              <button className="cursor-pointer border border-emerald-500/30 hover:border-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
                <FaDownload />
                <span>Download Case Study</span>
              </button>
            </div>
          </div>
        </section>

        {/* Mode Selector */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-2 mb-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setActiveTab("beginner")}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "beginner"
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <FaMagic />
                    <span>Creator Mode Demo</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("coder")}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "coder"
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <FaLaptopCode />
                    <span>Dev Mode Demo</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Beginner Mode Demo */}
        {activeTab === "beginner" && (
          <section className="container mx-auto px-6 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Demo Content */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold mb-4">
                      Create a Website in{" "}
                      <span className="text-emerald-400">2 Minutes</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                      No coding required. Just choose, customize, and deploy. AI
                      handles the technical details.
                    </p>
                  </div>

                  {/* Template Selection */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-4">
                      Choose Your Template
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {templates.map((template, index) => (
                        <div
                          key={template.id}
                          onClick={() => setSelectedTemplate(index)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            selectedTemplate === index
                              ? "border-emerald-500 bg-emerald-500/10"
                              : "border-gray-700 bg-gray-800/30 hover:border-emerald-500/30"
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                              {template.id}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg">
                                {template.name}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {template.description}
                              </p>
                            </div>
                            <FaChevronRight
                              className={`transition-transform ${
                                selectedTemplate === index
                                  ? "text-emerald-400 rotate-90"
                                  : "text-gray-400"
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selected Template Details */}
                  {templates[selectedTemplate] && (
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                      <h4 className="font-bold text-lg mb-3">
                        {templates[selectedTemplate].name} Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {templates[selectedTemplate].features.map(
                          (feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 text-sm text-emerald-300"
                            >
                              <FaCheck className="text-emerald-400" />
                              <span>{feature}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Demo Visual */}
                <div className="relative">
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-lg p-8 text-center">
                        <div className="text-6xl mb-4">🚀</div>
                        <h3 className="text-xl font-bold mb-2">Live Preview</h3>
                        <p className="text-gray-400">
                          Your {templates[selectedTemplate]?.name} is ready!
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
                          <div className="bg-gray-800/50 rounded p-2">
                            Brand Applied
                          </div>
                          <div className="bg-gray-800/50 rounded p-2">
                            AI Optimized
                          </div>
                          <div className="bg-gray-800/50 rounded p-2">
                            Mobile Ready
                          </div>
                          <div className="bg-gray-800/50 rounded p-2">
                            SEO Friendly
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Deploy Website Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="mt-20">
                <h3 className="text-3xl font-bold text-center mb-12">
                  How It Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {beginnerSteps.map((step) => (
                    <div key={step.step} className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        {step.icon}
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                        {step.step}
                      </div>
                      <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Coder Mode Demo */}
        {activeTab === "coder" && (
          <section className="container mx-auto px-6 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Code Editor Demo */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
                  <div className="bg-gray-900 px-4 py-3 border-b border-gray-700 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-400">app.jsx</div>
                    <div className="w-6 h-6"></div>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="text-gray-500 mb-4">
                      // AI Assistant: Writing React component...
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-blue-400">import</span> React{" "}
                        <span className="text-blue-400">from</span>{" "}
                        <span className="text-green-400">'react'</span>;
                      </div>
                      <div>
                        <span className="text-blue-400">import</span>{" "}
                        <span className="text-yellow-400">
                          {"{ AIAssistant }"}
                        </span>{" "}
                        <span className="text-blue-400">from</span>{" "}
                        <span className="text-green-400">'@cobra-ai/sdk'</span>;
                      </div>
                      <br />
                      <div>
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-yellow-400">App</span> = () =&gt;{" "}
                        {"{"}
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-400">return</span> (
                      </div>
                      <div className="ml-8">
                        &lt;<span className="text-red-400">div</span>{" "}
                        <span className="text-yellow-400">className</span>=
                        <span className="text-green-400">"app"</span>&gt;
                      </div>
                      <div className="ml-12">
                        &lt;<span className="text-red-400">AIAssistant</span>{" "}
                        /&gt;
                      </div>
                      <div className="ml-8">
                        &lt;/<span className="text-red-400">div</span>&gt;
                      </div>
                      <div className="ml-4">);</div>
                      <div>{"}"};</div>
                    </div>
                    <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <FaRobot className="text-emerald-400 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-emerald-400">
                            AI Suggestion
                          </div>
                          <div className="text-sm text-gray-300 mt-1">
                            I can help optimize this component. Would you like
                            me to add state management?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coder Features */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold mb-4">
                      Code with{" "}
                      <span className="text-emerald-400">AI Power</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                      Real-time collaboration, AI mentorship, and instant
                      deployment in one powerful workspace.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {coderFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-emerald-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-emerald-400">{feature.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg">
                              {feature.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                    <h4 className="font-bold text-lg mb-4">
                      Live Collaboration
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Online Users</span>
                        <span className="text-emerald-400">3</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI Suggestions</span>
                        <span className="text-emerald-400">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Code Changes</span>
                        <span className="text-emerald-400">47</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                {demoStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience It Yourself?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and creators building amazing
              projects with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <FaRocket />
                <span>Start Free Trial</span>
              </Link>
              <button className="cursor-pointer border border-emerald-500/30 hover:border-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
                <FaPlay />
                <span>Watch Full Demo Video</span>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Demo;
