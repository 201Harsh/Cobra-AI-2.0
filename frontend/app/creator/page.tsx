"use client";
import Link from "next/link";
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

const page = () => {
  const [templates, setTemplates] = useState<any>([]);
  const templateData = [
    {
      name: "eStore",
      type: "e-commerce",
      programming_language: "React/Next.js + Tailwind CSS",
      status: "free",
      code: "estore-bootstrap",
      detail:
        "A clean and minimal Bootstrap 4 e-commerce template with product grid, slider, cart functionality, responsive layout.",
      cover_image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/estore-free-template.jpg",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/estore-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/estore-shop.jpg",
      ],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Responsive",
        "Payment Ready",
      ],
      rating: 4.8,
      uses: 12500,
    },
    {
      name: "MyPortfolio",
      type: "portfolio",
      programming_language: "React + Tailwind CSS",
      status: "free",
      code: "myportfolio-react",
      detail:
        "A sleek React portfolio template for developers and designers with project showcase, contact form, and smooth animations.",
      cover_image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-template.jpg",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-about.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-work.jpg",
      ],
      features: [
        "Project Showcase",
        "Contact Form",
        "Smooth Animations",
        "SEO Ready",
      ],
      rating: 4.9,
      uses: 8900,
    },
    {
      name: "Bloggy",
      type: "blog",
      programming_language: "HTML / CSS / JavaScript",
      status: "free",
      code: "bloggy-template",
      detail:
        "Minimal and elegant blogging template with article cards, sidebar, comment section, and SEO friendly structure.",
      cover_image:
        "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N8ZW58MHwwfDB8fHww",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/blog-post.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/blog-home.jpg",
      ],
      features: ["Article Cards", "Comment System", "SEO Friendly", "Sidebar"],
      rating: 4.7,
      uses: 15600,
    },
    {
      name: "AnimateX",
      type: "animated",
      programming_language: "React + GSAP + Three.js",
      status: "premium",
      code: "animatex-gsap",
      detail:
        "A stunning animated template with parallax scrolling, 3D effects using Three.js, and smooth transitions built with GSAP.",
      cover_image:
        "https://images.unsplash.com/photo-1636716731103-11242116065a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWF0ZWR8ZW58MHwwfDB8fHww",
      example_images: [
        "https://cdn.dribbble.com/users/1044993/screenshots/animated-1.png",
        "https://cdn.dribbble.com/users/1044993/screenshots/animated-2.png",
      ],
      features: [
        "3D Effects",
        "Parallax Scrolling",
        "GSAP Animations",
        "Premium Support",
      ],
      rating: 4.9,
      uses: 3200,
      price: "₹149",
    },
    {
      name: "BizPro",
      type: "business",
      programming_language: "HTML / CSS / JavaScript",
      status: "free",
      code: "bizpro-bootstrap",
      detail:
        "A modern business and agency template with sections for services, testimonials, about, and contact form.",
      cover_image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1c2luZXNzfGVufDB8MHwwfHx8MA%3D%3D",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/business-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/business-services.jpg",
      ],
      features: [
        "Services Section",
        "Testimonials",
        "Contact Form",
        "Responsive",
      ],
      rating: 4.6,
      uses: 11200,
    },
    {
      name: "LandingX",
      type: "landing page",
      programming_language: "Next.js + Tailwind CSS",
      status: "premium",
      code: "landingx-nextjs",
      detail:
        "A high-conversion landing page template built in Next.js with responsive CTA sections, pricing tables, and A/B testing layouts.",
      cover_image:
        "https://images.unsplash.com/photo-1584824486516-0555a07fc511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZGluZyUyMHBhZ2V8ZW58MHwwfDB8fHww",
      example_images: [
        "https://cdn.dribbble.com/users/landing1.png",
        "https://cdn.dribbble.com/users/landing2.png",
      ],
      features: ["High Conversion", "A/B Testing", "Pricing Tables", "Next.js"],
      rating: 5.0,
      uses: 2800,
      price: "₹239",
    },
    {
      name: "Artfolio",
      type: "portfolio",
      programming_language: "React + Tailwind CSS",
      status: "premium",
      code: "artfolio-template",
      detail:
        "Creative portfolio template designed for photographers, illustrators, and artists with gallery layout and animations.",
      cover_image:
        "https://images.unsplash.com/file-1715651741414-859baba4300dimage?w=416&dpr=2&auto=format&fit=crop&q=60",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/artfolio-gallery.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/artfolio-about.jpg",
      ],
      features: [
        "Gallery Layout",
        "Creative Design",
        "Smooth Animations",
        "Artist Focused",
      ],
      rating: 4.8,
      uses: 1900,
      price: "₹45",
    },
    {
      name: "Newsify",
      type: "blog / news",
      programming_language: "HTML / CSS / JavaScript",
      status: "premium",
      code: "newsify-wordpress",
      detail:
        "A professional news/blog template built with WordPress. Includes category pages, featured news slider, and AdSense areas.",
      cover_image:
        "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfDB8MHx8fDA%3D",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/news-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/news-article.jpg",
      ],
      features: ["WordPress", "News Slider", "AdSense Ready", "Category Pages"],
      rating: 4.7,
      uses: 4200,
      price: "₹159",
    },
    {
      name: "EduLearn",
      type: "education",
      programming_language: "React + Tailwind CSS",
      status: "free",
      code: "edulearn-react",
      detail:
        "Education and course platform template with class listing, teacher profiles, and enrollment system.",
      cover_image:
        "https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbnxlbnwwfDB8MHx8fDA%3D",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/edulearn-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/edulearn-courses.jpg",
      ],
      features: [
        "Course Platform",
        "Teacher Profiles",
        "Enrollment System",
        "React",
      ],
      rating: 4.8,
      uses: 6800,
    },
    {
      name: "Medicare",
      type: "healthcare",
      programming_language: "HTML / CSS / JavaScript",
      status: "premium",
      code: "medicare-html",
      detail:
        "Healthcare and medical services template with doctor profiles, appointment booking form, and service details.",
      cover_image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhlYWx0aCUyMGNhcmV8ZW58MHwwfDB8fHww",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/medicare-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/medicare-services.jpg",
      ],
      features: [
        "Appointment Booking",
        "Doctor Profiles",
        "Service Details",
        "Healthcare",
      ],
      rating: 4.9,
      uses: 1500,
      price: "₹355",
    },
    {
      name: "Foodies",
      type: "restaurant",
      programming_language: "React + Tailwind CSS",
      status: "free",
      code: "foodies-html",
      detail:
        "A restaurant website template with menu showcase, reservation form, and elegant parallax effects.",
      cover_image:
        "https://plus.unsplash.com/premium_photo-1681493207807-19e77818dc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3R1cmFudHxlbnwwfDB8MHx8fDA%3D",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/restaurant-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/restaurant-menu.jpg",
      ],
      features: [
        "Menu Showcase",
        "Reservation Form",
        "Parallax Effects",
        "Restaurant",
      ],
      rating: 4.7,
      uses: 9400,
    },
    {
      name: "StartupX",
      type: "startup / SaaS",
      programming_language: "React/Next JS + Tailwind CSS",
      status: "premium",
      code: "startupx-vue",
      detail:
        "A SaaS/startup landing template with pricing tables, product features, testimonial carousel, and integrations section.",
      cover_image:
        "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Fhc3xlbnwwfDB8MHx8fDA%3D",
      example_images: [
        "https://cdn.dribbble.com/users/startup1.png",
        "https://cdn.dribbble.com/users/startup2.png",
      ],
      features: [
        "SaaS Focused",
        "Pricing Tables",
        "Testimonial Carousel",
        "Vue.js",
      ],
      rating: 4.9,
      uses: 3100,
      price: "₹349",
    },
  ];

  useEffect(() => {
    if (templates) {
      setTemplates(templateData);
    }
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
                type="text"
                placeholder="Search Templates"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="max-w-full px-5 lg:px-10 py-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {/* Custom Template Card */}
            <div>
              {" "}
              {/* Redirect Page */}
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
                    A custom e-commerce template crafted with AI magic to match
                    your brand, featuring a modern, responsive design and smart
                    interactive elements for an enhanced shopping experience.
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
                key={template.code}
                className="bg-gray-800/30 cursor-pointer backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={template.cover_image}
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
                        {template.price}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {template.detail}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
