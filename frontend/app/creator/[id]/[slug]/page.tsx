"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaMagic,
  FaRocket,
  FaEye,
  FaDownload,
  FaPalette,
  FaImage,
  FaUser,
  FaArrowLeft,
  FaSpinner,
  FaRockrms,
  FaCopy,
} from "react-icons/fa";
import Link from "next/link";
import { Slide, toast } from "react-toastify";
import Footer from "@/app/Components/Footer";
import { useParams, useRouter } from "next/navigation";
import AxiosInstance from "@/config/Axios";

const SiteGenerationPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const Router = useRouter();

  const param = useParams();
  const id = param.id;

  useEffect(() => {
    const fetchOneTemplate = async () => {
      try {
        const response = await AxiosInstance.get(`/templates/one/${id}`);
        if (response.status === 200) {
          setSelectedTemplate(response.data.Template);
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
  }, [id]);

  const [formData, setFormData] = useState<any>({
    brandName: "",
    description: "",
    email: "",
    slogan: "",
    tone: "professional",
  });

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [generatedSite, setGeneratedSite] = useState<any>(null);
  const livePreviewRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isGenerated) {
      livePreviewRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isGenerated]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerateWebsite = async () => {
    if (
      !formData.brandName ||
      !formData.description ||
      !formData.email ||
      !formData.slogan
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsGenerating(true);

    try {
      // Simulate API call to generate website
      setTimeout(() => {
        setIsGenerating(false);
        setIsGenerated(true);
        setGeneratedSite({
          url: "https://generated-site.cobraai.com/demo",
          downloadUrl: "/download/project.zip",
        });
        toast.success("Website generated successfully!");
      }, 3000);

      // Actual API call would be:
      // const response = await AxiosInstance.post('/creator/generate', {
      //   templateId: selectedTemplate.id,
      //   ...formData
      // });
    } catch (error) {
      setIsGenerating(false);
      toast.error("Failed to generate website. Please try again.");
    }
  };

  const toneOptions = [
    { value: "professional", label: "Professional" },
    { value: "creative", label: "Creative" },
    { value: "luxury", label: "Luxury" },
    { value: "modern", label: "Modern" },
    { value: "stylish", label: "Stylish" },
  ];

  const BackNavigation = () => {
    Router.push(`/creator/${id}`);
  };

  const handleViewLive = () => {
    if (generatedSite && generatedSite.url) {
      window.open("/demo/preview", "_blank");
    }
  };
  const handleViewDemo = () => {
    window.open("/demo/preview", "_blank");
  };

  const handleCopyLink = () => {
    const siteURL = `https://${formData.brandName
      .toLowerCase()
      .replace(/\s+/g, "")}.cobraai.com`;
    navigator.clipboard.writeText(siteURL);
    toast.success("Site URL copied to clipboard!");
  };

  return (
    <>
      <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        {/* Navigation */}
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={BackNavigation}
            className="cursor-pointer inline-flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors mb-6"
          >
            <FaArrowLeft />
            <span>Back to Template</span>
          </button>
        </div>

        {/* Header Section */}
        <section className="container mx-auto px-6 py-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
              <FaMagic className="text-emerald-400" />
              <span className="text-sm">AI-Powered Website Builder</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-h capitalize">
              Build Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Brand Website
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Just describe your brand, and let{" "}
              <span className="font-bold text-emerald-400 font-h">
                Cobra AI
              </span>{" "}
              do the rest. No coding required.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {/* Input Sections in Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Selected Template Preview */}
                {selectedTemplate && (
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center space-x-3">
                      <FaRocket className="text-emerald-400 text-lg sm:text-xl" />
                      <span>Selected Template</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex justify-center sm:justify-start">
                        <img
                          src={selectedTemplate.cover_img}
                          alt={selectedTemplate.name}
                          className="w-full h-48 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
                        />
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">
                          {selectedTemplate.name}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-3">
                          {selectedTemplate.type} •{" "}
                          {selectedTemplate.programming_language}
                        </p>

                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                          {selectedTemplate.features
                            .slice(0, 3)
                            .map((feature: string, index: number) => (
                              <span
                                key={index}
                                className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs border border-emerald-500/30"
                              >
                                {feature}
                              </span>
                            ))}
                        </div>

                        <div className="flex justify-center sm:justify-start">
                          <button
                            onClick={handleViewDemo}
                            className="text-emerald-400 cursor-pointer hover:text-emerald-300 text-sm flex items-center space-x-2"
                          >
                            <FaEye className="text-xs" />
                            <span>View Demo</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* What You'll Get */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-6">
                  <h3 className="text-2xl font-bold mb-4 text-emerald-400 font-h">
                    What You'll Get
                  </h3>
                  <div className="space-y-3 font-inter font-light text-lg">
                    {[
                      "Fully functional website in minutes",
                      "SEO-optimized content and structure",
                      "Mobile-responsive design",
                      "Brand-consistent styling",
                      "Clean, professional code",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brand Information Form */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <FaUser className="text-emerald-400" />
                  <span>Brand Information</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Brand Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Brand Name *
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your brand name"
                    />
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Brand Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Describe what your brand does, your mission, or what makes you unique..."
                    />
                  </div>

                  {/* Contact Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="contact@yourbrand.com"
                    />
                  </div>

                  {/* Brand Tone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Brand Tone
                    </label>
                    <select
                      name="tone"
                      value={formData.tone}
                      onChange={handleInputChange}
                      className="cusror-pointer w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      {toneOptions.map((option) => (
                        <option
                          className="bg-gray-950 text-white cursor-pointer"
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Slogan */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Slogan or Tagline
                    </label>
                    <div className="flex space-x-3">
                      <textarea
                        name="slogan"
                        value={formData.slogan}
                        onChange={handleInputChange}
                        rows={2}
                        className="resize-none flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Craft your perfect slogan or let AI generate one..."
                      />
                      <button
                        type="button"
                        className="cursor-pointer bg-gradient-to-r from-emerald-500/20 to-green-600/20 hover:from-emerald-500/30 hover:to-green-600/30 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap"
                        onClick={() => {
                          // AI-powered slogan generator based on brand name and description
                          const brandSlogans = [
                            `${formData.brandName} - Quality You Can Trust`,
                            `Experience Excellence with ${formData.brandName}`,
                            `${formData.brandName}: Where Innovation Meets Quality`,
                            `Your Vision, Our Passion - ${formData.brandName}`,
                            `${formData.brandName}: Building Tomorrow, Today`,
                            `The Future is ${formData.brandName}`,
                            `${formData.brandName}: Beyond Expectations`,
                            `Simply Better. ${formData.brandName}.`,
                            `${formData.brandName} - Made for You`,
                            `Discover the Difference with ${formData.brandName}`,
                          ];

                          const genericSlogans = [
                            "Quality That Speaks for Itself",
                            "Innovation at Its Finest",
                            "Where Dreams Become Reality",
                            "Excellence in Every Detail",
                            "Your Success is Our Mission",
                            "Building Better Experiences",
                            "The Art of Perfection",
                            "Simply Extraordinary",
                            "Beyond the Ordinary",
                            "Creating Tomorrow's Solutions",
                          ];

                          const slogans = formData.brandName
                            ? brandSlogans
                            : genericSlogans;
                          const randomIndex = Math.floor(
                            Math.random() * slogans.length
                          );
                          setFormData((prev: any) => ({
                            ...prev,
                            slogan: slogans[randomIndex],
                          }));
                        }}
                      >
                        <FaMagic className="text-sm" />
                        <span className="hidden sm:inline">AI Generate</span>
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-inter">
                      Let{" "}
                      <span className="font-semibold text-emerald-400">
                        AI craft
                      </span>{" "}
                      the perfect slogan based on your brand identity
                    </p>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateWebsite}
                disabled={
                  isGenerating ||
                  !formData.brandName ||
                  !formData.description ||
                  !formData.slogan ||
                  !formData.tone ||
                  !formData.email
                }
                className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
              >
                {isGenerating ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Generating Your Website...</span>
                  </>
                ) : (
                  <>
                    <FaMagic />
                    <span>Generate Website with AI</span>
                  </>
                )}
              </button>

              {/* Live Preview Section - Only shown after generation */}
              {isGenerated && (
                <div
                  ref={livePreviewRef}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6"
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                    <FaEye className="text-emerald-400" />
                    <span>Live Preview</span>
                  </h2>

                  <div className="space-y-4">
                    {/* Site Status */}
                    <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 font-semibold">
                            Site is Live!
                          </span>
                        </div>
                        <div className="text-sm text-gray-300">
                          Your website is now live and accessible
                        </div>
                      </div>
                    </div>

                    {/* Site Link */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">
                          Your Site URL:
                        </span>
                        <span className="text-emerald-400 text-sm flex items-center space-x-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span>Live</span>
                        </span>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 border border-gray-600 relative">
                        <code
                          onClick={handleViewLive}
                          className="text-emerald-300 font-mono text-sm break-all cursor-pointer 
                            hover:text-emerald-400 underline"
                        >
                          https://
                          {formData.brandName.toLowerCase().replace(/\s+/g, "")}
                          .cobraai.com
                        </code>
                        <button>
                          <FaCopy
                            onClick={handleCopyLink}
                            className="text-gray-400 hover:text-emerald-400 mt-2 cursor-pointer absolute top-2 right-2"
                          />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Share this link with your customers and team members
                      </p>
                    </div>

                    {/* Preview Card */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 relative">
                      <div className="aspect-video bg-gray-950 overflow-hidden rounded-lg">
                        <img
                          className="w-full h-full object-cover"
                          src={selectedTemplate.cover_img}
                          alt="Website Preview"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end justify-center p-6">
                          <div className="text-center">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {formData.brandName}
                            </h3>
                            <p className="text-gray-200 text-sm">
                              {formData.slogan ||
                                "Your professional website is ready"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        onClick={handleViewLive}
                        className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                      >
                        <FaEye />
                        <span>Visit Live Site</span>
                      </button>
                      <button className="cursor-pointer border border-emerald-500/30 hover:border-emerald-400 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-500/10 flex items-center justify-center space-x-2">
                        <FaRockrms />
                        <span>Website Dashboard</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SiteGenerationPage;
