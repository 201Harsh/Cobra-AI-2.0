import React from "react";

const HeaderandNavigation = ({ activeSection, setActiveSection }: any) => {
  return (
    <>
      {/* Desktop Top Navigation */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-red-500/20 z-50">
        <div className="p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🧪</div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider font-mono">
                    Venom Lab AI
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Chat with AI Mentor & Code Editor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-red-500/20 z-50 pt-4 pb-4 px-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🧪</div>
          <div className="flex-1">
            <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider font-mono">
              Venom Lab AI
            </h1>
            <p className="text-gray-300 text-xs">
              {activeSection === "chat" ? "AI Coding Mentor" : "Code Editor"}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-red-500/20 z-50">
        <div className="flex">
          <button
            onClick={() => setActiveSection("chat")}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-all ${
              activeSection === "chat"
                ? "text-red-400 bg-red-500/10"
                : "text-gray-400"
            }`}
          >
            <span className="text-xl">💬</span>
            <span className="text-xs font-medium">AI Chat</span>
          </button>
          <button
            onClick={() => setActiveSection("code")}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-all ${
              activeSection === "code"
                ? "text-emerald-400 bg-emerald-500/10"
                : "text-gray-400"
            }`}
          >
            <span className="text-xl">💻</span>
            <span className="text-xs font-medium">Code</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderandNavigation;
