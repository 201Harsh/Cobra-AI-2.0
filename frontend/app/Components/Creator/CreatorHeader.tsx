import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreatorHeader = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeTab,
  setActiveTab,
  navigationItems,
}: any) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Mobile Menu Button */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <Image
                  priority
                  src="/img/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent capitalize font-h1">
                Cobra AI 2.0
              </span>
            </Link>

            {/* AI Status - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-400">AI Active</span>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-emerald-400">Creator Plan</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
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
