import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        {/* Main Container */}
        <div className="relative">
          {/* Simple Animated Border */}
          <div className="absolute -inset-4 border-2 border-emerald-400/20 rounded-2xl animate-pulse"></div>

          {/* Central Logo */}
          <div className="relative mb-6">
            <div className="inline-block p-4 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl border border-emerald-400/30">
              <div className="text-4xl">🐍</div>
            </div>
          </div>

          {/* Main Title */}
          <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
            Compiling Your Website
          </h3>

          {/* Compilation Steps */}
          <div className="space-y-3 mb-6">
            {[
              {
                id: 1,
                text: "⚡ Compiling React components...",
                delay: 0.5,
              },
              {
                id: 2,
                text: "🎨 Processing Tailwind styles...",
                delay: 1.5,
              },
              {
                id: 3,
                text: "🔧 Bundling dependencies...",
                delay: 2.5,
              },
              {
                id: 4,
                text: "🚀 Starting development server...",
                delay: 3.5,
              },
              {
                id: 5,
                text: "🌐 Launching live preview...",
                delay: 4.5,
              },
            ].map((step, index) => (
              <div
                key={step.id}
                className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${step.delay}s` }}
              >
                <span className="text-sm text-gray-300">{step.text}</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Live Preview Status */}
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-sm font-semibold">
                Live Preview Starting...
              </span>
            </div>
            <p className="text-emerald-400/80 text-xs">
              Your website will be ready instantly after compilation
            </p>
          </div>

          {/* Compilation Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Compiling</span>
              <span className="animate-pulse">Building</span>
              <span>Live</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-1.5 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Status Message */}
          <div className="text-gray-400 text-sm animate-pulse mb-4">
            Almost ready to launch your live website...
          </div>

          {/* Terminal-style Output */}
          <div className="bg-black/50 rounded-lg p-3 border border-gray-700/50 mb-4">
            <div className="text-left font-mono text-xs text-green-400 space-y-1">
              {/* Line 1 - Immediate */}
              <div className="flex items-center space-x-2 animate-fadeIn">
                <span className="text-gray-400">$</span>
                <span>npm run build</span>
              </div>

              {/* Line 2 - After 2 seconds */}
              <div className="text-gray-400 animate-fadeIn animation-delay-2000">
                {">"} Building optimized bundles...
              </div>

              {/* Line 3 - After 4 seconds */}
              <div className="text-gray-400 animate-fadeIn animation-delay-4000">
                {">"} Compiled successfully!
              </div>

              {/* Line 4 - After 6 seconds */}
              <div className="text-sky-400 animate-fadeIn animation-delay-6000">
                {">"} Installing dependencies...
              </div>

              {/* Line 5 - After 8 seconds */}
              <div className="text-emerald-400 animate-fadeIn animation-delay-8000">
                {">"} Live server starting...
              </div>

              {/* Line 6 - After 10 seconds */}
              <div className="text-green-400 animate-fadeIn animation-delay-10000 font-semibold">
                {">"} Live server running on http://localhost:3000
              </div>

              {/* Line 7 - After 12 seconds */}
              <div className="text-emerald-300 animate-fadeIn animation-delay-12000">
                {">"} Website ready! Opening preview...
              </div>
            </div>
          </div>

          {/* Simple Floating Elements */}
          <div className="absolute top-2 -left-2 w-1 h-1 bg-emerald-400 rounded-full animate-bounce"></div>
          <div
            className="absolute top-2 -right-2 w-1 h-1 bg-green-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-2 -left-2 w-1 h-1 bg-emerald-400 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-2 -right-2 w-1 h-1 bg-green-400 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
