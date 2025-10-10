import React from "react";

const Loading = ({ isGenerating, websiteData }: any) => {
  return (
    <>
      {isGenerating && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="text-center max-w-2xl w-full">
            {/* Main Container */}
            <div className="relative">
              {/* Animated Orb Background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

              {/* Animated Snake with Circuit */}
              <div className="relative mb-8">
                <div className="relative inline-block">
                  {/* Circuit Board Effect */}
                  <div className="absolute -inset-4 border-2 border-emerald-400/30 rounded-full animate-ping-slow"></div>
                  <div className="absolute -inset-6 border border-emerald-400/20 rounded-full animate-pulse"></div>

                  {/* Main Snake */}
                  <div className="relative text-6xl sm:text-7xl mb-4 animate-bounce">
                    🐍
                  </div>

                  {/* Orbital Dots */}
                  <div className="absolute top-0 left-0 right-0 bottom-0">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-orbit"
                        style={{
                          animationDelay: `${i * 10}s`,
                          transformOrigin: `${
                            50 + 40 * Math.cos((i * 60 * Math.PI) / 180)
                          }% ${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <h3 className="text-2xl sm:text-3xl font-black mb-6 bg-gradient-to-r from-emerald-300 via-green-300 to-emerald-300 bg-clip-text text-transparent">
                Cobra AI is Building Your Website
              </h3>

              {/* Progress Steps Container */}
              <div className="relative mb-8">
                {/* Progress Line */}
                <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-emerald-400 to-green-500 animate-progress-line"></div>
                </div>

                {/* Steps */}
                <div className="space-y-6 text-left ml-16">
                  {[
                    {
                      id: 1,
                      text: "📋 Analyzing your requirements...",
                      duration: 2,
                    },
                    {
                      id: 2,
                      text: "📁 Creating project structure...",
                      duration: 4,
                    },
                    {
                      id: 3,
                      text: "🎨 Designing UI components...",
                      duration: 6,
                    },
                    {
                      id: 4,
                      text: "⚡ Writing React code...",
                      duration: 8,
                    },
                    {
                      id: 5,
                      text: "🎯 Adding animations...",
                      duration: 10,
                    },
                    {
                      id: 6,
                      text: "📱 Making it responsive...",
                      duration: 12,
                    },
                    {
                      id: 7,
                      text: "🔍 Testing functionality...",
                      duration: 14,
                    },
                    { id: 8, text: "✨ Final polishing...", duration: 16 },
                  ].map((step, index) => (
                    <div
                      key={step.id}
                      className="flex items-center space-x-4 opacity-0 animate-step-fade"
                      style={{ animationDelay: `${step.duration}s` }}
                    >
                      <div className="relative">
                        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center border-2 border-emerald-400/30">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="absolute inset-0 border-2 border-emerald-400 rounded-full animate-ping-slow"></div>
                      </div>
                      <span className="text-gray-300 font-medium text-sm sm:text-base animate-text-glow">
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-emerald-400 animate-count-up"
                    data-target="100"
                  >
                    0%
                  </div>
                  <div className="text-xs text-gray-400">Code Quality</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-green-400 animate-count-up"
                    data-target="100"
                  >
                    0%
                  </div>
                  <div className="text-xs text-gray-400">Performance</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-emerald-400 animate-count-up"
                    data-target="100"
                  >
                    0%
                  </div>
                  <div className="text-xs text-gray-400">Responsive</div>
                </div>
              </div>

              {/* Enhanced Progress Bar */}
              <div className="relative mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Starting...</span>
                  <span className="animate-pulse">Building in progress</span>
                  <span>Complete!</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 rounded-full animate-progress-expand relative">
                    {/* Progress Shine */}
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-progress-shine"></div>
                  </div>
                </div>
              </div>

              {/* Status Message */}
              <div className="text-gray-400 text-sm animate-pulse">
                <span className="inline-block animate-typing">
                  Crafting your {websiteData.type} website "{websiteData.name}"
                  with {websiteData.theme} theme...
                </span>
              </div>

              {/* Floating Code Elements */}
              <div className="absolute top-10 -left-10 text-xs text-emerald-400/50 font-mono animate-float-code">
                &lt;div className="container"&gt;
              </div>
              <div
                className="absolute top-20 -right-10 text-xs text-green-400/50 font-mono animate-float-code"
                style={{ animationDelay: "1s" }}
              >
                function App() {"{}"}
              </div>
              <div
                className="absolute bottom-20 -left-8 text-xs text-emerald-400/50 font-mono animate-float-code"
                style={{ animationDelay: "2s" }}
              >
                tailwind.config.js
              </div>
              <div
                className="absolute bottom-10 -right-8 text-xs text-green-400/50 font-mono animate-float-code"
                style={{ animationDelay: "3s" }}
              >
                useEffect(() =&gt; {"{}"}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
