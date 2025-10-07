"use client";
import AxiosInstance from "@/config/Axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaCrown,
  FaFreeCodeCamp,
  FaGem,
  FaLaptop,
  FaMagic,
  FaMobile,
  FaPalette,
  FaRocket,
  FaSearch,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { toast, Zoom } from "react-toastify";

const page = (params: { id: string }) => {
  const [templates, setTemplates] = useState<any>([]);
  const [FilteredTemplates, setFilteredTemplates] = useState<any>([]);
  const [Search, setSearch] = useState<string>("");
  const [Error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const FetchAllTemplates = async () => {
    setIsLoading(true);
    try {
      const res = await AxiosInstance.get("/templates/all");
      if (res.status === 200) {
        setTemplates(res.data.Templates);
      }
    } catch (error: any) {
      setError(error.response?.data?.error || "Templates not found");
      toast.error(
        error?.response?.data?.message || "Failed to fetch templates",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        }
      );
      setTemplates([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchAllTemplates();
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "e-commerce":
        return <FaShoppingCart className="text-blue-400" />;
      case "portfolio":
        return <FaPalette className="text-purple-400" />;
      case "blog":
        return <FaCode className="text-green-400" />;
      case "blog / news":
        return <FaCode className="text-green-400" />;
      case "animated":
        return <FaRocket className="text-pink-400" />;
      case "business":
        return <FaLaptop className="text-orange-400" />;
      case "landing page":
        return <FaMobile className="text-cyan-400" />;
      case "education":
        return <FaCode className="text-yellow-400" />;
      case "healthcare":
        return <FaCode className="text-red-400" />;
      case "restaurant":
        return <FaCode className="text-emerald-400" />;
      case "startup / SaaS":
        return <FaRocket className="text-indigo-400" />;
      default:
        return <FaCode className="text-gray-400" />;
    }
  };

  const Router = useRouter();
  const HandleRouting = (id: string) => {
    Router.push(`/creator/${id}`);
  };

  useEffect(() => {
    if (Search) {
      const filter = templates.filter((t: any) => {
        return (
          t.type.toLowerCase().includes(Search.toLowerCase()) ||
          t.programming_language.toLowerCase().includes(Search.toLowerCase()) ||
          t.features.some((feature: string) =>
            feature.toLowerCase().includes(Search.toLowerCase())
          )
        );
      });
      setFilteredTemplates(filter);
    } else {
      setFilteredTemplates(templates);
    }
  }, [Search]);

  return (
    <>
      <div
        className="min-h-screen w-full bg-gray-950 
      bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white pt-8"
      >
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
            <FaPalette className="text-emerald-400" />
            <span className="text-sm">Professional Templates</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Template
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover professionally designed templates for every need. Free and
            premium options available.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search Templates"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              {Search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-full px-5 lg:px-10 py-8">
          {/* Loading State */}
          {isLoading && (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {[...Array(10)].map((_, idx) => (
                <div key={idx} className="animate-pulse">
                  <div className="bg-gray-800/50 rounded-2xl h-96">
                    <div className="h-48 bg-gray-700 rounded-t-2xl"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-700 rounded w-full"></div>
                      <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                      <div className="h-8 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {Error && !isLoading && (
            <div className="max-w-2xl mx-auto text-center md:mt-2 mt-16">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <span className="text-4xl">😔</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-400 text-lg mb-8">{Error}</p>
              <button
                onClick={FetchAllTemplates}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Try Again
              </button>
            </div>
          )}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {!Error && !isLoading && !Search && (
              <>
                {/* Custom Template Card */}
                <div>
                  <div
                    className="bg-gray-800/30 cursor-pointer backdrop-blur-sm rounded-2xl border 
              border-sky-500/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1705787288167-9b21d55bf9b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VzdG9tJTIwdGVtcGxhdGV8ZW58MHwwfDB8fHww"
                        alt="Template Name"
                        className="w-full h-48 object-cover"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-br from-sky-500 to-blue-500 text-white">
                        <div className="flex items-center space-x-1">
                          <FaGem className="text-xs" />
                          <span>Custom</span>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-2">
                        <FaMagic className="text-sky-400" />
                        <span className="capitalize">Custom</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                          Custom Template
                        </h3>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        A custom e-commerce template crafted with AI magic to
                        match your brand, featuring a modern, responsive design
                        and smart interactive elements for an enhanced shopping
                        experience.
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-sky-300">
                          Custom Design
                        </span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-sky-300">
                          Custom Features
                        </span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-sky-300">
                          Custom Layout
                        </span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-sky-300">
                          AI Powered
                        </span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-sky-300">
                          Custom Theme
                        </span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-gray-400">
                          + More
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <FaStar className="text-yellow-400" />
                          <span>4.9</span>
                        </div>
                        <div>
                          <span>20,000+ uses</span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="text-xs text-gray-500 mb-4">
                        Custom Built with AI Magic
                      </div>

                      {/* Action Button */}
                      <button className="cursor-pointer w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 hover:from-sky-600 hover:via-indigo-600  hover:to-blue-700">
                        <FaRocket />
                        <span>Create Now</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Templates Cards */}
                {templates.map((template: any) => (
                  <div
                    onClick={() => HandleRouting(template._id)}
                    key={template._id}
                    className="bg-gray-800/30 cursor-pointer backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={template.cover_img}
                        alt={template.name}
                        className="w-full h-48 object-cover"
                      />

                      {/* Status Badge */}
                      <div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          template.status === "premium"
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                            : "bg-gradient-to-r from-emerald-500 to-green-500 text-white"
                        }`}
                      >
                        {template.status === "premium" ? (
                          <div className="flex items-center space-x-1">
                            <FaCrown className="text-xs" />
                            <span>PREMIUM</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1">
                            <FaFreeCodeCamp className="text-xs" />
                            <span>FREE</span>
                          </div>
                        )}
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-2">
                        {getTypeIcon(template.type)}
                        <span className="capitalize">{template.type}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {template.name}
                        </h3>
                        {template.status === "premium" && (
                          <div className="text-yellow-400 font-bold text-lg">
                            ₹{template.price}
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {template.details}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.features
                          .slice(0, 3)
                          .map((feature: string, index: number) => (
                            <span
                              key={index}
                              className="bg-gray-700/50 px-2 py-1 rounded text-xs text-emerald-300"
                            >
                              {feature}
                            </span>
                          ))}
                        {template.features.length > 3 && (
                          <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-gray-400">
                            +{template.features.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <FaStar className="text-yellow-400" />
                          <span>{template.rating}</span>
                        </div>
                        <div>
                          <span>{template.uses.toLocaleString()} uses</span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="text-xs text-gray-500 mb-4">
                        {template.programming_language}
                      </div>

                      {/* Action Button */}
                      <button
                        className={`w-full cursor-pointer py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 ${
                          template.status === "premium"
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                            : "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                        }`}
                      >
                        {template.status === "premium" ? (
                          <>
                            <FaCrown />
                            <span>Get Premium</span>
                          </>
                        ) : (
                          <>
                            <FaRocket />
                            <span>Use Template</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            {!Error && !isLoading && Search && (
              <>
                {FilteredTemplates.map((template: any) => (
                  <div
                    onClick={() => HandleRouting(template._id)}
                    key={template._id}
                    className="bg-gray-800/30 cursor-pointer backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={template.cover_img}
                        alt={template.name}
                        className="w-full h-48 object-cover"
                      />

                      {/* Status Badge */}
                      <div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          template.status === "premium"
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                            : "bg-gradient-to-r from-emerald-500 to-green-500 text-white"
                        }`}
                      >
                        {template.status === "premium" ? (
                          <div className="flex items-center space-x-1">
                            <FaCrown className="text-xs" />
                            <span>PREMIUM</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1">
                            <FaFreeCodeCamp className="text-xs" />
                            <span>FREE</span>
                          </div>
                        )}
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-2">
                        {getTypeIcon(template.type)}
                        <span className="capitalize">{template.type}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {template.name}
                        </h3>
                        {template.status === "premium" && (
                          <div className="text-yellow-400 font-bold text-lg">
                            ₹{template.price}
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {template.details}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.features
                          .slice(0, 3)
                          .map((feature: string, index: number) => (
                            <span
                              key={index}
                              className="bg-gray-700/50 px-2 py-1 rounded text-xs text-emerald-300"
                            >
                              {feature}
                            </span>
                          ))}
                        {template.features.length > 3 && (
                          <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-gray-400">
                            +{template.features.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <FaStar className="text-yellow-400" />
                          <span>{template.rating}</span>
                        </div>
                        <div>
                          <span>{template.uses.toLocaleString()} uses</span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="text-xs text-gray-500 mb-4">
                        {template.programming_language}
                      </div>

                      {/* Action Button */}
                      <button
                        className={`w-full cursor-pointer py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 ${
                          template.status === "premium"
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                            : "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                        }`}
                      >
                        {template.status === "premium" ? (
                          <>
                            <FaCrown />
                            <span>Get Premium</span>
                          </>
                        ) : (
                          <>
                            <FaRocket />
                            <span>Use Template</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          {!FilteredTemplates.length && (
            <div className="max-w-2xl w-full mx-auto text-center md:mt-10 mt-16">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <span className="text-4xl">🔍</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                No Templates Found
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We couldn't find any templates matching
                <span className="text-emerald-400 ml-2 font-bold">
                  "{Search}"
                </span>
              </p>
              <button
                onClick={() => setSearch("")}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointerF"
              >
                View All Templates
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
