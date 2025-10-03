"use client";
import React, { useState } from "react";
import {
  FaCode,
  FaMagic,
  FaLaptopCode,
  FaUsers,
  FaRobot,
  FaRocket,
  FaPlay,
  FaShieldAlt,
  FaSync,
  FaMobile,
  FaGlobe,
  FaDatabase,
  FaCog,
  FaCheck,
  FaArrowRight,
  FaStar,
  FaLightbulb,
  FaCloud,
} from "react-icons/fa";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Features = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const featureCategories = [
    { id: "all", name: "All Features", icon: <FaStar /> },
    { id: "beginner", name: "Beginner Mode", icon: <FaMagic /> },
    { id: "coder", name: "Coder Mode", icon: <FaLaptopCode /> },
    { id: "ai", name: "AI Capabilities", icon: <FaRobot /> },
    { id: "collaboration", name: "Collaboration", icon: <FaUsers /> },
    { id: "deployment", name: "Deployment", icon: <FaRocket /> },
  ];

  const allFeatures = [
    {
      id: 1,
      title: "AI-Powered Template Engine",
      description:
        "Instantly generate professional websites from templates with AI handling content, branding, and image integration.",
      category: "beginner",
      icon: <FaMagic className="text-2xl" />,
      highlights: [
        "50+ professionally designed templates",
        "AI content generation",
        "Automatic image optimization",
        "Brand consistency maintenance",
      ],
      status: "live",
    },
    {
      id: 2,
      title: "Real-time Collaborative Coding",
      description:
        "Multiple developers can code together simultaneously with live synchronization and conflict resolution.",
      category: "coder",
      icon: <FaUsers className="text-2xl" />,
      highlights: [
        "Live multi-user editing",
        "Conflict-free synchronization",
        "User presence indicators",
        "Real-time cursor tracking",
      ],
      status: "live",
    },
    {
      id: 3,
      title: "AI Coding Mentor",
      description:
        "Get instant code suggestions, explanations, and best practices from your AI coding assistant.",
      category: "ai",
      icon: <FaRobot className="text-2xl" />,
      highlights: [
        "Code explanation & documentation",
        "Bug detection & fixes",
        "Performance optimization",
        "Best practice suggestions",
      ],
      status: "live",
    },
    {
      id: 4,
      title: "Live WebContainers Preview",
      description:
        "See your changes instantly with browser-based code execution and live reloading.",
      category: "coder",
      icon: <FaPlay className="text-2xl" />,
      highlights: [
        "Instant code execution",
        "Hot reload capabilities",
        "Browser dev tools integration",
        "Multi-browser testing",
      ],
      status: "live",
    },
    {
      id: 5,
      title: "Smart Brand Integration",
      description:
        "AI automatically adapts templates to match your brand identity, colors, and messaging.",
      category: "beginner",
      icon: <FaCog className="text-2xl" />,
      highlights: [
        "Brand color matching",
        "Content tone adaptation",
        "Logo integration",
        "Style consistency",
      ],
      status: "live",
    },
    {
      id: 6,
      title: "One-Click Deployment",
      description:
        "Deploy your projects to production with a single click to major hosting platforms.",
      category: "deployment",
      icon: <FaRocket className="text-2xl" />,
      highlights: [
        "Vercel integration",
        "Netlify deployment",
        "Custom domain setup",
        "SSL certification",
      ],
      status: "live",
    },
    {
      id: 7,
      title: "MCP Server Integration",
      description:
        "Advanced AI agent capabilities through Model Context Protocol for complex tasks.",
      category: "ai",
      icon: <FaSync className="text-2xl" />,
      highlights: [
        "File system operations",
        "Database management",
        "API integration",
        "Automated workflows",
      ],
      status: "live",
    },
    {
      id: 8,
      title: "Group Project Management",
      description:
        "Organize team projects with role-based access control and project templates.",
      category: "collaboration",
      icon: <FaGlobe className="text-2xl" />,
      highlights: [
        "Team role management",
        "Project templates",
        "Progress tracking",
        "Resource allocation",
      ],
      status: "beta",
    },
    {
      id: 9,
      title: "Automated Error Detection",
      description:
        "AI continuously monitors code for errors and suggests fixes in real-time.",
      category: "ai",
      icon: <FaShieldAlt className="text-2xl" />,
      highlights: [
        "Real-time error scanning",
        "Fix suggestions",
        "Security vulnerability detection",
        "Code quality metrics",
      ],
      status: "live",
    },
    {
      id: 10,
      title: "Mobile-First Optimization",
      description:
        "All generated websites are automatically optimized for mobile devices.",
      category: "beginner",
      icon: <FaMobile className="text-2xl" />,
      highlights: [
        "Responsive design",
        "Mobile performance",
        "Touch optimization",
        "Progressive Web App ready",
      ],
      status: "live",
    },
    {
      id: 11,
      title: "Database Integration",
      description:
        "Seamlessly integrate databases with AI-assisted schema design and queries.",
      category: "coder",
      icon: <FaDatabase className="text-2xl" />,
      highlights: [
        "SQL & NoSQL support",
        "Schema generation",
        "Query optimization",
        "Data migration tools",
      ],
      status: "beta",
    },
    {
      id: 12,
      title: "Asset Management System",
      description:
        "AI-powered image and asset optimization with automatic format conversion.",
      category: "beginner",
      icon: <FaCloud className="text-2xl" />,
      highlights: [
        "Image optimization",
        "Format conversion",
        "CDN integration",
        "Asset versioning",
      ],
      status: "live",
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? allFeatures
      : allFeatures.filter((feature) => feature.category === activeCategory);

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners and personal projects",
      features: [
        "5 AI-generated websites",
        "Basic templates",
        "Community support",
        "1GB storage",
        "Standard deployment",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For professionals and small teams",
      features: [
        "Unlimited websites",
        "All premium templates",
        "Priority support",
        "10GB storage",
        "Advanced AI features",
        "Custom domains",
        "Team collaboration",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Dedicated instance",
        "SLA guarantee",
        "Custom AI training",
        "Advanced security",
        "Dedicated support",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
              <FaLightbulb className="text-emerald-400" />
              <span className="text-sm">
                Powerful Features for Every Creator
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Build Amazing Things
              </span>
            </h1>

            <p className="md:text-xl text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you're a complete beginner or an experienced developer,
              Cobra AI 2.0 provides all the tools and AI assistance you need to
              create, collaborate, and deploy with confidence.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {featureCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                      : "bg-gray-800/30 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-700"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-emerald-500/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      feature.status === "live"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {feature.status === "live" ? "LIVE" : "BETA"}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-emerald-300"
                    >
                      <FaCheck className="text-emerald-400 text-xs" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Beginner vs Coder Mode</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the experience that matches your skill level and
              requirements
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Beginner Mode */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMagic className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Beginner Mode</h3>
                  <p className="text-emerald-400 font-semibold">
                    No Coding Required
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "AI-powered template selection",
                    "Automatic brand integration",
                    "Drag-and-drop customization",
                    "Live preview with WebContainers",
                    "One-click deployment",
                    "Mobile optimization",
                    "SEO-friendly output",
                    "Built-in analytics",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <FaCheck className="text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400 text-center">
                    Perfect for: Entrepreneurs, Bloggers, Small Businesses,
                    Content Creators
                  </p>
                </div>
              </div>

              {/* Coder Mode */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaLaptopCode className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Coder Mode</h3>
                  <p className="text-blue-400 font-semibold">
                    Advanced Development
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Real-time collaborative coding",
                    "AI coding mentor & assistant",
                    "Full-stack project scaffolding",
                    "Live browser execution",
                    "Database integration",
                    "Team project management",
                    "Advanced debugging tools",
                    "Custom deployment pipelines",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <FaCheck className="text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400 text-center">
                    Perfect for: Developers, Tech Teams, Students, Startups
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Deep Dive */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powered by cutting-edge AI technology to supercharge your
              development workflow
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Code Intelligence",
                  description:
                    "AI understands your code context and provides relevant suggestions",
                  features: [
                    "Smart autocomplete",
                    "Error prediction",
                    "Code refactoring",
                    "Pattern recognition",
                  ],
                },
                {
                  title: "Content Generation",
                  description:
                    "AI creates and optimizes content based on your requirements",
                  features: [
                    "Text generation",
                    "Image optimization",
                    "SEO content",
                    "Brand voice matching",
                  ],
                },
                {
                  title: "Project Automation",
                  description:
                    "AI handles repetitive tasks and project setup automatically",
                  features: [
                    "File generation",
                    "Dependency management",
                    "Build configuration",
                    "Deployment setup",
                  ],
                },
              ].map((capability, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6"
                >
                  <h3 className="text-xl font-bold mb-3 text-emerald-400">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-emerald-300"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start free and upgrade as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl border p-8 relative ${
                  plan.popular
                    ? "border-emerald-500/50 border-2 scale-105"
                    : "border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <FaCheck className="text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/register"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                      : "bg-gray-700 hover:bg-gray-600 border border-gray-600"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience All These Features?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and developers building amazing
              projects with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <FaRocket />
                <span>Start Free Today</span>
              </Link>
              <Link
                href="/demo"
                className="cursor-pointer border border-emerald-500/30 hover:border-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2"
              >
                <FaPlay />
                <span>Watch Live Demo</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Features;
