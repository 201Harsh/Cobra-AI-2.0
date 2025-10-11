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
            Cobra AI Initializing
          </h3>

          {/* Verification Steps */}
          <div className="space-y-3 mb-6">
            {[
              {
                id: 1,
                text: "🔐 Verifying user authentication...",
                delay: 0.5,
              },
              { id: 2, text: "📡 Connecting to AI services...", delay: 1.5 },
              { id: 3, text: "⚡ Loading creator modules...", delay: 2.5 },
              { id: 4, text: "🎯 Preparing website builder...", delay: 3.5 },
              { id: 5, text: "🚀 Almost ready...", delay: 4.5 },
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

          {/* Simple Progress Bar */}
          <div className="mb-4">
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-1.5 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Status Message */}
          <div className="text-gray-400 text-sm animate-pulse">
            Preparing your workspace...
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

      {/* Optimized CSS Animations */}
      <style jsx>{`
       
      `}</style>
    </div>
  );
};

export default LoadingScreen;
