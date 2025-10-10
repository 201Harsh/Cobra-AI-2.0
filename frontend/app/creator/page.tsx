"use client";
import React, { useState } from "react";
import CreatorHeader from "../Components/Creator/CreatorHeader";
import Sidebar from "../Components/Creator/Sidebar";
import BottomNavigation from "../Components/Creator/BottomNavigation";
import CreatorPage from "../Components/Creator/CreatorPage";
import MySitePage from "../Components/Creator/MySitePage";
import SettingsPage from "../Components/Creator/SettingsPage";
import DashboardPage from "../Components/Creator/DashboardPage";

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
    { id: "sites", icon: "🌐", label: "My Sites" },
    { id: "dashboard", icon: "🏠", label: "Dashboard" },
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
          <CreatorPage
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            websiteData={websiteData}
            setWebsiteData={setWebsiteData}
            handleGenerate={handleGenerate}
            isGenerating={isGenerating}
            websiteTypes={websiteTypes}
            themes={themes}
          />

          {/* My Sites Page */}
          <MySitePage
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            generatedSites={generatedSites}
          />

          {/* Dashboard Page */}
          <DashboardPage
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            generatedSites={generatedSites}
          />

          {/* Settings Page */}
          <SettingsPage activeTab={activeTab} setActiveTab={setActiveTab} />

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
