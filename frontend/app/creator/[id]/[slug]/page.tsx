"use client";
import React, { useState } from "react";
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
} from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
import Footer from "@/app/Components/Footer";

const SiteGenerationPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any>({
    name: "eStore",
    type: "e-commerce",
    cover_img:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/estore-free-template.jpg",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Responsive Design",
      "Payment Ready",
    ],
    programming_language: "React/Next.js + Tailwind CSS",
  });

  const [formData, setFormData] = useState<any>({
    brandName: "",
    description: "",
    logo: null,
    primaryColor: "#10B981", // emerald
    secondaryColor: "#3B82F6", // blue
    email: "",
    slogan: "",
    tone: "professional",
  });

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [generatedSite, setGeneratedSite] = useState<any>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev: any) => ({
        ...prev,
        logo: URL.createObjectURL(file),
      }));
    }
  };

  const handleGenerateWebsite = async () => {
    if (!formData.brandName || !formData.description) {
      toast.error("Please fill in brand name and description");
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

  return (
    <>
      <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        {/* Navigation */}
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors mb-6"
          >
            <FaArrowLeft />
            <span>Back to Templates</span>
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
              Just describe your brand, and let Cobra AI do the rest. No coding
              required.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              {/* Left Column - Input Form */}
              <div className="space-y-8">
                {/* Selected Template Preview */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                    <FaRocket className="text-emerald-400" />
                    <span>Selected Template</span>
                  </h2>

                  <div className="flex items-start space-x-4">
                    <img
                      src={selectedTemplate.cover_img}
                      alt={selectedTemplate.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        {selectedTemplate.name}
                      </h3>
                      <p className="text-gray-400 mb-2">
                        {selectedTemplate.type} •{" "}
                        {selectedTemplate.programming_language}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
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
                      <button className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center space-x-2">
                        <FaEye className="text-xs" />
                        <span>View Demo</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Brand Information Form */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                    <FaUser className="text-emerald-400" />
                    <span>Brand Information</span>
                  </h2>

                  <div className="space-y-6">
                    {/* Brand Name */}
                    <div>
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
                    <div>
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

                    {/* Logo Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Logo Upload
                      </label>
                      <div className="flex items-center space-x-4">
                        <label className="flex-1 cursor-pointer bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                          <FaImage />
                          <span>Choose Logo File</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                        {formData.logo && (
                          <img
                            src={formData.logo}
                            alt="Logo preview"
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                        )}
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Brand Tone
                        </label>
                        <select
                          name="tone"
                          value={formData.tone}
                          onChange={handleInputChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        >
                          {toneOptions.map((option) => (
                            <option
                              className="bg-gray-950 text-white"
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Slogan */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Slogan or Tagline
                      </label>
                      <div className="flex space-x-3">
                        <input
                          type="text"
                          name="slogan"
                          value={formData.slogan}
                          onChange={handleInputChange}
                          className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          placeholder="Craft your perfect slogan or let AI generate one..."
                        />
                        <button
                          type="button"
                          className="bg-gradient-to-r from-emerald-500/20 to-green-600/20 hover:from-emerald-500/30 hover:to-green-600/30 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap"
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
                        Let <span className="font-semibold text-emerald-400">AI craft</span> the perfect slogan based on your brand
                        identity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerateWebsite}
                  disabled={
                    isGenerating || !formData.brandName || !formData.description
                  }
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
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
              </div>

              {/* Right Column - Preview */}
              <div className="space-y-6">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                    <FaEye className="text-emerald-400" />
                    <span>Live Preview</span>
                  </h2>

                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-20">
                      <FaSpinner className="animate-spin text-4xl text-emerald-400 mb-4" />
                      <p className="text-gray-400 text-lg">
                        AI is building your website...
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        This may take a few moments
                      </p>
                    </div>
                  ) : isGenerated ? (
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                        <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-green-600/10 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold mb-2">
                              Website Ready!
                            </h3>
                            <p className="text-gray-400">
                              Your AI-generated website is complete
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                          <FaEye />
                          <span>View Live</span>
                        </button>
                        <button className="flex-1 border border-emerald-500/30 hover:border-emerald-400 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-500/10 flex items-center justify-center space-x-2">
                          <FaDownload />
                          <span>Download Code</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 text-center">
                      <div className="text-6xl mb-4">✨</div>
                      <h3 className="text-xl font-bold mb-2">Preview Area</h3>
                      <p className="text-gray-400">
                        Your generated website will appear here after you click
                        "Generate Website"
                      </p>
                    </div>
                  )}
                </div>

                {/* AI Features */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-6">
                  <h3 className="text-lg font-bold mb-4 text-emerald-400">
                    AI-Powered Features
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Automatic content generation",
                      "Smart layout optimization",
                      "SEO-friendly structure",
                      "Mobile-responsive design",
                      "Brand-consistent styling",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
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

export default SiteGenerationPage;
