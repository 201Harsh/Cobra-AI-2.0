"use client";
import React, { useState } from "react";
import CreatorHeader from "../Components/Creator/CreatorHeader";
import Sidebar from "../Components/Creator/Sidebar";
import BottomNavigation from "../Components/Creator/BottomNavigation";

const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [websiteData, setWebsiteData] = useState({
    prompt: "",
    name: "",
    type: "portfolio",
    theme: "dark",
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const navigationItems = [
    { id: "create", icon: "⚡", label: "Create" },
    { id: "dashboard", icon: "🏠", label: "Dashboard" },
    { id: "sites", icon: "🌐", label: "My Sites" },
    { id: "settings", icon: "⚙️", label: "Settings" },
  ];

  const websiteTypes = [
    { value: "portfolio", label: "Portfolio" },
    { value: "blog", label: "Blog" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "business", label: "Business" },
    { value: "restaurant", label: "Restaurant" },
    { value: "travel", label: "Travel" },
    { value: "education", label: "Education" },
    { value: "health", label: "Health" },
    { value: "sports", label: "Sports" },
    { value: "photography", label: "Photography" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
    { value: "real-estate", label: "Real Estate" },
  ];

  const themes = [
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" },
    { value: "gradient", label: "Gradient" },
  ];

  // Sample generated websites data
  const generatedSites = [
    {
      id: 1,
      name: "Portfolio Pro",
      type: "Portfolio",
      date: "2024-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Tech Blog",
      type: "Blog",
      date: "2024-01-10",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-gray-900/0 to-gray-900/80"></div>

      {/* Top Navigation */}
      <CreatorHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navigationItems={navigationItems}
      />

      {/* Desktop Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navigationItems={navigationItems}
      />

      {/* Bottom Navigation for Mobile & Tablet */}
      <BottomNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navigationItems={navigationItems}
      />

      {/* Main Content */}
      <div className="pt-16 pb-20 md:pb-20 lg:pb-8 min-h-screen lg:ml-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Create Page */}
          {activeTab === "create" && (
            <div className="w-full max-w-4xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-8 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                  Creator Mode
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8">
                  Describe your vision. Cobra AI does the rest.
                </p>

                {/* Floating Particles - Hidden on mobile */}
                <div className="hidden lg:block relative">
                  <div className="absolute -top-4 -left-4 w-3 h-3 bg-emerald-400 rounded-full animate-float"></div>
                  <div
                    className="absolute -top-2 -right-4 w-2 h-2 bg-green-400 rounded-full animate-float"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute -bottom-4 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-float"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>
              </div>

              {/* Creator Zone */}
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-4 sm:p-6 lg:p-8 shadow-2xl">
                {/* Prompt Input */}
                <div className="mb-6 lg:mb-8">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Describe Your Website
                  </label>
                  <textarea
                    value={websiteData.prompt}
                    onChange={(e) =>
                      setWebsiteData({ ...websiteData, prompt: e.target.value })
                    }
                    placeholder="A modern portfolio for a freelance designer with dark theme, animated sections, and contact form..."
                    className="w-full h-32 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none text-white placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* Optional Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
                  {/* Website Name */}
                  <div className="bg-gray-700/30 rounded-xl p-3 sm:p-4 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Website Name
                    </label>
                    <input
                      type="text"
                      value={websiteData.name}
                      onChange={(e) =>
                        setWebsiteData({ ...websiteData, name: e.target.value })
                      }
                      placeholder="My Awesome Site"
                      className="w-full px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                    />
                  </div>

                  {/* Website Type */}
                  <div className="bg-gray-700/30 rounded-xl p-3 sm:p-4 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Website Type
                    </label>
                    <select
                      value={websiteData.type}
                      onChange={(e) =>
                        setWebsiteData({ ...websiteData, type: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                    >
                      {websiteTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Color Theme */}
                  <div className="bg-gray-700/30 rounded-xl p-3 sm:p-4 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Color Theme
                    </label>
                    <select
                      value={websiteData.theme}
                      onChange={(e) =>
                        setWebsiteData({
                          ...websiteData,
                          theme: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                    >
                      {themes.map((theme) => (
                        <option key={theme.value} value={theme.value}>
                          {theme.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="text-center">
                  <button
                    onClick={handleGenerate}
                    disabled={!websiteData.prompt || isGenerating}
                    className="relative w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                      <span>🪄 Generate Website</span>
                      {isGenerating && (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      )}
                    </span>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>

                    {/* Light Ray Effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-40 transition-all duration-1000"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* My Sites Page */}
          {activeTab === "sites" && (
            <div className="w-full max-w-6xl mx-auto">
              <div className="text-center mb-8 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  My Generated Websites
                </h1>
                <p className="text-base sm:text-lg text-gray-300">
                  Manage and view all your AI-generated websites
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
                {generatedSites.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {generatedSites.map((site) => (
                      <div
                        key={site.id}
                        className="bg-gray-700/30 rounded-2xl p-6 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-lg text-white">
                            {site.name}
                          </h3>
                          <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                            {site.status}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <p>Type: {site.type}</p>
                          <p>Created: {site.date}</p>
                        </div>
                        <div className="flex space-x-3 mt-4">
                          <button className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 py-2 px-3 rounded-lg transition-all duration-300 text-sm">
                            View
                          </button>
                          <button className="flex-1 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 py-2 px-3 rounded-lg transition-all duration-300 text-sm">
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                    {/* Add New Site Card */}
                    <div className="bg-gray-700/20 rounded-2xl p-6 border border-dashed border-gray-600/50 flex flex-col items-center justify-center text-center hover:border-emerald-400/30 transition-all duration-300">
                      <div className="text-4xl mb-4">+</div>
                      <h3 className="font-bold text-lg text-white mb-2">
                        Create New Site
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Generate a new website with AI
                      </p>
                      <button
                        onClick={() => setActiveTab("create")}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                      >
                        Start Creating
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🌐</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      No Websites Yet
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Create your first AI-generated website
                    </p>
                    <button
                      onClick={() => setActiveTab("create")}
                      className="bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                    >
                      Create Your First Site
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Settings Page */}
          {activeTab === "settings" && (
            <div className="w-full max-w-4xl mx-auto">
              <div className="text-center mb-8 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Settings
                </h1>
                <p className="text-base sm:text-lg text-gray-300">
                  Manage your account and preferences
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Profile Settings */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white border-b border-gray-600/50 pb-2">
                      Profile Settings
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Display Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Plan & Usage */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white border-b border-gray-600/50 pb-2">
                      Plan & Usage
                    </h3>

                    <div className="bg-gray-700/30 rounded-xl p-4 border border-emerald-500/20">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-300">
                          Creator Plan
                        </span>
                        <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">
                          Active
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Sites Generated</span>
                          <span>2 / 10</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm">
                        Upgrade Plan
                      </button>
                    </div>
                  </div>
                </div>

                {/* API Settings */}
                <div className="mt-8 pt-8 border-t border-gray-600/50">
                  <h3 className="text-lg font-bold text-white mb-4">
                    API Settings
                  </h3>
                  <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      API Key
                    </label>
                    <div className="flex space-x-3">
                      <input
                        type="password"
                        defaultValue="sk-••••••••••••••••••••••••"
                        className="flex-1 px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 text-white text-sm"
                        readOnly
                      />
                      <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                        Copy
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Keep your API key secure and don't share it with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dashboard Page */}
          {activeTab === "dashboard" && (
            <div className="w-full max-w-6xl mx-auto">
              <div className="text-center mb-8 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-base sm:text-lg text-gray-300">
                  Welcome to your Cobra AI workspace
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Stats Cards */}
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
                  <div className="text-3xl font-bold text-white mb-2">
                    {generatedSites.length}
                  </div>
                  <div className="text-sm text-gray-400">
                    Websites Generated
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
                  <div className="text-3xl font-bold text-white mb-2">8</div>
                  <div className="text-sm text-gray-400">Sites Remaining</div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
                  <div className="text-3xl font-bold text-white mb-2">2</div>
                  <div className="text-sm text-gray-400">Active Projects</div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setActiveTab("create")}
                    className="bg-gradient-to-r from-emerald-500 to-green-500 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105 text-left"
                  >
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-bold">Create New Website</div>
                    <div className="text-sm opacity-80">Generate with AI</div>
                  </button>

                  <button
                    onClick={() => setActiveTab("sites")}
                    className="bg-gray-700/50 hover:bg-gray-700/70 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105 text-left border border-gray-600/50"
                  >
                    <div className="text-2xl mb-2">🌐</div>
                    <div className="font-bold">View My Sites</div>
                    <div className="text-sm opacity-80">Manage websites</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Loading Overlay */}
          {isGenerating && (
            <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
              <div className="text-center max-w-sm w-full">
                {/* Animated Snake */}
                <div className="relative mb-6">
                  <div className="text-5xl sm:text-6xl mb-4 animate-bounce">
                    🐍
                  </div>
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Cobra AI is crafting your masterpiece...
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-6">
                  This may take a few moments
                </p>

                {/* Progress Bar */}
                <div className="w-full max-w-xs h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-progress"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
