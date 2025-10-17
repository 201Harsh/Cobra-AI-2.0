import React from "react";

const CreatorPage = ({
  activeTab,
  setActiveTab,
  websiteData,
  setWebsiteData,
  websiteTypes,
  themes,
  handleGenerate,
  isGenerating,
  userPlan,
  handleGeneratePro,
}: any) => {
  const isProUser =
    userPlan === "pro" || userPlan === "elite" || userPlan === "creator-plus";
  const isStarterUser = userPlan === "starter";

  // Function to handle the generate button click based on selected AI model
  const handleGenerateClick = () => {
    if (websiteData.aiModel === "venom-q12") {
      handleGeneratePro();
    } else {
      handleGenerate();
    }
  };

  // Determine button text based on selected model
  const getButtonText = () => {
    if (isGenerating) {
      return "Generating Magic...";
    }
    if (websiteData.aiModel === "venom-q12") {
      return "Generate Full Stack App";
    }
    return "Generate Website";
  };

  // Determine button icon based on selected model
  const getButtonIcon = () => {
    if (websiteData.aiModel === "venom-q12") {
      return "🚀";
    }
    return "⚡";
  };

  return (
    <>
      {activeTab === "create" && (
        <div className="w-full max-w-6xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center relative">
            {/* Animated Background Orb */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 mt-10">
              <div className="inline-flex items-center justify-center mb-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-lg opacity-15"></div>
                  <h1 className="relative text-3xl sm:text-4xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-emerald-300 via-green-300 to-emerald-300 bg-clip-text text-transparent  font-h uppercase">
                    Creator Mode
                  </h1>
                </div>
                <div className="ml-4 px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
                  <span className="text-xs font-semibold text-emerald-300">
                    BETA
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-md lg:text-lg font-inter text-gray-300 mb-2 max-w-3xl mx-auto leading-relaxed">
                Describe your vision in plain English. Watch{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent font-semibold">
                  Cobra AI
                </span>{" "}
                transform it into a stunning, fully-functional website
                instantly.
              </p>
            </div>
          </div>

          {/* Enhanced Creator Zone */}
          <div className="relative py-5">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-4xl blur-xl"></div>

            <div className="relative bg-gray-800/40 backdrop-blur-2xl rounded-3xl border border-emerald-500/30 p-5 sm:p-8 lg:p-12 shadow-2xl shadow-emerald-500/10">
              {/* Enhanced Prompt Input */}
              <div className="mb-8 lg:mb-12">
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-lg font-semibold text-gray-200">
                    🎯 Describe Your Website Vision
                  </label>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                    {websiteData.prompt.length}/5000
                  </span>
                </div>
                <div className="relative">
                  <textarea
                    value={websiteData.prompt}
                    onChange={(e) =>
                      setWebsiteData({ ...websiteData, prompt: e.target.value })
                    }
                    placeholder="A modern portfolio website with dark theme, animated sections, contact form, and project showcase. Include smooth animations and professional layout..."
                    className="w-full h-40 px-6 py-4 bg-gray-900/60 border-2 border-gray-600/50 rounded-2xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 transition-all duration-500 resize-none text-white scrollbar-small placeholder-gray-500 text-base leading-relaxed backdrop-blur-sm"
                    maxLength={5000}
                  />
                  {/* Input Decoration */}
                  <div className="absolute bottom-4 right-4 text-gray-500">
                    <div className="w-6 h-6 border-2 border-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-xs">✨</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  Be specific! The more details you provide, the better the
                  result.
                </p>
              </div>

              {/* AI Model Selection Card - Below Input */}
              <div className="mb-8">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-500">
                    {/* Section Heading */}
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                        Choose Your AI Model
                      </h2>
                      <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                        Select the perfect AI engine for your project. Each
                        model is optimized for different use cases and delivers
                        production-ready code.
                      </p>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-400 text-lg">🤖</span>
                        </div>
                        <div>
                          <label className="block text-lg font-semibold text-gray-200">
                            Cobra AI Engine
                          </label>
                          <p className="text-xs text-gray-400">
                            Choose your AI engine for website generation
                          </p>
                        </div>
                      </div>
                      {isProUser && (
                        <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-400/30">
                          PRO ACCESS
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Cobra Rift v2.7 Card */}
                      <div
                        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          websiteData.aiModel === "cobra-rift-v2.7"
                            ? "border-emerald-500 bg-emerald-500/10"
                            : "border-gray-600/50 bg-gray-800/50 hover:border-gray-500"
                        }`}
                        onClick={() =>
                          setWebsiteData({
                            ...websiteData,
                            aiModel: "cobra-rift-v2.7",
                          })
                        }
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-2">
                                <span className="text-emerald-400 text-sm">
                                  ⚡
                                </span>
                              </div>
                              <h3 className="font-semibold text-gray-200">
                                Cobra Rift v2.7
                              </h3>
                            </div>
                            <p className="text-xs text-gray-400 mb-3">
                              Standard AI Model
                            </p>
                            <div className="space-y-1">
                              <div className="flex items-center text-xs text-gray-400">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                                React.js + Tailwind CSS
                              </div>
                              <div className="flex items-center text-xs text-gray-400">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                                Best Performance and Speed
                              </div>
                              <div className="flex items-center text-xs text-gray-400">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                                Framer Motion Animations
                              </div>
                              <div className="flex items-center text-xs text-gray-400">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                                Production Ready Frontend
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-emerald-500">
                            {websiteData.aiModel === "cobra-rift-v2.7" && (
                              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Venom Q12 Card */}
                      <div
                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                          websiteData.aiModel === "venom-q12"
                            ? "border-purple-500 bg-purple-500/10"
                            : isProUser
                            ? "border-gray-600/50 bg-gray-800/50 hover:border-gray-500 cursor-pointer"
                            : "border-gray-600/30 bg-gray-800/30 opacity-60 cursor-not-allowed"
                        }`}
                        onClick={() => {
                          if (isProUser) {
                            setWebsiteData({
                              ...websiteData,
                              aiModel: "venom-q12",
                            });
                          }
                        }}
                      >
                        {!isProUser && (
                          <div className="absolute inset-0 bg-gray-900/50 rounded-xl flex items-center justify-center z-10">
                            <span className="text-xs text-yellow-400 bg-red-500/70 px-2 py-1 rounded-full border border-red-400/30">
                              Coming Soon...
                            </span>
                          </div>
                        )}
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-2">
                                <span className="text-red-400 text-sm">🚀</span>
                              </div>
                              <h3 className="font-semibold text-gray-200">
                                Venom Q12
                              </h3>
                            </div>
                            <p className="text-xs text-gray-400 mb-3">
                              Advanced AI Model
                            </p>
                            <div className="space-y-1">
                              <div className="flex items-center text-xs text-gray-400">
                                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                Full Stack Applications
                              </div>
                              <div className="flex items-center text-xs text-gray-400">
                                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                Backend API + Database
                              </div>
                              <div className="flex items-center text-xs text-gray-400">
                                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                Complete Web Solutions
                              </div>
                              <div className="flex items-center text-xs text-gray-400">
                                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                Production Ready Deployment
                              </div>
                            </div>
                          </div>
                          <div
                            className={`flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                              isProUser ? "border-red-500" : "border-gray-500"
                            }`}
                          >
                            {websiteData.aiModel === "venom-q12" && (
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Model Description */}
                    <div className="mt-4 p-3 bg-gray-900/50 rounded-lg border border-gray-600/30">
                      <p className="text-sm text-gray-300">
                        {websiteData.aiModel === "venom-q12"
                          ? "🚀 Venom Q12: Advanced full-stack AI model that creates complete web applications with backend APIs, databases, and production-ready deployment setup."
                          : "⚡ Cobra Rift v2.7: Powerful frontend-focused AI model that generates stunning, animated React.js websites with Tailwind CSS and Framer Motion."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Optional Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {/* Website Name Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-xl p-5 border border-gray-600/30 group-hover:border-emerald-400/50 transition-all duration-500">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-emerald-400 text-sm">🏷️</span>
                      </div>
                      <label className="block text-sm font-semibold text-gray-200">
                        Website Name
                      </label>
                    </div>
                    <input
                      type="text"
                      value={websiteData.name}
                      onChange={(e) =>
                        setWebsiteData({ ...websiteData, name: e.target.value })
                      }
                      placeholder="Website Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600/50 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-white placeholder-gray-500 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Website Type Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-xl p-5 border border-gray-600/30 group-hover:border-emerald-400/50 transition-all duration-500">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-emerald-400 text-sm">🌐</span>
                      </div>
                      <label className="block text-sm font-semibold text-gray-200">
                        Website Type
                      </label>
                    </div>
                    <select
                      value={websiteData.type}
                      onChange={(e) =>
                        setWebsiteData({ ...websiteData, type: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600/50 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm font-medium appearance-none cursor-pointer"
                    >
                      {websiteTypes.map((type: any) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Color Theme Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-xl p-5 border border-gray-600/30 group-hover:border-emerald-400/50 transition-all duration-500">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-emerald-400 text-sm">🎨</span>
                      </div>
                      <label className="block text-sm font-semibold text-gray-200">
                        Color Theme
                      </label>
                    </div>
                    <select
                      value={websiteData.theme}
                      onChange={(e) =>
                        setWebsiteData({
                          ...websiteData,
                          theme: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600/50 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm font-medium appearance-none cursor-pointer"
                    >
                      {themes.map((theme: any) => (
                        <option key={theme.value} value={theme.value}>
                          {theme.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Enhanced Generate Button */}
              <div className="text-center relative">
                {/* Connection Lines */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-px h-8 bg-gradient-to-b from-emerald-400/50 to-transparent"></div>

                <button
                  onClick={handleGenerateClick}
                  disabled={
                    !websiteData.prompt ||
                    !websiteData.name ||
                    !websiteData.type ||
                    !websiteData.theme ||
                    isGenerating
                  }
                  className={`relative w-full max-w-md cursor-pointer px-8 sm:px-16 py-4 sm:py-6 rounded-2xl font-black text-white text-lg sm:text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group overflow-hidden ${
                    websiteData.aiModel === "venom-q12"
                      ? "bg-gradient-to-r from-red-500 via-purple-500 to-red-600 hover:shadow-red-500/40"
                      : "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:shadow-emerald-500/40"
                  }`}
                >
                  {/* Main Content */}
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span className="text-xl">{getButtonIcon()}</span>
                    <span>{getButtonText()}</span>
                    {isGenerating && (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                  </span>

                  {/* Enhanced Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75 ${
                      websiteData.aiModel === "venom-q12"
                        ? "bg-gradient-to-r from-red-500 via-purple-500 to-red-600"
                        : "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600"
                    }`}
                  ></div>

                  {/* Animated Light Rays */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute -inset-20 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-40 transition-all duration-1000"></div>
                  </div>

                  {/* Particle Burst on Hover */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-burst"
                        style={{
                          left: "50%",
                          top: "50%",
                          animationDelay: `${i * 0.1}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Border Animation */}
                  <div
                    className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm ${
                      websiteData.aiModel === "venom-q12"
                        ? "bg-gradient-to-r from-red-400 via-purple-400 to-red-400"
                        : "bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400"
                    }`}
                  ></div>
                </button>

                {/* Status Message */}
                <p className="text-sm text-gray-400 mt-4">
                  {!websiteData.prompt
                    ? "✨ Describe your vision to begin magic..."
                    : websiteData.aiModel === "venom-q12"
                    ? "🚀 Ready to create a full-stack application!"
                    : "🎉 Ready to create something amazing!"}
                </p>
              </div>

              {/* Quick Tips */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <span>⚡</span>
                  <span>Instant Generation</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <span>🎨</span>
                  <span>Fully Customizable</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <span>🚀</span>
                  <span>Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatorPage;
