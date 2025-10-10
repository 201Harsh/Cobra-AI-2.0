"use client";
import React, { useEffect, useState } from "react";
import CreatorHeader from "../Components/Creator/CreatorHeader";
import Sidebar from "../Components/Creator/Sidebar";
import BottomNavigation from "../Components/Creator/BottomNavigation";
import CreatorPage from "../Components/Creator/CreatorPage";
import MySitePage from "../Components/Creator/MySitePage";
import SettingsPage from "../Components/Creator/SettingsPage";
import DashboardPage from "../Components/Creator/DashboardPage";
import { Bounce, Flip, toast, Zoom } from "react-toastify";
import AxiosInstance from "@/config/Axios";
import Loading from "../Components/Creator/Loading";

const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("create");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [generatedSites, setgeneratedSites] = useState<any>([]);
  const [websiteData, setWebsiteData] = useState({
    prompt: "",
    name: "",
    type: "custom",
    theme: "light",
  });

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      const res = await AxiosInstance.post("/ai/site/gen", websiteData);

      if (res.status === 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        console.log(res.data);
        GetWebsites();
      }
    } catch (error: any) {
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    } finally {
      setIsGenerating(false);
    }
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
    { value: "restaurant", label: "Restaurant" },
    { value: "travel", label: "Travel" },
    { value: "education", label: "Education" },
    { value: "health", label: "Health & Wellness" },
    { value: "sports", label: "Sports & Fitness" },
    { value: "photography", label: "Photography" },
    { value: "real-estate", label: "Real Estate" },
    { value: "agency", label: "Business / Agency" },
    { value: "landing-page", label: "Landing Page" },
    { value: "gaming", label: "Gaming" },
    { value: "custom", label: "Custom (Prompt Based)" },
  ];

  const themes = [
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" },
    { value: "gradient", label: "Gradient" },
    { value: "custom", label: "Custom (Prompt Based)" },
  ];

  const GetWebsites = async () => {
    try {
      const res = await AxiosInstance.get("/websites/all");

      if (res.status === 200) {
        setgeneratedSites(res.data.Websites);
      }
    } catch (error: any) {}
  };

  useEffect(() => {
    GetWebsites();
  }, []);

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
          <Loading isGenerating={isGenerating} websiteData={websiteData} />
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
