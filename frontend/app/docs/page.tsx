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
  FaCloud,
  FaMobile,
  FaGlobe,
  FaDatabase,
  FaCog,
  FaBook,
  FaSearch,
  FaArrowRight,
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

type DocumentationSection = {
  title: string;
  description: string;
  content: Array<{
    type: string;
    text?: string;
    title?: string;
    items?: string[] | any[];
    features?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    agents?: Array<{
      name: string;
      role: string;
      description: string;
      capabilities: string[];
    }>;
    plans?: Array<{
      name: string;
      price: string;
      for: string;
      features: string[];
    }>;
    categories?: Array<{
      category: string;
      technologies: string[];
    }>;
    steps?: string[];
    channels?: Array<{
      icon: React.ReactNode;
      name: string;
      description: string;
      link: string;
    }>;
  }>;
};

type DocumentationContent = {
  [key: string]: DocumentationSection;
};

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarSections = [
    { id: "overview", name: "Overview", icon: <FaBook /> },
    { id: "creator-mode", name: "Creator Mode", icon: <FaMagic /> },
    { id: "dev-mode", name: "Dev Mode", icon: <FaLaptopCode /> },
    { id: "features", name: "Core Features", icon: <FaCog /> },
    { id: "ai-agents", name: "AI Agents", icon: <FaRobot /> },
    { id: "pricing", name: "Pricing", icon: <FaRocket /> },
    { id: "tech-stack", name: "Tech Stack", icon: <FaCode /> },
    { id: "security", name: "Security", icon: <FaShieldAlt /> },
    { id: "guides", name: "Quick Start Guides", icon: <FaPlay /> },
    { id: "support", name: "Support", icon: <FaUsers /> },
  ];

  const documentationContent: DocumentationContent = {
    overview: {
      title: "Cobra AI 2.0 Documentation",
      description:
        "An AI-agentic coding and website creation platform that empowers both developers and creators to build full-stack web projects in real-time.",
      content: [
        {
          type: "intro",
          text: "Whether you code or not, Cobra AI is your intelligent partner for development, design, and deployment. Cobra AI 2.0 is a next-generation AI workspace that merges real-time collaboration, AI-driven development, and automated project creation into a single intuitive platform.",
        },
        {
          type: "highlights",
          title: "Key Capabilities",
          items: [
            "🧠 AI-Assisted Development — Write, debug, and deploy with AI coding companion",
            "🕹️ Creator Mode (No-Code) — Generate websites, branding, and content with simple prompts",
            "💻 Dev Mode (For Coders) — Real-time collaborative coding powered by Monaco Editor + Yjs",
            "🌐 Live Execution — Run full-stack code instantly via WebContainers and get AI error fixes",
            "🧩 Full-Stack Automation — Build React, Node.js, MongoDB apps in one click",
            "🔗 MCP Server Integration — Give AI the ability to interact with files, APIs, and databases",
            "☁️ Instant Hosting — Deploy on Vercel, Netlify, or Render with one click",
          ],
        },
      ],
    },
    "creator-mode": {
      title: "Creator Mode - For Non-Coders",
      description:
        "Build websites, portfolios, and stores with AI — no coding required.",
      content: [
        {
          type: "features",
          title: "Key Features",
          items: [
            {
              icon: "🪄",
              title: "AI Template Generator",
              description:
                "Choose from 50+ website templates (E-commerce, Portfolio, Blog, SaaS, etc.)",
            },
            {
              icon: "🎨",
              title: "Brand Customization",
              description:
                "AI adapts templates to your brand logo, colors, and style",
            },
            {
              icon: "✍️",
              title: "AI Content Generator",
              description:
                "Generate engaging content with tone control and SEO optimization",
            },
            {
              icon: "🖼️",
              title: "AI Image Integration",
              description:
                "Auto-selects images from Unsplash, Pexels, or generates custom visuals",
            },
            {
              icon: "⚡",
              title: "Live Preview",
              description:
                "Instantly view your AI-generated website before publishing",
            },
            {
              icon: "🌍",
              title: "One-Click Deployment",
              description: "Publish instantly to Vercel or Render",
            },
          ],
        },
        {
          type: "usecases",
          title: "Example Use Cases",
          items: [
            "Personal portfolios",
            "Business landing pages",
            "Product websites",
            "Blogs with AI-written posts",
            "Non-profit or educational sites",
            "Event websites",
            "Service business sites",
          ],
        },
      ],
    },
    "dev-mode": {
      title: "Dev Mode - For Coders",
      description:
        "For developers who want full control, real-time collaboration, and AI-augmented coding.",
      content: [
        {
          type: "features",
          title: "Advanced Development Features",
          items: [
            {
              icon: "🧠",
              title: "AI Coding Mentor",
              description:
                "Get smart code suggestions, refactors, and explanations",
            },
            {
              icon: "💬",
              title: "@AI Collaboration",
              description:
                "Chat with AI in your coding group to ask, debug, or generate code instantly",
            },
            {
              icon: "👥",
              title: "Real-Time Collaboration",
              description:
                "Work with teammates live via Yjs-based multi-cursor editing",
            },
            {
              icon: "⚙️",
              title: "Full-Stack Generation",
              description:
                "Create complete MERN stack apps from a single prompt",
            },
            {
              icon: "🧾",
              title: "WebContainers",
              description:
                "Run code instantly in your browser — no local setup",
            },
            {
              icon: "🔐",
              title: "Error Detection & Fixing",
              description:
                "AI automatically detects, highlights, and suggests fixes in real-time",
            },
          ],
        },
        {
          type: "usecases",
          title: "Developer Use Cases",
          items: [
            "AI-Powered IDE for developers",
            "Collaborative group coding sessions",
            "Full-stack project generation",
            "API or backend creation",
            "Team debugging and version management",
            "Rapid prototyping and MVP development",
            "Educational coding environments",
          ],
        },
      ],
    },
    features: {
      title: "Core Features",
      description: "Comprehensive overview of all platform capabilities",
      content: [
        {
          type: "feature-grid",
          features: [
            {
              title: "AI-Powered Template Engine",
              description:
                "Automatically builds websites or apps based on your prompt. Example: 'Create a SaaS landing page for an AI tool with pricing and testimonials.'",
              capabilities: [
                "50+ templates",
                "Brand adaptation",
                "AI-written text & image selection",
                "One-click deployment",
              ],
            },
            {
              title: "Real-Time Collaborative Coding",
              description:
                "Multiple users can code together live with conflict-free merging and live cursors.",
              capabilities: [
                "Cursor tracking",
                "Live sync",
                "Version conflict resolution",
                "Chat-based communication",
              ],
            },
            {
              title: "AI Coding Mentor",
              description:
                "MambaAI assists you like a senior developer with intelligent code assistance.",
              capabilities: [
                "Code explanation",
                "Bug detection & auto-fix",
                "Performance optimization",
                "Best practices",
              ],
            },
            {
              title: "WebContainers Live Preview",
              description:
                "Experience instant code execution in the browser with full development environment.",
              capabilities: [
                "Live reloading",
                "Multi-tab output",
                "Console & logs view",
                "Integrated terminal",
              ],
            },
            {
              title: "Smart Brand Integration",
              description:
                "AI automatically generates color themes, font styles, and UI components based on your brand.",
              capabilities: [
                "Auto-color palette",
                "Logo-based themes",
                "Typography consistency",
                "Tone matching",
              ],
            },
            {
              title: "MCP Server Integration",
              description:
                "Cobra AI can use tools securely via the Model Context Protocol for advanced operations.",
              capabilities: [
                "File management",
                "API execution",
                "Database setup",
                "Automated workflows",
              ],
            },
          ],
        },
      ],
    },
    "ai-agents": {
      title: "AI Agents in Cobra 2.0",
      description: "Specialized AI agents for different development tasks",
      content: [
        {
          type: "agents",
          agents: [
            {
              name: "MambaAI",
              role: "Core AI Assistant",
              description:
                "Generates, debugs, and explains code across multiple programming languages",
              capabilities: [
                "Code generation",
                "Debugging assistance",
                "Code explanation",
                "Best practices",
              ],
            },
            {
              name: "BrandAI",
              role: "Design & Branding",
              description:
                "Creates visuals, colors, and layouts that match your brand identity",
              capabilities: [
                "Color palette generation",
                "Layout design",
                "Typography selection",
                "Style consistency",
              ],
            },
            {
              name: "DevOpsAI",
              role: "Deployment Manager",
              description:
                "Handles deployment configurations and hosting platform integrations",
              capabilities: [
                "Build configuration",
                "Deployment automation",
                "Environment setup",
                "CI/CD pipelines",
              ],
            },
            {
              name: "DocuAI",
              role: "Documentation Writer",
              description:
                "Auto-generates project READMEs, API documentation, and user guides",
              capabilities: [
                "README generation",
                "API documentation",
                "Code comments",
                "User manuals",
              ],
            },
            {
              name: "DataAI",
              role: "Database Helper",
              description:
                "Creates database schemas, queries, and manages data relationships",
              capabilities: [
                "Schema design",
                "Query optimization",
                "Data modeling",
                "Migration scripts",
              ],
            },
          ],
        },
      ],
    },
    pricing: {
      title: "Pricing Plans",
      description: "Choose the plan that fits your needs and budget",
      content: [
        {
          type: "pricing-table",
          plans: [
            {
              name: "Starter",
              price: "Free",
              for: "Beginners",
              features: [
                "Basic templates",
                "1GB storage",
                "5 sites",
                "Community support",
              ],
            },
            {
              name: "Creator",
              price: "₹149/mo",
              for: "Non-coders",
              features: [
                "Full Creator Mode",
                "AI visuals",
                "Unlimited sites",
                "Premium templates",
                "Brand tools",
              ],
            },
            {
              name: "DevX",
              price: "₹699/mo",
              for: "Developers",
              features: [
                "Full-stack AI",
                "WebContainers",
                "MCP access",
                "Team collaboration",
                "Custom domains",
              ],
            },
            {
              name: "Enterprise",
              price: "₹1999/mo",
              for: "Organizations",
              features: [
                "Dedicated server",
                "SLA guarantee",
                "Custom AI training",
                "Advanced security",
                "API access",
              ],
            },
          ],
        },
      ],
    },
    "tech-stack": {
      title: "Technology Stack",
      description: "Built with modern, scalable technologies",
      content: [
        {
          type: "tech-grid",
          categories: [
            {
              category: "Frontend",
              technologies: [
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Monaco Editor",
                "WebSocket",
              ],
            },
            {
              category: "Backend",
              technologies: [
                "Node.js",
                "Express.js",
                "WebRTC",
                "Redis",
                "PostgreSQL",
              ],
            },
            {
              category: "AI & ML",
              technologies: [
                "MambaAI (custom LLM)",
                "MCP Servers",
                "OpenAI/Gemini APIs",
                "Custom AI Models",
              ],
            },
            {
              category: "Infrastructure",
              technologies: ["Docker", "AWS", "Vercel", "WebContainers", "CDN"],
            },
            {
              category: "Collaboration",
              technologies: [
                "Yjs CRDT",
                "Liveblocks",
                "Socket.io",
                "Conflict resolution",
              ],
            },
            {
              category: "Deployment",
              technologies: [
                "Vercel",
                "Netlify",
                "Render",
                "GitHub Pages",
                "Custom CLI",
              ],
            },
          ],
        },
      ],
    },
    security: {
      title: "Security & Privacy",
      description: "Enterprise-level protection for your data and projects",
      content: [
        {
          type: "security-features",
          features: [
            "End-to-end encrypted collaboration",
            "Role-based project access control",
            "Encrypted file storage at rest and in transit",
            "AI access control with MCP security sandbox",
            "GDPR and privacy compliance",
            "Regular security audits and penetration testing",
            "Two-factor authentication (2FA) support",
            "Data backup and disaster recovery",
          ],
        },
      ],
    },
    guides: {
      title: "Quick Start Guides",
      description: "Get started with Cobra AI 2.0 in minutes",
      content: [
        {
          type: "guide",
          title: "🧑‍💻 Developer Guide",
          steps: [
            "Step 1: Create a Workspace - Sign in → Click 'New Project' → Choose Dev Mode",
            "Step 2: Choose Template or Prompt - Select prebuilt template or describe your app",
            "Step 3: Collaborate & Edit - Invite team members and code together in real time",
            "Step 4: Run with WebContainers - See live output instantly in browser",
            "Step 5: Deploy - Publish directly to hosting platform with one click",
          ],
        },
        {
          type: "guide",
          title: "🎨 Creator Guide (Non-Coders)",
          steps: [
            "Choose Creator Mode on launch",
            "Pick a template (Portfolio, E-commerce, Blog, etc.)",
            "Enter brand name, tagline, and color preference",
            "AI generates your site with text, images, and layout",
            "Customize sections visually without coding",
            "Click Deploy to publish instantly",
          ],
        },
      ],
    },
    support: {
      title: "Support & Community",
      description: "Get help and connect with other users",
      content: [
        {
          type: "support-channels",
          channels: [
            {
              icon: <FaDiscord />,
              name: "Community Forum",
              description: "Cobra AI Discussions and community support",
              link: "#",
            },
            {
              icon: <FaEnvelope />,
              name: "Email Support",
              description: "Direct support from our team",
              link: "mailto:support@cobraai.dev",
            },
            {
              icon: <FaGithub />,
              name: "GitHub Issues",
              description: "Report bugs and feature requests",
              link: "https://github.com/201Harsh/cobra-ai",
            },
            {
              icon: <FaTwitter />,
              name: "Twitter",
              description: "Latest updates and announcements",
              link: "https://twitter.com/CobraAI_Official",
            },
          ],
        },
        {
          type: "roadmap",
          title: "Upcoming Features (Cobra 2.1 Roadmap)",
          items: [
            "🧩 Plugin Store (Custom AI Agents)",
            "🖼️ AI UI Designer (Drag & drop builder)",
            "🔊 Voice-to-Code feature",
            "💬 In-app AI voice assistant",
            "💾 Offline mode with local caching",
            "🧠 MambaAI 2.0 (Self-learning contextual model)",
          ],
        },
      ],
    },
  };

  const currentContent: DocumentationSection =
    documentationContent[activeSection];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cobra AI 2.0{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete guide to building amazing websites and applications with
              AI assistance
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 sticky top-24">
                {/* Search */}
                <div className="relative mb-6">
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {sidebarSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <span className="font-medium">{section.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    {currentContent.title}
                  </h2>
                  <p className="text-xl text-gray-300">
                    {currentContent.description}
                  </p>
                </div>

                <div className="space-y-8">
                  {currentContent.content.map((section: any, index: number) => (
                    <div key={index} className="space-y-6">
                      {/* Intro Text */}
                      {section.type === "intro" && (
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {section.text}
                        </p>
                      )}

                      {/* Highlights List */}
                      {section.type === "highlights" && (
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.items.map((item: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3 text-gray-300"
                              >
                                <span className="text-emerald-400 mt-1 flex-shrink-0">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Feature Grid */}
                      {section.type === "features" && (
                        <div>
                          <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                            {section.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {section.items.map((feature: any, idx: number) => (
                              <div
                                key={idx}
                                className="bg-gray-700/30 rounded-xl p-6 border border-gray-600"
                              >
                                <div className="flex items-center space-x-3 mb-3">
                                  <span className="text-2xl">
                                    {feature.icon}
                                  </span>
                                  <h4 className="text-xl font-bold">
                                    {feature.title}
                                  </h4>
                                </div>
                                <p className="text-gray-300">
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Use Cases */}
                      {section.type === "usecases" && (
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                            {section.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.items.map(
                              (usecase: string, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex items-center space-x-3 text-gray-300"
                                >
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                  <span>{usecase}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Feature Grid Detailed */}
                      {section.type === "feature-grid" && (
                        <div className="space-y-6">
                          {section.features.map((feature: any, idx: number) => (
                            <div
                              key={idx}
                              className="bg-gray-700/30 rounded-xl p-6 border border-gray-600"
                            >
                              <h3 className="text-xl font-bold mb-3 text-emerald-400">
                                {feature.title}
                              </h3>
                              <p className="text-gray-300 mb-4">
                                {feature.description}
                              </p>
                              <div className="grid grid-cols-2 gap-2">
                                {feature.capabilities.map(
                                  (capability: string, capIdx: number) => (
                                    <div
                                      key={capIdx}
                                      className="flex items-center space-x-2 text-sm text-emerald-300"
                                    >
                                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                      <span>{capability}</span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* AI Agents */}
                      {section.type === "agents" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {section.agents.map((agent: any, idx: number) => (
                            <div
                              key={idx}
                              className="bg-gray-700/30 rounded-xl p-6 border border-gray-600"
                            >
                              <h3 className="text-xl font-bold mb-2 text-emerald-400">
                                {agent.name}
                              </h3>
                              <p className="text-blue-400 font-semibold mb-3">
                                {agent.role}
                              </p>
                              <p className="text-gray-300 mb-4">
                                {agent.description}
                              </p>
                              <div className="space-y-2">
                                {agent.capabilities.map(
                                  (capability: string, capIdx: number) => (
                                    <div
                                      key={capIdx}
                                      className="flex items-center space-x-2 text-sm text-emerald-300"
                                    >
                                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                      <span>{capability}</span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Pricing Table */}
                      {section.type === "pricing-table" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {section.plans.map((plan: any, idx: number) => (
                            <div
                              key={idx}
                              className="bg-gray-700/30 rounded-xl p-6 border border-gray-600 text-center"
                            >
                              <h3 className="text-xl font-bold mb-2">
                                {plan.name}
                              </h3>
                              <div className="text-2xl font-bold text-emerald-400 mb-1">
                                {plan.price}
                              </div>
                              <p className="text-gray-400 text-sm mb-4">
                                {plan.for}
                              </p>
                              <div className="space-y-2 mb-6">
                                {plan.features.map(
                                  (feature: string, featIdx: number) => (
                                    <div
                                      key={featIdx}
                                      className="text-sm text-gray-300"
                                    >
                                      {feature}
                                    </div>
                                  )
                                )}
                              </div>
                              <Link
                                href="/register"
                                className="block w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                              >
                                Get Started
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack */}
                      {section.type === "tech-grid" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {section.categories.map(
                            (category: any, idx: number) => (
                              <div
                                key={idx}
                                className="bg-gray-700/30 rounded-xl p-6 border border-gray-600"
                              >
                                <h3 className="text-xl font-bold mb-4 text-emerald-400">
                                  {category.category}
                                </h3>
                                <div className="space-y-2">
                                  {category.technologies.map(
                                    (tech: string, techIdx: number) => (
                                      <div
                                        key={techIdx}
                                        className="flex items-center space-x-2 text-gray-300"
                                      >
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                        <span>{tech}</span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* Security Features */}
                      {section.type === "security-features" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.features.map(
                            (feature: string, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-3 text-gray-300"
                              >
                                <FaShieldAlt className="text-emerald-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* Guides */}
                      {section.type === "guide" && (
                        <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                          <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                            {section.title}
                          </h3>
                          <div className="space-y-3">
                            {section.steps.map((step: any, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0">
                                  {idx + 1}
                                </div>
                                <p className="text-gray-300">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Support Channels */}
                      {section.type === "support-channels" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {section.channels.map((channel: any, idx: number) => (
                            <a
                              key={idx}
                              href={channel.link}
                              className="bg-gray-700/30 rounded-xl p-6 border border-gray-600 hover:border-emerald-500/30 transition-all duration-300 group"
                            >
                              <div className="flex items-center space-x-4">
                                <div className="text-2xl text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                  {channel.icon}
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold mb-1">
                                    {channel.name}
                                  </h3>
                                  <p className="text-gray-300">
                                    {channel.description}
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Roadmap */}
                      {section.type === "roadmap" && (
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                            {section.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.items.map((item: any, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-3 text-gray-300"
                              >
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-700 flex justify-between">
                  <button
                    onClick={() => {
                      const currentIndex = sidebarSections.findIndex(
                        (s) => s.id === activeSection
                      );
                      const prevSection = sidebarSections[currentIndex - 1];
                      if (prevSection) setActiveSection(prevSection.id);
                    }}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={activeSection === sidebarSections[0].id}
                  >
                    <FaArrowRight className="rotate-180" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={() => {
                      const currentIndex = sidebarSections.findIndex(
                        (s) => s.id === activeSection
                      );
                      const nextSection = sidebarSections[currentIndex + 1];
                      if (nextSection) setActiveSection(nextSection.id);
                    }}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                    disabled={
                      activeSection ===
                      sidebarSections[sidebarSections.length - 1].id
                    }
                  >
                    <span>Next</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Documentation;
