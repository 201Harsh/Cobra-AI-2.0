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
                          animationDelay: `${i * 3}s`,
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
                Cobra AI is Crafting Your Website
              </h3>

              {/* Time Estimation Banner */}
              <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                  <p className="text-amber-300 text-sm font-medium">
                    ⏱️ This may take 10-15 minutes for best quality
                  </p>
                </div>
                <p className="text-amber-400/80 text-xs mt-2">
                  Cobra AI is carefully building every component with attention
                  to detail
                </p>
              </div>

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
                      text: "🧠 Analyzing your prompt and requirements...",
                      duration: 5,
                      time: "1-2 min",
                    },
                    {
                      id: 2,
                      text: "📁 Creating optimal project structure...",
                      duration: 30,
                      time: "2-3 min",
                    },
                    {
                      id: 3,
                      text: "🎨 Designing beautiful UI components...",
                      duration: 60,
                      time: "3-4 min",
                    },
                    {
                      id: 4,
                      text: "⚡ Writing clean React code...",
                      duration: 120,
                      time: "4-5 min",
                    },
                    {
                      id: 5,
                      text: "✨ Adding smooth animations...",
                      duration: 180,
                      time: "2-3 min",
                    },
                    {
                      id: 6,
                      text: "📱 Making it fully responsive...",
                      duration: 240,
                      time: "1-2 min",
                    },
                    {
                      id: 7,
                      text: "🔍 Testing all functionality...",
                      duration: 300,
                      time: "2-3 min",
                    },
                    {
                      id: 8,
                      text: "🎯 Final optimization and polishing...",
                      duration: 360,
                      time: "1-2 min",
                    },
                  ].map((step, index) => (
                    <div
                      key={step.id}
                      className="flex items-center justify-between opacity-0 animate-step-fade"
                      style={{ animationDelay: `${step.duration}s` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center border-2 border-emerald-400/30">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute inset-0 border-2 border-emerald-400 rounded-full animate-ping-slow"></div>
                        </div>
                        <div>
                          <span className="text-gray-300 font-medium text-sm sm:text-base animate-text-glow block">
                            {step.text}
                          </span>
                          <span className="text-emerald-400 text-xs">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Project Info */}
              <div className="bg-gray-800/50 rounded-xl p-4 mb-6 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">
                  Current Project
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Website:</span>
                    <p className="text-white font-medium">
                      "{websiteData.name}"
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-400">Type:</span>
                    <p className="text-white font-medium capitalize">
                      {websiteData.type}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-400">Theme:</span>
                    <p className="text-white font-medium capitalize">
                      {websiteData.theme}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Progress Bar */}
              <div className="relative mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Starting (0%)</span>
                  <span className="animate-pulse">Building (50%)</span>
                  <span>Complete (100%)</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 rounded-full animate-progress-expand relative">
                    {/* Progress Shine */}
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-progress-shine"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>~2 min</span>
                  <span>~8 min</span>
                  <span>~15 min</span>
                </div>
              </div>

              {/* Helpful Tips */}
              <div className="bg-gray-800/30 rounded-xl p-4 mb-6 border border-gray-600/50">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center justify-center space-x-2">
                  <span>💡</span>
                  <span>While You Wait</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span>☕</span>
                    <span>Grab a coffee or tea</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📝</span>
                    <span>Plan your next website</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🔧</span>
                    <span>Check your website settings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⚡</span>
                    <span>Quality takes time - worth the wait!</span>
                  </div>
                </div>
              </div>

              {/* Status Message */}
              <div className="text-gray-400 text-sm mb-4">
                <div className="animate-pulse">
                  <span className="text-emerald-400 font-semibold">
                    Status:
                  </span>{" "}
                  Crafting your {websiteData.type} website "{websiteData.name}"
                  with {websiteData.theme} theme...
                </div>
              </div>

              {/* Estimated Completion */}
              <div className="text-amber-400 text-sm font-medium mb-4">
                ⏰ Estimated completion: 10-15 minutes
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
