import React from "react";

const DevHeader = () => {
  return (
    <>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="text-4xl">🧪</div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider font-mono">
              Venom Lab
            </h1>
            <p className="text-gray-300 text-lg mt-1">
              by <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent font-semibold">Cobra AI 2.0</span>
            </p>
          </div>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A real-time collaborative environment where developers, AI, and code fuse together
        </p>
      </div>
    </>
  );
};

export default DevHeader;