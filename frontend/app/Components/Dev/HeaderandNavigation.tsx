"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const HeaderandNavigation = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: "chat" | "code" | "dashboard";
  setActiveSection: (section: "chat" | "code" | "dashboard") => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    router.push("/login");
    setIsDropdownOpen(false);
  };

  const handleDashboard = () => {
    setActiveSection("dashboard");
    setIsDropdownOpen(false);
  };

  const handlehome = () => {
    setActiveSection("chat");
    setIsDropdownOpen(false);
  };

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
                  <h1
                    onClick={handlehome}
                    className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider font-h cursor-pointer"
                  >
                    Venom Lab AI
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Chat with AI Mentor & Code Editor
                  </p>
                </div>
              </div>

              {/* Desktop Navigation Buttons */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveSection("dashboard")}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === "dashboard"
                        ? "bg-blue-500/20 text-white border border-blue-500/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    📊 Dashboard
                  </button>
                </div>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-xl border border-red-500/20 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">U</span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900/90 backdrop-blur-xl border border-red-500/20 rounded-xl shadow-lg py-1 z-50">
                      <div className="px-4 py-2 border-b border-gray-700">
                        <p className="text-sm text-white font-semibold">
                          user@example.com
                        </p>
                        <p className="text-xs text-gray-400">Free Plan</p>
                      </div>

                      <button
                        onClick={handleDashboard}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                          />
                        </svg>
                        Dashboard
                      </button>

                      <div className="border-t border-gray-700 mt-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-red-500/20 z-50 pt-4 pb-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🧪</div>
            <div className="flex-1">
              <h1
                onClick={handlehome}
                className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider font-mono"
              >
                Venom Lab AI
              </h1>
              <p className="text-gray-300 text-xs">
                {activeSection === "chat"
                  ? "AI Coding Mentor"
                  : activeSection === "code"
                  ? "Code Editor"
                  : "Dashboard"}
              </p>
            </div>
          </div>

          {/* Mobile Profile Icon */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 p-2 rounded-lg bg-gray-800/50 backdrop-blur-xl border border-red-500/20 transition-colors"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">U</span>
              </div>
            </button>

            {/* Mobile Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl border border-red-500/20 rounded-xl shadow-lg py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-700">
                  <p className="text-sm text-white font-semibold">
                    user@example.com
                  </p>
                  <p className="text-xs text-gray-400">Free Plan</p>
                </div>

                <button
                  onClick={handleDashboard}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                  </svg>
                  Dashboard
                </button>

                <div className="border-t border-gray-700 mt-1">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            )}
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
          <button
            onClick={() => setActiveSection("dashboard")}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-all ${
              activeSection === "dashboard"
                ? "text-blue-400 bg-blue-500/10"
                : "text-gray-400"
            }`}
          >
            <span className="text-xl">📊</span>
            <span className="text-xs font-medium">Dashboard</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderandNavigation;
