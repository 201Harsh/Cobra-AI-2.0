import React from "react";

const Loading = ({ isGenerating, websiteData }: any) => {
  return (
    <>
      {isGenerating && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="text-center w-full max-w-md lg:max-w-lg xl:max-w-2xl">
            {/* Main Container */}
            <div className="relative">
              {/* Animated Orb Background - Hidden on mobile */}
              <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 lg:w-64 xl:w-80 h-48 lg:h-64 xl:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

              {/* Animated Snake */}
              <div className="relative mb-4 lg:mb-6">
                <div className="relative inline-block">
                  {/* Circuit Board Effect - Hidden on mobile */}
                  <div className="hidden sm:block absolute -inset-3 lg:-inset-4 border-2 border-emerald-400/30 rounded-full animate-ping-slow"></div>

                  {/* Main Snake */}
                  <div className="relative text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-3 animate-bounce">
                    🐍
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black mb-3 lg:mb-4 bg-gradient-to-r from-emerald-300 via-green-300 to-emerald-300 bg-clip-text text-transparent px-2">
                Crafting Your Website
              </h3>

              {/* Time Estimation Banner */}
              <div className="mb-3 lg:mb-4 p-2 lg:p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg mx-2">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <p className="text-amber-300 text-xs lg:text-sm font-medium">
                    ⏱️ Can take 5-10 minutes for best quality
                  </p>
                </div>
              </div>

              {/* Progress Steps Container */}
              <div className="relative mb-3 lg:mb-4 max-h-48 lg:max-h-56 overflow-y-scroll scrollbar-hide">
                {/* Steps */}
                <div className="space-y-2 lg:space-y-3 grid grid-cols-2 items-center justify-between gap-2">
                  {[
                    {
                      id: 1,
                      text: "🧠 Analyzing requirements...",
                      duration: 2,
                    },
                    {
                      id: 2,
                      text: "📁 Creating structure...",
                      duration: 6,
                    },
                    {
                      id: 3,
                      text: "🎨 Designing UI...",
                      duration: 12,
                    },
                    {
                      id: 4,
                      text: "⚡ Writing code...",
                      duration: 20,
                    },
                    {
                      id: 5,
                      text: "✨ Adding animations...",
                      duration: 30,
                    },
                    {
                      id: 6,
                      text: "📱 Making responsive...",
                      duration: 35,
                    },
                    {
                      id: 7,
                      text: "🔍 Testing...",
                      duration: 38,
                    },
                    {
                      id: 8,
                      text: "🎯 Final polish...",
                      duration: 40,
                    },
                  ].map((step, index) => (
                    <div
                      key={step.id}
                      className="flex items-center space-x-2 lg:space-x-3 opacity-0 animate-step-fade mx-2"
                      style={{ animationDelay: `${step.duration}s` }}
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gray-700 rounded-full flex items-center justify-center border border-emerald-400/30">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <span className="text-gray-300 font-medium text-sm lg:text-lg flex-1 text-left">
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-3 lg:space-y-4 px-2">
                {/* Current Project Info */}
                <div className="bg-gray-800/50 rounded-lg p-3 border border-emerald-500/20">
                  <h4 className="text-emerald-400 font-semibold mb-2 text-sm lg:text-base text-center">
                    Current Project
                  </h4>
                  <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm lg:text-lg">
                    <div className="text-center sm:text-left">
                      <div className="text-gray-400">Website</div>
                      <div className="text-white font-medium truncate">
                        "{websiteData.name}"
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-gray-400">Type</div>
                      <div className="text-white font-medium capitalize">
                        {websiteData.type}
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-gray-400">Theme</div>
                      <div className="text-white font-medium capitalize">
                        {websiteData.theme}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/50">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Start</span>
                    <span className="animate-pulse">Building</span>
                    <span>Testing with Cobra AI 2.0 🤖</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-progress-expand relative">
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-progress-shine"></div>
                    </div>
                  </div>
                  <div className="text-amber-400 text-sm font-medium text-center mt-4">
                    ⏰ 2-5 minutes left
                  </div>
                </div>

                {/* Helpful Tips */}
                <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/50">
                  <h4 className="text-green-400 font-semibold mb-2 text-sm md:text-lg text-center">
                    💡 While You Wait
                  </h4>
                  <div className="flex justify-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <span>☕</span>
                      <span className="hidden xs:inline">Coffee</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📝</span>
                      <span className="hidden xs:inline">Plan</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>⚡</span>
                      <span className="hidden xs:inline">Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
