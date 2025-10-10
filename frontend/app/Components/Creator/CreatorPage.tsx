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
}: any) => {
  return (
    <>
      {activeTab === "create" && (
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
              Creator Mode
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8">
              Describe your vision. Cobra AI does the rest.
            </p>

            {/* Floating Particles - Hidden on mobile */}
            <div className="hidden lg:block relative">
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-emerald-400 rounded-full animate-float"></div>
              <div
                className="absolute -top-2 -right-4 w-2 h-2 bg-green-400 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-4 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Creator Zone */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-4 sm:p-6 lg:p-8 shadow-2xl">
            {/* Prompt Input */}
            <div className="mb-6 lg:mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Describe Your Website
              </label>
              <textarea
                value={websiteData.prompt}
                onChange={(e) =>
                  setWebsiteData({ ...websiteData, prompt: e.target.value })
                }
                placeholder="A modern portfolio for a freelance designer with dark theme, animated sections, and contact form..."
                className="w-full h-32 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none text-white placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
              {/* Website Name */}
              <div className="bg-gray-700/30 rounded-xl p-3 sm:p-4 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Website Name
                </label>
                <input
                  type="text"
                  value={websiteData.name}
                  onChange={(e) =>
                    setWebsiteData({ ...websiteData, name: e.target.value })
                  }
                  placeholder="My Awesome Site"
                  className="w-full px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                />
              </div>

              {/* Website Type */}
              <div className="bg-gray-700/30 rounded-xl p-3 sm:p-4 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Website Type
                </label>
                <select
                  value={websiteData.type}
                  onChange={(e) =>
                    setWebsiteData({ ...websiteData, type: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                >
                  {websiteTypes.map((type: any) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Theme */}
              <div className="bg-gray-700/30 rounded-xl p-3 sm:p-4 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Color Theme
                </label>
                <select
                  value={websiteData.theme}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      theme: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                >
                  {themes.map((theme: any) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={handleGenerate}
                disabled={!websiteData.prompt || isGenerating}
                className="relative w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>🪄 Generate Website</span>
                  {isGenerating && (
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                </span>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>

                {/* Light Ray Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-40 transition-all duration-1000"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatorPage;
