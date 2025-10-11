import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const CreatorHeader = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeTab,
  setActiveTab,
  navigationItems,
  UserData,
  handleLogout,
  handleSettingsClick,
}: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSettings = () => {
    setActiveTab("settings");
    setIsDropdownOpen(false);
    if (handleSettingsClick) {
      handleSettingsClick();
    }
  };

  const handleLogoutClick = () => {
    setIsDropdownOpen(false);
    if (handleLogout) {
      handleLogout();
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-600/50"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {isMobileMenuOpen ? "✕" : "☰"}
                </div>
              </button>

              <Link href="/" className="flex items-center space-x-2">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <Image
                    priority
                    src="/img/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent capitalize font-h1">
                  Cobra AI 2.0
                </span>
              </Link>
            </div>

            {/* AI Status - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-400">AI Active</span>
            </div>

            {/* User Profile with Dropdown */}
            <div
              className="flex items-center space-x-4 relative"
              ref={dropdownRef}
            >
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium">
                  {UserData?.name || "John Doe"}
                </p>
                <p className="text-xs text-emerald-400 capitalize">
                  {UserData?.plan || "Creator"} Plan
                </p>
              </div>

              {/* Profile Avatar - Clickable */}
              <button onClick={handleProfileClick} className="relative group">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold hover:scale-105 transition-all duration-300">
                  {UserData?.name?.charAt(0) || "J"}
                  {UserData?.name?.split(" ")[1]?.charAt(0) || "D"}
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-14 w-48 bg-gray-800/95 backdrop-blur-xl rounded-xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/10 py-2 z-50 animate-fade-in">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-700/50">
                    <p className="text-sm font-medium text-white truncate">
                      {UserData?.name || "John Doe"}
                    </p>
                    <p className="text-xs text-emerald-400 truncate">
                      {UserData?.email || "john@example.com"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 capitalize">
                      {UserData?.plan || "Creator"} Plan
                    </p>
                  </div>

                  {/* Dropdown Items */}
                  <div className="py-2">
                    <button
                      onClick={handleSettings}
                      className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-200 group"
                    >
                      <span className="text-lg">⚙️</span>
                      <span>Settings</span>
                      <div className="ml-auto w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button
                      onClick={handleLogoutClick}
                      className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group"
                    >
                      <span className="text-lg">🚪</span>
                      <span>Logout</span>
                      <div className="ml-auto w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Usage Stats */}
                  <div className="px-4 py-2 border-t border-gray-700/50">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Sites Generated</span>
                      <span>
                        {UserData?.siteGen || 0}/
                        {UserData?.maxSitegeneration || 10}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-emerald-400 to-green-400 h-1 rounded-full transition-all duration-500"
                        style={{
                          width: `${
                            UserData?.maxSiteGen
                              ? (UserData.siteGen /
                                  UserData.maxSitegeneration) *
                                100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-800/95 backdrop-blur-xl border-t border-emerald-500/20">
            <div className="px-4 py-3 space-y-2">
              {navigationItems.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                    activeTab === item.id
                      ? "bg-emerald-500/20 border border-emerald-500/30"
                      : "bg-gray-700/30 hover:bg-gray-700/50"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                  {activeTab === item.id && (
                    <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default CreatorHeader;
