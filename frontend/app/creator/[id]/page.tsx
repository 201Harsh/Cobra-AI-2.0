"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaUsers,
  FaCode,
  FaRocket,
  FaCheck,
  FaShoppingCart,
  FaEye,
  FaArrowLeft,
  FaCrown,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import { Slide, toast } from "react-toastify";
import AxiosInstance from "@/config/Axios";
import { Router } from "next/router";

const TemplatePage = () => {
  const [template, setTemplate] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchOneTemplate = async () => {
      try {
        const response = await AxiosInstance.get(`/templates/one/${id}`);
        if (response.status === 200) {
          setTemplate(response.data.Template);
        }
      } catch (error: any) {
        toast.error(
          error.response?.data?.message || "Failed to fetch template",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          }
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchOneTemplate();
  }, []);

  const Router = useRouter();

  const handleUseTemplate = () => {
    Router.push(`/creator/${id}/customize`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${
          index < Math.floor(rating)
            ? "text-yellow-400"
            : index < rating
            ? "text-yellow-300"
            : "text-gray-300"
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Template Not Found
          </h1>
          <Link
            href="/creator"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        {/* Navigation */}
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/creator"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors mb-6"
          >
            <FaArrowLeft />
            <span>Back to Templates</span>
          </Link>
        </div>

        {/* Template Hero Section */}
        <section className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
                  <img
                    src={template.cover_img}
                    alt={template.name}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-2 gap-4">
                  {template.examples_img.map((image: string, index: number) => (
                    <div
                      key={index}
                      className={`bg-gray-800/30 backdrop-blur-sm rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        activeImage === index
                          ? "border-emerald-500"
                          : "border-gray-700 hover:border-emerald-500/50"
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${template.name} preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Template Details */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <h1 className="text-4xl font-bold">{template.name}</h1>
                      {template.status === "premium" && (
                        <span className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <FaCrown className="text-xs" />
                          <span>PREMIUM</span>
                        </span>
                      )}
                      {template.status === "free" && (
                        <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          FREE
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xl text-gray-300 mb-4">
                    {template.details}
                  </p>

                  {/* Author Information */}
                  {template.author && (
                    <div className="flex items-center space-x-3 mb-4">
                      <FaUser className="text-emerald-500" />
                      <span className="text-gray-300">
                        Made with ❤️ by{" "}
                        <span className="text-yellow-400 font-bold font-h1 uppercase">
                          {template.author}
                        </span>
                      </span>
                    </div>
                  )}

                  {/* Rating and Usage */}
                  <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-gray-400">
                    {/* Rating - Always on first line */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(template.rating)}
                      </div>
                      <span className="text-white font-semibold text-sm sm:text-base">
                        {template.rating}
                      </span>
                    </div>

                    {/* Usage Stats - Stack on mobile, row on desktop */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                      <div className="flex items-center space-x-2">
                        <FaUsers className="flex-shrink-0 text-sm" />
                        <span className="text-sm sm:text-base">
                          {template.uses.toLocaleString()} Uses
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCode className="flex-shrink-0 text-sm" />
                        <span className="text-sm sm:text-base">
                          {template.programming_language}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <FaCheck className="text-emerald-400" />
                    <span>Key Features</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {template.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <FaCode className="text-emerald-400" />
                    <span>Technology Stack</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {template.tech_stack.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {template.status === "premium" ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-yellow-400">
                          ₹{template.price}
                        </span>
                        <span className="text-gray-400 text-sm">
                          One-time payment
                        </span>
                      </div>
                      <button
                        onClick={handleUseTemplate}
                        className="w-full mt-5 cursor-pointer bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                      >
                        <FaShoppingCart />
                        <span>Get Premium Template</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleUseTemplate}
                      className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                    >
                      <FaRocket />
                      <span>Use This Template Free</span>
                    </button>
                  )}

                  <button className="cursor-pointer w-full border border-emerald-500/30 hover:border-emerald-400 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center justify-center space-x-3">
                    <FaEye />
                    <span>Live Preview</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TemplatePage;
