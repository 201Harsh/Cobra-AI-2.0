import React, { useState, useEffect } from "react";

const CobraAILoading = () => {
  const [currentCheck, setCurrentCheck] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const checks = [
    "Initializing Cobra AI 2.0...",
    "Checking user credentials...",
    "Verifying authentication token...",
    "Loading security protocols...",
    "Connecting to neural network...",
    "Finalizing setup...",
  ];

  useEffect(() => {
    if (isComplete) return;

    const checkInterval = setInterval(() => {
      setCurrentCheck((prev) => {
        if (prev >= checks.length - 1) {
          clearInterval(checkInterval);
          setTimeout(() => setIsComplete(true), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(checkInterval);
  }, [isComplete]);

  const restartAnimation = () => {
    setCurrentCheck(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 neon-green mb-4">
            Cobra AI 2.0 Ready
          </div>
          <button
            onClick={restartAnimation}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors neon-red"
          >
            Restart Check
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Cobra AI 2.0 Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-wider">
            COBRA <span className="text-green-400 neon-green">AI</span>
          </h1>
          <div className="text-green-400 neon-green text-xl">v2.0</div>
        </div>

        {/* Loading Animation */}
        <div className="relative mb-8">
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-red-500 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentCheck + 1) / checks.length) * 100}%`,
              }}
            ></div>
          </div>

          {/* Pulsing dots */}
          <div className="flex justify-between mt-2">
            {checks.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentCheck
                    ? "bg-green-400 neon-green-pulse"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Current Check Display */}
        <div className="text-center mb-6">
          <div className="text-green-400 neon-green text-lg font-mono">
            {checks[currentCheck]}
          </div>
        </div>

        {/* Animated Cobra Symbol */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-400 rounded-full animate-spin-slow neon-green-glow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-red-500 rounded-full animate-ping-slow neon-red-glow"></div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-2 gap-4 text-sm font-mono">
          <div className="text-green-400 flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Security: Active
          </div>
          <div className="text-red-400 flex items-center">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
            Auth: Verifying
          </div>
          <div className="text-green-400 flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Neural: Online
          </div>
          <div className="text-yellow-400 flex items-center">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
            API: Connecting
          </div>
        </div>
      </div>
    </div>
  );
};

export default CobraAILoading;
